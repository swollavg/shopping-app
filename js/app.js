$(document).ready(function(){
	
        // Adds Items to list
		$('.main-submit').click(function(event){
			addToList();
			event.preventDefault();  
		});  


		// deletes an items
		$('.add-list').on('click', '#delete-icon', function(event){
			event.stopPropagation();

			// adds removed class for the transition. Callback function to remove item from DOM
			$(this).parent('li').addClass('removed-item').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
    			$(this).remove();
			});  
			
			count -= 1; // decreases counter
			$('.counter').text(count);

			$('.after-logo').fadeIn(1500).fadeOut(500); //pig smoke logo
		}); 



		// allows editing of content, swaps to text input
		$('.add-list').on('click', '#edit-icon', function(event){
			event.stopPropagation();
			$(this).closest('li').hide().next().show()
			.children(":first").css('display', 'block').next()
			.show().prev().val($(this).prev().prev().text());

			
		}); 



		// saves edited content
		$('.add-list').on('click', '#save', function(){
			$(this).hide().prev().hide().closest('div').hide().prev()
			.show().children(":first").text($(this).prev().val());
			
		}); 



		// deletes all the list items.
		$('.delete-all').click(function(){
			count = 0; //resets counter to zero
			$('.counter').text(count);  // sets counter
			// applies removed-item animation
			$('.add-list').children('li').addClass('removed-item').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
            function(e) {
    			$('.add-list').children('li').remove();
			});
		}); 

		

		// checks and unchecks the list item.
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
        }); 

        $('.email-submit').click(function(event){
        	if($(this).prev().val()) {
        		alert('Your email has been sent..Well not really, but you get the point :)');
        	    event.preventDefault();

        	    $(this).prev().val('');

        		
        	}

        	else {
				alert('You need to provide an email address');
				event.preventDefault();
            }
        });

       

	 
}); // Ready handler end



var count = 0; 


function addToList() {

var value = $('#main-input').val();   // get value of input field
count++; //increments counter

	
	if ($('#main-input').val()) {
		if (count <= 10){

			$('.add-list').append('<li class="clearfix strike new-item">' + '<span>' + value + '</span>'
				 + '<button id="delete-icon">' + 
				'</button>' + '<button id="edit-icon">' + 
				'</button>' + '</li>' + '<div id="save-wrapper" class="clearfix">' + '<input type="text" id="edit">' + 
				'<input type="submit" value="" id="save">' + '</div>');
					
		    $('#main-input').val(''); // reset text field

		    $('.counter').text(count);  // sets counter

		    $('.after-logo').finish().fadeIn(1500).fadeOut(500); // pig smoke effect
		}

		else {
			count -= 1;  //the alert increments counter. This gets it back to normal
			alert("You can only have 10 items! Please delete something");
			$('#main-input').val(''); // reset text field

		 }
	}

	else {
		count -= 1;
		alert('Your list must contain words silly!');
	}

};

