let star;
let badge_bell;
let box;
document.addEventListener("DOMContentLoaded", () => {
    star = document.getElementById('profile-info_achievements__star');
    box = document.getElementById('box');
    badge_bell = document.getElementById('badge-bell');
});

// window.onload = () => {
//     star = document.getElementById('profile-info_achievements__star');
//     box = document.getElementById('box');
//     badge_bell = document.getElementById('badge-bell');
// }

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
        if(star!=null)
        {
            star.style.visibility='visible';
        }
    }
    else {
        box.style.height = '315px';
        box.style.opacity = 1;
        opened = true;
        if(badge_bell!=null)
        {
            badge_bell.remove();
        }
        document.getElementById('notify_counter').innerHTML = " 0";
        if(star!=null)
        {
            star.style.visibility='hidden';
        }
    }
}

