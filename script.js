// JavaScript File
/*global $*/
$(document).ready(function() {
  
  let searchBtn = $('#search');
  let query =$('#value');
  let result = $('#result');
  
  let srchAllBtn = $('#searchAll');
  
  searchBtn.click(function(){
    $.ajax({
      type: 'GET',
      url: 'request.php',
      data: { q: query.val()},
      success: function(data){
        result.html(data);
      }
    })
  })

	srchAllBtn.click(function(){
		$.ajax({
			type: 'GET',
			url: 'request.php',
			data:{q: '&all=true'},
			success: function(data){
				result.html("");
				result.append('<ol></ol>');
				$(data).find('definition').each(function(){
					var Response = '<h3>'+$(this).find("name").text()+'</h3>';
					Response += '<p>'+$(this).find("meaning").text()+'</p>';
					Response += '<p>'+"-"+$(this).find("author").text()+'</p>';
					$("#result ol").append('<li>'+Response+'</li>');
				});
			}
			
		});
	});
})