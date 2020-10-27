function $(h){
    return document.querySelector(h);
}
const vulstat = 1;
function s() {
    if (vulstat == 2){
        $("#dziala").style.display = "block";
    }
    else if (vulstat == 1){
        $("#sredniodziala").style.display = "block";
    }
    else if (vulstat == 0){
        $("#niedziala").style.display = "block";
    }
    

    let sitSpan = $("#sinceItried");
    let sinceitriedTime = new Date("2020-10-26T11:44:00");
    let now = new Date();

    setInterval(function(){
        now = new Date();
        let sitConverted = calcDiff(sinceitriedTime, now);
        sitSpan.innerHTML = sitConverted;
    }, 1000);
}

function calcDiff(date1, date2) {
    date1 = date1.getTime();
    date2 = date2.getTime();
    var diff = Math.floor((date2-date1)/1000);

    // dni, godziny, minuty i sekundy
    var d = Math.floor(diff/(24*60*60));
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;

    return `${d!=0?`${d} dni, `:""}${h!=0?`${h} godzin, `:""}${m!=0?`${m} minut, `:""}${m!=0?`i ${s} sekund`:`${s} sekund`}`;
}