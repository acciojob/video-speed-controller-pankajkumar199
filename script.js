const video = document.querySelector('.player__video');
const toggle = document.querySelector('.toggle');
const volume = document.querySelector('[name="volume"]');
const playbackSpeed = document.querySelector('[name="playbackSpeed"]');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
  video.paused ? video.play() : video.pause();
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

rewindButton.addEventListener('click', skip);
forwardButton.addEventListener('click', skip);

progress.addEventListener('click', scrub);
