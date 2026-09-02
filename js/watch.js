
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoId = urlParams.get("id");
  
  if (!videoId) {
    showError();
    return;
  }
  
  const videoData = findMediaById(videoId);
  if (!videoData) {
    showError();
    return;
  }
  
  initWatchPage(videoData);
});

function showError() {
  document.getElementById("watch-error").classList.add("active");
  document.getElementById("watch-content").style.display = "none";
  document.getElementById("watch-meta").style.display = "none";
}

let currentVideoId = null;
let watchVideo = null;

function initWatchPage(item) {
  currentVideoId = item.id;
  document.getElementById("watch-content").style.display = "block";
  document.getElementById("watch-meta").style.display = "grid";
  
  document.getElementById("meta-title").innerText = item.title;
  
  const genres = Array.isArray(item.genres) ? item.genres.join(", ") : item.category;
  document.getElementById("meta-tags").innerHTML = `
    <span class="watch-badge">${item.badge || item.category}</span>
    <span>${item.year || "2026"}</span>
    <span>•</span>
    <span>${item.duration || "N/A"}</span>
    <span>•</span>
    <span>${item.language || "English"}</span>
    <span>•</span>
    <span>${genres}</span>
  `;
  document.getElementById("meta-desc").innerText = item.description || "";
  
  const btnWatchlist = document.getElementById("btn-watchlist");
  if (OXOApp.watchlist.includes(item.id)) {
    btnWatchlist.classList.add("active");
    btnWatchlist.innerHTML = `<i class="fas fa-check"></i> In Watchlist`;
  }
  
  watchVideo = document.getElementById("watch-video");
  watchVideo.src = item.videoUrl || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  watchVideo.poster = item.backdrop || item.poster;
  
  document.getElementById("watch-quality").innerText = item.quality || "4K ULTRA HD";
  
  initPlayerControls();
  checkContinueWatching();
  populateRelated(item);
  
  document.title = `${item.title} | Watch | OXO XTREAM`;
}

function initPlayerControls() {
  const playBtn = document.getElementById("watch-play-btn");
  const rewind = document.getElementById("watch-rewind");
  const forward = document.getElementById("watch-forward");
  const volume = document.getElementById("watch-volume");
  const timeDisplay = document.getElementById("watch-time");
  const speedBtn = document.getElementById("watch-speed");
  const pipBtn = document.getElementById("watch-pip");
  const fsBtn = document.getElementById("watch-fullscreen");
  const progressContainer = document.getElementById("watch-progress-bar");
  const progressFilled = document.getElementById("watch-progress-filled");
  
  const togglePlay = () => {
    if (watchVideo.paused || watchVideo.ended) {
      watchVideo.play().catch(()=>{});
      playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    } else {
      watchVideo.pause();
      playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
  };
  
  playBtn.onclick = togglePlay;
  watchVideo.onclick = togglePlay;
  
  watchVideo.addEventListener("ended", () => {
    playBtn.innerHTML = `<i class="fas fa-redo"></i>`;
  });
  
  watchVideo.ontimeupdate = () => {
    if (!watchVideo.duration) return;
    const progress = (watchVideo.currentTime / watchVideo.duration) * 100;
    progressFilled.style.width = `${progress}%`;
    
    const formatTime = (time) => {
      const m = Math.floor(time / 60);
      const s = Math.floor(time % 60);
      return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
    };
    timeDisplay.innerText = `${formatTime(watchVideo.currentTime)} / ${formatTime(watchVideo.duration)}`;
    
    if (Math.floor(watchVideo.currentTime) % 5 === 0) {
      saveProgress(currentVideoId, watchVideo.currentTime);
    }
  };
  
  progressContainer.onclick = (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    watchVideo.currentTime = pos * watchVideo.duration;
  };
  
  rewind.onclick = () => watchVideo.currentTime -= 10;
  forward.onclick = () => watchVideo.currentTime += 10;
  
  volume.onclick = () => {
    watchVideo.muted = !watchVideo.muted;
    volume.innerHTML = watchVideo.muted ? `<i class="fas fa-volume-mute"></i>` : `<i class="fas fa-volume-up"></i>`;
  };
  
  const speeds = [1.0, 1.25, 1.5, 2.0, 0.75];
  let sIdx = 0;
  speedBtn.onclick = () => {
    sIdx = (sIdx + 1) % speeds.length;
    watchVideo.playbackRate = speeds[sIdx];
    speedBtn.innerText = `${speeds[sIdx]}x`;
  };
  
  const wrapper = document.getElementById("watch-video-wrap");
  fsBtn.onclick = () => {
    if (!document.fullscreenElement) {
      if (wrapper.requestFullscreen) wrapper.requestFullscreen();
      fsBtn.innerHTML = `<i class="fas fa-compress"></i>`;
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
      fsBtn.innerHTML = `<i class="fas fa-expand"></i>`;
    }
  };
  
  pipBtn.onclick = async () => {
    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      await watchVideo.requestPictureInPicture();
    }
  };
}

