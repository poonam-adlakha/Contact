function playVideo(videoId, buttonId) {
  const video = document.getElementById(videoId);
  const button = document.getElementById(buttonId);
  button.classList.add('hidden');
  video.play();
  video.setAttribute('controls', true);
}
