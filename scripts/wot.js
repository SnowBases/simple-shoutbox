$(document).ready(function() {
// ----------------------------------------------------------------------------

$('#submit').on('click', function() {
	var name = $('#name').val();
	var shout = $('#shout').val();
	var date = getDate();
	
	// build string to write to the database
	var dataString = 'name=' +name+ '&shout=' +shout+ '&date=' +date;
	
	//validate input
	if(name == '' || shout == '') {
		alert('Please fill in Name and Shout fields.');
	} else {
		// AJAX request
		$.ajax({
			// options
			type: "POST",
			url: "../js_shoutbox/shoutbox.php",
			data: dataString,
			cache: false,
			success: function(html){
				$('#shouts ul').prepend(html);
				// prepend is before the content of UL, inside 
			}		
		});
	}
	
	return false;
});

//format JavaScript date like a MySQL date
function getDate() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}

// ----------------------------------------------------------------------------
});
