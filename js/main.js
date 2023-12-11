$(document).ready(function(){
    $(".hamburger").click(function(){
      $(".wrapper").toggleClass("active")
    })
});
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'right',
		trigger : 'hover',
        html : true,
        content : '<img src="images/icons/mentor.png" width="50px"><img src="images/icons/school.png" width="50px">'
    });
});