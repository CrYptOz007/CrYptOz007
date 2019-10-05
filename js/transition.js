// JavaScript Document
$('a.nav-link').on("click",function(event) {
	event.preventDefault();
	
	var href= $(this).attr("href");
	
	window.history.pushState(null,null,href);
	
	$("a.nav-link").removeClass("active")
	$(this).addClass("active")
	
	$.ajax({
		url: href,
		success: function (data) {
			
			$("body").fadeOut(250, function () {
				const newPage = $(data).filter("body").html()
				
				$("body").html(newPage)
				$("body").fadeIn(250)
				
			/*
			$("body").addClass('transitionOut-animation');
				setTimeout(function() {
					var newPage = $(data).filter("body").html();
					$("body").html(newPage);
					$("body").addClass('transitionIn-animation');
	}, 2000);*/
			
			})
		}
	})
	
})