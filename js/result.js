// 获取参数
function getParams() {
    let results = {};
    let paramList = window.location.search.substr(1).split("&");
    for (let i = 0; i < paramList.length; ++i) {
        let param = paramList[i].split("=");
        results[param[0]] = param[1];
    }
    return results;
}

function share() {
    let obj = getResultId();
    let url = "../share/index.html?result=" + obj;
    window.open(url, "_self");
}

// 获取应该显示的结果的 id
function getResultId() {
    return getParams()['result'];
}

function setRem() {
    let Unit = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = Unit + "px";//设定相对单位rem
    let Height = document.documentElement.clientHeight + "px";
    $('#bg').css('height', Height);//强制拉伸背景，观感差别不大,最后一页除外.
    $('#mainly').css('height', Height);
}

function getText(resultId) {
    //文本插入等json
    // resultList[resultId].length
    // resultList[resultId][i]
    for (let i = 0; i < 6; i++) {
        $("#text").append("<p>" + resultList[resultId]["result"][i] + "</p>")
    }
}

function setBgText(resultId) {
    if (resultId >= 0 && resultId <= 4) {
        let src = ["dinner", "papercutting", "people", "tiger", "village"];
        $("#mainly").append("<img id='bg' src='https://gitee.com/lnkkerst/storage/raw/master/onlinetek-2022/assets/img/result/" + src[resultId] + "-bg.jpg' style=' position: absolute;z-index: -2;left: 0;top: 0;width: 10rem;' alt=\"\">");
        $("#header").append("<img id='head-text' src='https://gitee.com/lnkkerst/storage/raw/master/onlinetek-2022/assets/img/result/" + src[resultId] + "-text.png' alt=\"\">");
        getText(resultId);
    } else {
        $("#mainly").innerHTML = "<h>出错了</h>";
    }
}


// 加载完成执行：
$(document).ready(function () {
    let resultId = getResultId();
    setBgText(resultId);
    setRem();
})
