/*start data filter programming */

$(document).ready(function () {
	$(".btn").each(function () {
		$(this).click(function () {
			var filter = $(this).data("filter");
			$(".all").each(function() {
				$(this).hide();
				$("."+filter).each(function () {
					$(this).slideDown(500);
				});
			});
		});
	});
});
   
/*end data filter programming */


