// ==========================================================================
// OXO XTREAM Custom Video Player Controller
// Handles Fullscreen, Scrubbing, Audio, 4K/1080p, and Modal Playback
// ==========================================================================

const OXOPlayer = {
  overlay: null,
  video: null,
  progressBar: null,
  progressFilled: null,
  playBtn: null,
  timeDisplay: null,
  titleDisplay: null,
  badgeDisplay: null,
  isOpen: false,

  init() {
    this.createPlayerModal();
    this.bindEvents();
  },

  createPlayerModal() {
    if (document.getElementById('oxo-player-modal')) return;

    const modalHTML = `
      <div id="oxo-player-modal" class="player-modal-overlay">
        <div class="player-container">
          <button class="player-close-btn" id="player-close-btn" title="Close Player">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="custom-video-wrap" id="custom-video-wrap">
            <video id="main-stream-video" preload="metadata" playsinline></video>
            
            <div class="player-controls-bar" id="player-controls-bar">
              <div class="player-progress-container" id="player-progress-container">
                <div class="player-progress-filled" id="player-progress-filled"></div>
              </div>
              
              <div class="player-bottom-controls">
                <div class="player-left-group">
                  <button class="player-ctrl-btn" id="player-play-btn" title="Play/Pause">
                    <i class="fas fa-play"></i>
                  </button>
                  <button class="player-ctrl-btn" id="player-skip-back" title="Rewind 10s">
                    <i class="fas fa-undo"></i>
                  </button>
                  <button class="player-ctrl-btn" id="player-skip-fwd" title="Forward 10s">
                    <i class="fas fa-redo"></i>
                  </button>
                  <button class="player-ctrl-btn" id="player-volume-btn" title="Mute/Unmute">
                    <i class="fas fa-volume-up"></i>
                  </button>
                  <span class="player-time-text" id="player-time-text">00:00 / 00:00</span>
                </div>
                
                <div class="player-right-group">
                  <span class="player-quality-badge" id="player-quality-tag">4K ULTRA HD</span>
                  <span class="player-audio-badge"><i class="fas fa-broadcast-tower"></i> DOLBY ATMOS</span>
                  <button class="player-ctrl-btn" id="player-speed-btn" title="Playback Speed">1.0x</button>
                  <button class="player-ctrl-btn" id="player-pip-btn" title="Picture in Picture">
                    <i class="fas fa-clone"></i>
                  </button>
                  <button class="player-ctrl-btn" id="player-fs-btn" title="Fullscreen">
                    <i class="fas fa-expand"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div class="player-info-wrap">
            <div class="player-info-left">
              <h3 id="player-item-title">Streaming Title</h3>
              <div class="player-info-meta">
                <span id="player-item-rating"><i class="fas fa-star" style="color:var(--accent-gold)"></i> 9.8</span>
                <span>•</span>
                <span id="player-item-genres">Cinema, 4K HDR</span>
                <span>•</span>
                <span id="player-item-year">2026</span>
              </div>
            </div>
            <div class="player-info-right">
              <button class="btn-secondary" id="player-add-watchlist-btn">
                <i class="fas fa-plus"></i> Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    this.overlay = document.getElementById('oxo-player-modal');
    this.video = document.getElementById('main-stream-video');
    this.progressBar = document.getElementById('player-progress-container');
    this.progressFilled = document.getElementById('player-progress-filled');
    this.playBtn = document.getElementById('player-play-btn');
    this.timeDisplay = document.getElementById('player-time-text');
    this.titleDisplay = document.getElementById('player-item-title');
    this.badgeDisplay = document.getElementById('player-quality-tag');
  },

  bindEvents() {
    const closeBtn = document.getElementById('player-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Play / Pause Toggle
    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => this.togglePlay());
    }

    if (this.video) {
      this.video.addEventListener('click', () => this.togglePlay());
      this.video.addEventListener('timeupdate', () => this.updateProgress());
      this.video.addEventListener('ended', () => {
        this.playBtn.innerHTML = '<i class="fas fa-redo"></i>';
      });
    }

    // Progress Bar Click / Scrub
    if (this.progressBar) {
      this.progressBar.addEventListener('click', (e) => {
        const rect = this.progressBar.getBoundingClientRect();
        const pos = (e.clientX - rect.left) / rect.width;
        if (this.video && this.video.duration) {
          this.video.currentTime = pos * this.video.duration;
        }
      });
    }

    // Skip Buttons
    const skipBack = document.getElementById('player-skip-back');
    const skipFwd = document.getElementById('player-skip-fwd');
    if (skipBack) skipBack.addEventListener('click', () => { if (this.video) this.video.currentTime -= 10; });
    if (skipFwd) skipFwd.addEventListener('click', () => { if (this.video) this.video.currentTime += 10; });

    // Volume Button
    const volBtn = document.getElementById('player-volume-btn');
    if (volBtn) {
      volBtn.addEventListener('click', () => {
        if (!this.video) return;
        this.video.muted = !this.video.muted;
        volBtn.innerHTML = this.video.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
      });
    }

    // Playback Speed
    const speedBtn = document.getElementById('player-speed-btn');
    const speeds = [1.0, 1.25, 1.5, 2.0, 0.75];
    let speedIdx = 0;
    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        speedIdx = (speedIdx + 1) % speeds.length;
        const currentSpeed = speeds[speedIdx];
        if (this.video) this.video.playbackRate = currentSpeed;
        speedBtn.innerText = `${currentSpeed}x`;
      });
    }

    // Fullscreen
    const fsBtn = document.getElementById('player-fs-btn');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        const wrap = document.getElementById('custom-video-wrap');
        if (!document.fullscreenElement) {
          if (wrap && wrap.requestFullscreen) wrap.requestFullscreen();
          fsBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
          if (document.exitFullscreen) document.exitFullscreen();
          fsBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
      });
    }

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Close when clicking outside player-container
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.close();
        }
      });
    }
  },

  playItem(item) {
    if (!item) return;
    window.location.href = `watch.html?id=${item.id}`;
  },

  togglePlay() {
    if (!this.video) return;
    if (this.video.paused || this.video.ended) {
      this.video.play();
      this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
      this.video.pause();
      this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
  },

  updateProgress() {
    if (!this.video || isNaN(this.video.duration)) return;
    const progress = (this.video.currentTime / this.video.duration) * 100;
    this.progressFilled.style.width = `${progress}%`;

    const currentMins = Math.floor(this.video.currentTime / 60);
    const currentSecs = Math.floor(this.video.currentTime % 60);
    const durMins = Math.floor(this.video.duration / 60);
    const durSecs = Math.floor(this.video.duration % 60);

    const fmt = (m, s) => `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    this.timeDisplay.innerText = `${fmt(currentMins, currentSecs)} / ${fmt(durMins, durSecs)}`;
  },

  close() {
    if (!this.overlay) return;
    this.overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    if (this.video) {
      this.video.pause();
      this.video.src = '';
    }
    this.isOpen = false;
  }
};

window.OXOPlayer = OXOPlayer;
document.addEventListener('DOMContentLoaded', () => OXOPlayer.init());
