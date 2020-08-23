console.log('Hello world!');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "20px 10px";
    } else {
        document.getElementById("navbar").style.padding = "40px 10px";
    }
}
// hoisting