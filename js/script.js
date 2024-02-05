const button_1 = document.getElementById('mount_1');
const button_2 = document.getElementById('mount_2');
const schedules = document.getElementById('schedules');

button_1.addEventListener('click', e => {
            console.log("hello");
                schedules.classList.remove("mountain_2");
                button_2.classList.remove("choosen_div");
                schedules.classList.add("mountain_1");
                button_1.classList.add("choosen_div");
})
button_2.addEventListener('click', e => {
                schedules.classList.remove("mountain_1");
                button_1.classList.remove("choosen_div");
                schedules.classList.add("mountain_2");
                button_2.classList.add("choosen_div");
})



var acc = document.getElementsByClassName("mobile_accordion_section");
var acc = document.getElementsByClassName("mobile_accordion_section");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active_section");
        var panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
        panel.style.display = "none";
        } else {
        panel.style.display = "flex";
        }
    });
} 
