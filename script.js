const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('[name="volume"]');
const playbackSpeed = document.querySelector('[name="playbackSpeed"]');
const skipButtons = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

function handleVolumeUpdate() {
  video.volume = this.value;
}

function handleSpeedUpdate() {
  video.playbackRate = this.value;
}

function skip() {
  video.currentTime += Number(this.dataset.skip);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleVolumeUpdate);
playbackSpeed.addEventListener('input', handleSpeedUpdate);

skipButtons.forEach(button => button.addEventListener('click', skip));

progress.addEventListener('click', scrub);
