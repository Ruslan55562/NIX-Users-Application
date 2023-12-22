document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById('box')
});


$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".wrapper").toggleClass("active")
    })
});
$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'right',
        trigger: 'hover',
        html: true,
        content: '<img src="images/icons/mentor.png" width="50px"><img src="images/icons/school.png" width="50px">'
    });
});

var opened = false;

function toggleNotify(){
	if (opened) {
        box.style.height = '0px';
        box.style.opacity = 0;
        opened = false;
        box.style.cursor = 'default'
    }
    else {
        box.style.height = '315px';
        box.style.opacity = 1;
        opened = true;
        document.getElementById('badge-bell').remove();
        document.getElementById('notify_counter').innerHTML = " 0";
    }
}

