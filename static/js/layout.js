/* 드롭다운 페이드인 */
jQuery('.dropdown').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.dropdown').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.btn-group').on('show.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

jQuery('.btn-group').on('hide.bs.dropdown', function(e) {
    jQuery(this).find('.dropdown-menu').first().stop(true, true).fadeToggle(200);
});

$(".wiki-article .wiki-fn-content").click(function(){
    var target=$(this).attr('href');
    target=target.replace("#","");
    var $tmp=$("span[class=target][id=\""+ target+"\"]").parent().clone();
    $tmp.children("span[class=target]").remove();
    $tmp.children("a[href^='#rfn-']").remove();
    $("#footnoteModal .modal-header").html("<h5 class=\"modal-title\">각주: "+ $(this).text()+"</h5>");
    $("#footnoteModal .modal-body").html($tmp.html());$("#footnoteModal").modal('show');
    return false;
});
/* 드롭다운 페이드인 End */

