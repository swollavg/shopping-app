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

			$('.after-logo').fadeIn(1000).delay(500).fadeOut(1000);
		}); // deletes an items

		$('.add-list').on('click', '#edit-icon', function(){
			$(this).closest('li').hide().next().show()
			.children(":first").css('display', 'block').next()
			.show().prev().val($(this).prev().prev().text());

			$('.after-logo').finish().fadeIn(1000).delay(500).fadeOut(1000);
		}); // allows editing of content

		$('.add-list').on('click', '#save', function(){
			$(this).hide().prev().hide().closest('div').hide().prev()
			.show().children(":first").text($(this).prev().val());
			
		}); // saves edited content

		$('.delete-all').click(function(){
			$('.add-list').children('li').remove();
			count = 0;
			$('.counter').text(count);  // sets counter
		}); // deletes all the items in the list

		

		$('.add-list').on('click', 'li', function(event){
			event.stopPropagation();

		   if ($(this).hasClass('strike')) {
   				$(this).css('text-decoration', 'line-through');
   				$(this).removeClass('strike');
           }

           else {
           		$(this).css('text-decoration', 'none');
           		$(this).addClass('strike');
           }
        }); // checks and unchecks the list item.

	 
}); // Ready handler end



var count = 0;

function addToList() {

var value = $('#main-input').val();   // get value of input field
count++;

	
	if ($('#main-input').val()) {
		if (count <= 10){

			$('.add-list').append('<li class="clearfix strike">' + '<span>' + value + '</span>'
				 + '<button id="delete-icon">' + 
				'</button>' + '<button id="edit-icon">' + 
				'</button>' + '</li>' + '<div id="save-wrapper" class="clearfix">' + '<input type="text" id="edit">' + 
				'<input type="submit" value="" id="save">' + '</div>');
					
		    $('#main-input').val(''); // reset text field

		    $('.counter').text(count);  // sets counter

		    $('.after-logo').finish().fadeIn(1000).delay(500).fadeOut(1000);
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

