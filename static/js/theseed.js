$(function() {
	var isVideoAvailable = (function(){
		var v = document.createElement('video');
		
		return v.canPlayType && v.canPlayType('video/mp4; codecs="avc1.4D401E').replace(/no/, '');
	})();

	$(".wiki-article img.wiki-image-loading").removeClass('wiki-image-loading').each(function () {
		var img = $(this);
		var playAsVideo = img.attr('data-video-src') && isVideoAvailable;
		if(playAsVideo) {
			// senkawa skin 참고함.
			var videoTag = $("<video class='wiki-image' loop autoplay muted playsinline>");
			
			videoTag.attr('src', img.attr('data-video-src'));
			videoTag.attr('poster', '/skins/liberty/img/loading.gif');
			
			if(img.attr('width')) videoTag.attr('width', img.attr('width'));
			if(img.attr('height')) videoTag.attr('height', img.attr('height'));
			
			img.after(videoTag);
			img.remove();
		} else {
			img.attr('src', $(this).attr("data-src"));
		}
	});

	$("#searchform").submit(function() {
		return false;
	});

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

	$(".wiki-fn-content").click(function(){
		var target=$(this).attr('href');
		
		target=target.replace("#","");
		
		var $tmp=$("span[class=target][id=\""+ target+"\"]").parent().clone();
		
		$tmp.children("span[class=target]").remove();
		$tmp.children("a[href^='#rfn-']").remove();
		
		$("#footnoteModal .modal-header").html("<h5 class=\"modal-title\">각주: "+ $(this).text()+"</h5>");
		$("#footnoteModal .modal-body").html($tmp.html());$("#footnoteModal").modal('show');
		
		return false;
	});

	function changeTheme(theme){
		if (theme) {
			document.body.classList.remove('theseed-light-mode');
			document.body.classList.add('theseed-dark-mode');
		}
		else {
			document.body.classList.add('theseed-light-mode');
			document.body.classList.remove('theseed-dark-mode');
		}

		$("#theme").text(theme ? '라이트 테마로' : '다크 테마로');
	};

	const localTheme = window.matchMedia('(prefers-color-scheme: dark)')
	changeTheme(localTheme.matches);

	localTheme.addEventListener('change', (value) => changeTheme(value.matches));

	$("#theme").click(function(){
		var now = $(this).text() === '다크 테마로';
		changeTheme(now);
	});
});

