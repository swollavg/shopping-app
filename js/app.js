$(document).ready(function(){
	
		$('#main-submit').click(function(event){
			addToList();
			event.preventDefault();  // prevents the page from reloading
		});  // end click main submit button

		$('.add-list').on('click', '#delete-icon', function(event){
			event.stopPropagation();
			$(this).parent().remove();
			
			count -= 1; // decreases counter
			$('.counter').text(count);
		});

		$('.add-list').on('click', '#edit-icon', function(){
			$(this).closest('li').hide().next().show()
			.children(":first").css('display', 'block').next()
			.show().prev().val($(this).prev().prev().text());
		});

		$('.add-list').on('click', '#save', function(){
			$(this).hide().prev().hide().closest('div').hide().prev()
			.show().children(":first").text($(this).prev().val());
			
		});

		$('.delete-all').click(function(){
			$('.add-list').children('li').remove();
		});

	 
}); // Ready handler end

var count = 0;

function addToList() {

var value = $('#main-input').val();   // get value of input field
count++;
	
	if ($('#main-input').val()) {
		if (count <= 3){

			$('.add-list').append('<li class="clearfix">' + '<span>' + value + '</span>'
				 + '<button id="delete-icon">' + 
				'</button>' + '<button id="edit-icon">' + 
				'</button>' + '</li>' + '<div id="save-wrapper" class="clearfix">' + '<input type="text" id="edit">' + 
				'<input type="submit" value="" id="save">' + '</div>');
					
		    $('#main-input').val(''); // reset text field

		    $('.counter').text(count);  // sets counter
		}

		else {
			count -= 1;  //the alert increments counter. This gets it back to normal
			alert("You can only have 10 items! Please delete something");
			$('#main-input').val(''); // reset text field

		 }
	}

	else {
		count -= 1;
		alert('Write something');
	}

};

