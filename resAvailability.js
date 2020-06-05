// Suppress reservation link where no on-shelf availability
		
$(document).ready(function(){
	if ($("#availability > ul.options").children("li.available").length)
			{
		$("#availability > ul.itemActions > li.reserveAction.mobile-inline").css("display", "initial")	} else {
		$("#availability > ul.itemActions > li.reserveAction.mobile-inline").css("display", "none")	}
});
