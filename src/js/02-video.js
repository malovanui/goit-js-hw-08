import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME = "videoplayer-current-time";

const lastSessionSeconds = JSON.parse(localStorage.getItem('sec'))

player.setCurrentTime(lastSessionSeconds);

const saveCurrentTime = (time) => {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(time));
    const currentSeconds = time.seconds;
    localStorage.setItem('sec', currentSeconds);
    console.log(currentSeconds)
    
}
// Event listeners
player.on('timeupdate', throttle(saveCurrentTime, 1000));