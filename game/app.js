var left = 0;
var right =0;
function abc() {
    console.log(event.keyCode);
    var caption = document.getElementById('caption');
    var Thanos = document.getElementById('Thanos');
    if (event.keyCode === 68 && left<1000) {
        left = left + 10;
        caption.style.left = left + 'px';
        caption.src = "captain-america-marvel-war-of-the-gems-walk.gif"
        caption.style.height = "200px"
        setTimeout(function () {
            caption.src = "captain-america-marvel-war-of-the-gems-stance.gif"
        }, 1000)

    }
    if (event.keyCode === 83 && left>10) {
        left = left - 10;
        caption.style.left = left + 'px';
        caption.style.height = "200px"
        caption.src = "captain-america-marvel-war-of-the-gems-walk.gif"
        setTimeout(function () {
            caption.src = "captain-america-marvel-war-of-the-gems-stance.gif"
        }, 1000)
    }
    if (event.keyCode === 70) {
        caption.src = "captainamerica-chargingstar.gif"
        caption.style.height = "250px"
        setTimeout(function () {
            caption.style.height = "200px"
            caption.src = "captain-america-marvel-war-of-the-gems-stance.gif"
        }, 2000)
    }
    if (event.keyCode === 74) {
        Thanos.src = "than-block.gif"
        Thanos.style.height = "250px"
        setTimeout(function () {
            Thanos.style.height = "250px"
            Thanos.src = "than-stand.gif"
        }, 2000)
    }
    if (event.keyCode === 75 && right< 880) {
        Thanos.src = "than-walk.gif"
        right = right + 10;
        Thanos.style.right = right + 'px';
        Thanos.style.height = "250px"
        setTimeout(function () {
            Thanos.style.height = "250px"
            Thanos.src = "than-stand.gif"
        }, 1000)
    }
    if (event.keyCode === 76 && right >10) {
        Thanos.src = "than-walk.gif"
        right = right - 10;
        Thanos.style.right = right + 'px';
        Thanos.style.height = "250px"
        setTimeout(function () {
            Thanos.style.height = "250px"
            Thanos.src = "than-stand.gif"
        }, 1000)
    }
}
window.onkeydown = abc;


