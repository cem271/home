$(document).ready(function(){
	var count = 1;
	$("button[id='addButton']").click(function(){
		$("p[id='prime']").append($("<p id='new"+count+"'>").text('test! '+ count));
		count += 1;
	});
	$("button[id='removeButton'").click(function(){
		$("p[id='new"+(count-1)+"']").remove();
		count -= 1;
	})


});