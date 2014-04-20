$(function(){
$("span[data-grid]").each(function(index){
	var myElt=$(this);
	var mostWide=0;
	$("span[data-grid='"+myElt.attr('data-grid')+"']").each(function(index){
	if(mostWide<$(this).offset().left) mostWide=$(this).offset().left;
	});
	$("span[data-grid='"+myElt.attr('data-grid')+"']").each(function(index){
	$(this).css('margin-left',(mostWide-$(this).offset().left)+'px');
	$(this).removeAttr('data-grid');
	});
});
});
