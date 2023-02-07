function show1() {
    var p = document.getElementById('pas');
    p.setAttribute('type', 'text');
}

function hide1() {
    var p = document.getElementById('pas');
    p.setAttribute('type', 'password');
}

var pwShown = 0;

document.getElementById("eyes").addEventListener("click", function () {
    if (pwShown == 0) {
        pwShown = 1;
        show1();
    } else {
        pwShown = 0;
        hide1();
    }
});