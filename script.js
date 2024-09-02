
const listContainer = document.getElementById("list-container")

let timer = []; // timerの配列を初期化
let count; // countをグローバル変数として定義
let endDate; // endDateもグローバル変数として定義

window.onload = function() {
    let sec = 10; // タイマーの秒数

    nowDate = new Date();
    endDate = new Date(nowDate.getTime() + sec * 1000);
    count = sec;

    // 初期メッセージを表示
    document.getElementById("time").textContent = "Let's try these tasks in " + count + " sec";

    // タイマーを開始
    timer.push(setInterval(setTimer, 1000));
};

const setTimer = () => {
    count--;
    document.getElementById("time").textContent = "Let's try these tasks in " + count + " sec";
    nowDate = new Date();
    if (nowDate.getTime() >= endDate.getTime() || count <= 0) {
        document.getElementById("time").textContent = "TIME'S UP!!!!!!!!";
        stopTimer();
        document.getElementById("sound").play();
    }
};

const stopTimer = () => {
    clearInterval(timer.shift());
    document.getElementById("sound").pause(); // 音声を停止して、先に再生準備をする
    document.getElementById("sound").currentTime = 0; // 音声を最初に戻す
};



listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);
