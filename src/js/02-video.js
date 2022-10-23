import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) { 
    localStorage.setItem("videoplayer-current-time", data.seconds);
}

window.addEventListener('load', () => { 
    if (localStorage.getItem('videoplayer-current-time') !== null)
        player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
})


