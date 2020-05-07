var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var list = document.querySelectorAll(".panel");
        if (panel.style.display === "block") {
            panel.style.display = "none";
        }
        else {
            for (j = 0; j < acc.length; j++) {
                list[j].style.display = "none";
            }
            panel.style.display = "block";
        }
    });
}
