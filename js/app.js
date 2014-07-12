$(document).ready(function(){
	$('#main-submit').click(function(event){
		addToList();
		event.preventDefault();  // prevents the page from reloading
	});  // end click main submit button

	$('.add-list').on('click', '#delete-icon', function(event){
		event.stopPropagation();
		$(this).parent().remove();
	});

	$('.add-list').on('click', '#edit-icon', function(){
		$(this).closest('li').hide().next().show().css('display', 'block').val($(this).prev().prev().text());
	});

	$('.add-list').on('focusout', '#edit', function(){
		$(this).hide().prev().show().children(":first").text($(this).val());
		
	});

	
 
	


}); // Ready handler end


function addToList() {
	var value = $('#main-input').val();   // get value of input field

		$('.add-list').append('<li class="clearfix">' + '<span>' + value + '</span>'
			 + '<button id="delete-icon">' + 
			'</button>' + '<button id="edit-icon">' + 
			'</button>' + '</li>' + '<input type="text" id="edit">');
				
	    $('#main-input').val(''); // reset text field
};


