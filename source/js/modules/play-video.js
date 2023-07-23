const videoContainer = document.querySelector('.about__media__videoplayer');
const playButton = videoContainer.querySelector('.play__button');
const poster = videoContainer.querySelector('.placeholder img');
const player = videoContainer.querySelector('.placeholder iframe');

playButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  poster.style.display = 'none';
  playButton.style.display = 'none';
  player.src += '?autoplay=1';
});
