import Vimeo from '@vimeo/player';

const vimeoPlayer = new Vimeo(document.getElementById('vimeo-player'));
vimeoPlayer.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});
window.addEventListener('DOMContentLoaded', function () {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime !== null) {
    vimeoPlayer.setCurrentTime(savedTime);
  }
});
import throttle from 'lodash.throttle';
vimeoPlayer.on(
  'timeupdate',
  throttle(function (data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
); // Throttle timp de 1000ms (1 secundă)
