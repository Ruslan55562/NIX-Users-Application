var down = false;

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


function toggleNotify(){
    var box = document.getElementById('box');
	if (down) {
        box.style.height = '0px';
        box.style.opacity = 0;
        down = false;
        box.style.cursor = 'default'
    }
    else {
        box.style.height = '315px';
        box.style.opacity = 1;
        down = true;
        document.getElementById('badge-bell').remove();
        document.getElementById('notify_counter').innerHTML = " 0";
    }
}

