

$(document).ready(function(){
	var bubble = function(event){
		var $b =$('<div/>').addClass('bubble');

		var size = Math.random()*4;
		
		$b.css({
			width: size + 'em',
			height: size + 'em',
			left: event.clientX,
			top: event.clientY
		});
		$('body').append($b);

		setTimeout(function(){
			$b.animate({
				top: -1000
			}, 2000, function (){
				$b.remove();
			});
		}, 1400);
	};
	$(window).on("mousemove", bubble);
});

