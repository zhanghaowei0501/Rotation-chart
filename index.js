var content = document.querySelectorAll('.content');
function reset() {
    for (var i = 0; i < content.length; i++) {
        content[i].classList.remove('active')
    }
}
var i = 0;
function auto() {
    i++;
    if (i > 5) {
        i = 0;
    }
    reset();
    content[i].classList.add('active');
}
var timer = setInterval(auto, 500);
content.forEach(function (item, index) {
    item.onmouseover = function () {
        i = index;
        reset();
        item.classList.add('active');
        clearInterval(timer)
    }
    item.onmouseout = function () {
        timer = setInterval(auto, 500);
    }
})
