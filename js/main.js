$(document).ready(function(){

	$('#send').click(function(){
		console.log('button -- testing...')
		//testing---if-form-fields
		var fullname	=	$('#fullname').val();
		var email		=	$('#email').val();
		var phone		=	$('#phone').val();
		var message		=	$('#message').val();
		console.log($('#fullname').val());
		console.log($('#email').val());
		console.log($('#phone').val());
		console.log($('#message').val());
		//Its Working

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