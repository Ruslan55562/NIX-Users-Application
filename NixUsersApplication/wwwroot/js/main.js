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
        content: ' <div><img src="images/icons/mentor.png" width="50px"><img src="images/icons/school.png" width="50px"><img src="images/icons/three-years-icon.webp" width="50px"><img src="images/icons/five-years-icon.png" width="50px">'
    });
});
