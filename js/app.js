$(document).ready(function(){
	$('#main-submit').click(function(event){
		addToList();
		event.preventDefault();  // prevents the page from reloading
	});  // end click main submit button

	$('.add-list').on('click', '#delete-icon', function(){
		$(this).parent().remove();
	});


}); // Ready handler end


function addToList() {
	var value = $('#main-input').val();   // get value of input field

		$('.add-list').append('<li class="clearfix">' + 
			value + '<button id="delete-icon">' + 
			'</button>' + '<button class="edit-icon">' + 
			'</button>' + '</li>');
				
	    $('#main-input').val(''); // reset text field
}