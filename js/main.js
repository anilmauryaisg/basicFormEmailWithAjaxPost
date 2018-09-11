$(document).ready(function(){

	$('#send').click(function(){

		var fullname	=	$('#fullname').val();
		var email		=	$('#email').val();
		var phone		=	$('#phone').val();
		var message		=	$('#message').val();
		
		var count = 0;

		if($('#fullname').val() === ''){
			$('#fullname').addClass('field_error');
			count++;
		}	

		if($('#phone').val() === ''){
			$('#phone').addClass('field_error');
			count++;
		}	

		if($('#email').val() === ''){
			$('#email').addClass('field_error');
			count++;
		}	

		if($('#message').val() === ''){
			$('#message').addClass('field_error');
			count++;
		}	


		if(count > 0){
			return false;
		}	

		$.ajax({
			url:'./mail.php',
			//data:$('#contactFrm').serialize(),
			data:'fullname='+fullname+'&email='+email+'&phone='+phone+'&message='+message,
			type: 'post',
			success: function(response){
				if(response == 1){
					$('#response_msg').html('<span class="alert alert-success">Email Sent</span>');
				}else{
					$('#response_msg').html('<span class="alert alert-danger">Email Not Sent</span>');
				}
			}
		});
		

		return false;
	});

});