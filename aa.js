var data = ['Phone7', 'Ipad', '三星筆記本', '佳能相機', '惠普印表機', '謝謝參與', '100元充值卡', '1000元超市購物券'],
timer = null, //定時器
flag = 0; //用於鍵盤事件狀態標記
window.onload = function() {
var play = document.getElementById('play'),
stop = document.getElementById('stop');
// 開始抽獎
play.onclick = playFun;
stop.onclick = stopFun;
// 鍵盤事件
document.onkeyup = function(event) {
event = event || window.event;
if (event.keyCode == 13) {
if (flag == 0) {
playFun();
flag = 1;
} else {
stopFun();
flag = 0;
}
}
}
}
// 開始抽獎
function playFun() {
var title = document.getElementById('title');
var play = document.getElementById('play');
//每次都先清除上一次的定時器任務，避免抽獎效果累加頻率會越來越快
clearInterval(timer);
timer = setInterval(function() {
var random = Math.floor(Math.random() * data.length);
title.innerHTML = data[random];
}, 50);
play.style.background = '#999';
}
//停止抽獎
function stopFun() {
clearInterval(timer);
var play = document.getElementById('play');
play.style.background = '#036';
}