function saveProgress(id, time) {
  if (time < 5) return; 
  let progressData = JSON.parse(localStorage.getItem("oxo_progress")) || {};
  progressData[id] = { time: time, lastWatched: Date.now() };
  localStorage.setItem("oxo_progress", JSON.stringify(progressData));
}

function checkContinueWatching() {
  const progressData = JSON.parse(localStorage.getItem("oxo_progress")) || {};
  if (progressData[currentVideoId]) {
    const savedTime = progressData[currentVideoId].time;
    if (savedTime > 10) {
      const prompt = document.getElementById("resume-prompt");
      prompt.style.display = "block";
      
      document.getElementById("resume-yes").onclick = () => {
        watchVideo.currentTime = savedTime;
        watchVideo.play();
        document.getElementById("watch-play-btn").innerHTML = `<i class="fas fa-pause"></i>`;
        prompt.style.display = "none";
      };
      
      document.getElementById("resume-no").onclick = () => {
        watchVideo.currentTime = 0;
        watchVideo.play();
        document.getElementById("watch-play-btn").innerHTML = `<i class="fas fa-pause"></i>`;
        prompt.style.display = "none";
      };
    }
  }
}

function toggleWatchlistBtn() {
  const btn = document.getElementById("btn-watchlist");
  OXOApp.toggleWatchlist(currentVideoId);
  if (OXOApp.watchlist.includes(currentVideoId)) {
    btn.classList.add("active");
    btn.innerHTML = `<i class="fas fa-check"></i> In Watchlist`;
  } else {
    btn.classList.remove("active");
    btn.innerHTML = `<i class="fas fa-plus"></i> Add to Watchlist`;
  }
}

function shareVideo() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    OXOApp.showToast("Link copied to clipboard!", "fa-share-square");
  });
}

function populateRelated(currentItem) {
  const grid = document.getElementById("related-grid");
  
  const allItems = [
    ...OTT_DATA.heroSlides,
    ...OTT_DATA.sports,
    ...OTT_DATA.cinema,
    ...OTT_DATA.media,
    ...OTT_DATA.originals
  ];
  
  const uniqueMap = new Map();
  allItems.forEach(item => {
    if (item.id !== currentItem.id) {
      uniqueMap.set(item.id, item);
    }
  });
  
  const uniqueItems = Array.from(uniqueMap.values());
  const related = uniqueItems.filter(item => item.category === currentItem.category).slice(0, 5);
  
  if (related.length < 5) {
    const others = uniqueItems.filter(item => item.category !== currentItem.category).slice(0, 5 - related.length);
    related.push(...others);
  }
  
  grid.innerHTML = related.map(item => `
    <div class="related-card" onclick="window.location.href='watch.html?id=${item.id}'">
      <img src="${item.poster || item.backdrop}" alt="${item.title}" class="related-thumb">
      <div class="related-info">
        <div class="related-title">${item.title}</div>
        <div class="related-meta">${item.year || "2026"} • ${item.duration || "HD"}</div>
      </div>
    </div>
  `).join("");
}

