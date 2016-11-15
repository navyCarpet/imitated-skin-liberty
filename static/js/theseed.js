$(function() {
	$(".wiki-article img.wiki-lazy-image").removeClass('wiki-lazy-image').removeClass('wiki-lazy-loading').each(function () {
		$(this).attr('src', $(this).attr("data-original"));
	});
	$("#searchform").submit(function() { return false; });
	$("#searchInput").keypress(function (event) {
		if ((event.keyCode ? event.keyCode : event.which) != 13) { return; }
		event.preventDefault();
		var val = $(this).val();
		if (val.length > 0) {
			location.href = "/go/" + encodeURIComponent(val);
		}
	});
	$("#searchInput").autocomplete({
		delay: 100,
		source: function(request, response) {
			$.ajax({
				url: '/complete/' + encodeURIComponent(request.term),
				dataType : 'json',
				success: function(data) {
					response(data);
				},
				error: function(data) {
					response([]);
				}
			});
		},
		select: function(event, ui) {
			if(ui.item.value) {
				location.href = "/w/" + encodeURIComponent(ui.item.value);
			}
		}
	});
	$("#searchSearchButton").click(function () {
		var val = $("#searchInput").val();
		if (val.length > 0) {
			location.href = "/search/" + encodeURIComponent(val);
		}
	});
	$("#searchGoButton").click(function () {
		var val = $("#searchInput").val();
		if (val.length > 0) {
			location.href = "/w/" + encodeURIComponent(val);
		}
	});
});

