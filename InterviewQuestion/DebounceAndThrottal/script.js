const btn = document.querySelector('.increment-btn');
const btnPressed = document.querySelector('.btn-presses');
const btnTriggred = document.querySelector('.btn-triggred');

var pressedCount = 0;
var triggeredCount = 0;
const debouncePolyfill = (fn, delay) => {
    let timer;
    return function(...args){
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    }
};
const throttalPolyfill = (fn, delay) => {
    let last = 0;
    return function(...args){
        let now = new Date().getTime();
        if(now - last < delay){
            return;
        }
        last = now;
        fn(...args);
    }
};
/*const debounceTrigged = debouncePolyfill((cnt) => {
    btnTriggred.innerHTML = ++triggeredCount;
    console.log('Debounce triggered', ++cnt);
},1000);
*/
const throttalTrigged = throttalPolyfill((cnt) => {
    btnTriggred.innerHTML = ++triggeredCount;
    console.log('Throttal triggered', ++cnt);
},2000);

btn.addEventListener('click', () => {
    btnPressed.innerHTML = ++pressedCount;
    throttalTrigged(0);
});