//Init
$( document ).ready(function() {
var xhr;
var onQueue = false;
$('a#ajax-link').click(function(){
		if(onQueue) return;
		var page = $(this).attr('href');

		$('#content').html('<center><span style="font-size: 75px;" class="glyphicon glyphicon-refresh glyphicon-spin"></span></center>');
		if(!($('.logout'))){
		onQueue = true;
		setTimeout(function(){
			if(!($('.profile'))){
				setTimeout(function(){
				$( "#content" ).stop();
				$('#content').load('/content/' + page + '.php');
				}, 3000);
			}
			else{
			setTimeout(function(){
			$( "#content" ).stop();
			$('#content').load(page);
			}, 3000);
			}
		}, 3000);
		}else{
			onQueue = true;
			$( "#content" ).stop(); $('#content').load('/content/' + page + '.php'); 
		}
		onQueue = false;
		return false;
	});
//Logout
$(".logout").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	humane.error = humane.spawn({ addnCls: 'humane-jackedup-info', timeout: 3000 }); humane.error('Logging off...');
	$( "#content" ).stop();
	$('#content').load('/content/user/logout.php');
	setTimeout(function(){
			
			window.top.location.reload();
		}, 2000);

});
										
//Registration Ajax
$("#ajax-register").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var data = $('#ajax-regform').serialize()
	
	if(xhr && xhr.readyState != 4){
            xhr.abort();
			
        }
	//humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error('Please wait...');	
		xhr = $.ajax({
			type: "POST",
			url: "/content/ajax/js_register.php",
			data: data,     
			dataType: "json",
			success: function(data){
				if(data.status == 1){
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error(data.text);
					setTimeout(function(){
						window.location.replace("/");
					}, 2000);
				} else {
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error(data.text);
				}
			},
			error: function(){
				//humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error('Please slow down then try again.'); return;
				
			}
		});
		
	
});
						
						
//Login Ajax
$("#ajax-login").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var data = $('#ajax-loginform').serialize()
	
	if(xhr && xhr.readyState != 4){
            xhr.abort();

        }
	//humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error('Please wait...');	
		xhr = $.ajax({
			type: "POST",
			url: "/content/ajax/js_login.php",
			data: data,     
			dataType: "json",
			success: function(data){
				if(data.status == 1){
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error(data.text);
					setTimeout(function(){
						window.top.location.reload();
					}, 1000);
				} else {
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error(data.text);
				}
			},
			error: function(){
				//humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error('Please slow down then try again.'); return;
				
			}
		});
		
});
					
//CreateServer Ajax
$("#ajax-createserver").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var data = $('#ajax-createserverform').serialize()
	
	if(xhr && xhr.readyState != 4){
            xhr.abort();
			
        }
	//humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error('Please wait...');
		xhr = $.ajax({
			type: "POST",
			url: "/content/ajax/js_createserver.php",
			data: data,     
			dataType: "json",
			success: function(data){
				if(data.status == 1){
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error(data.text);
					setTimeout(function(){
						window.location.replace("/myservers");
					}, 1000);
				} else {
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error(data.text);
				}
			},
			error: function(){
				//humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error('Please slow down then try again.'); return;
				
			}
		});
	
	
});

//EditServer Ajax
$("#ajax-editserver").click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var data = $('#ajax-editserverform').serialize()
	
	if(xhr && xhr.readyState != 4){
            xhr.abort();
			
        }
	//humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error('Please wait...');	
		xhr = $.ajax({
			type: "POST",
			url: "/content/ajax/js_editserver.php",
			data: data,     
			dataType: "json",
			success: function(data){
				if(data.status == 1){
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error(data.text);
					setTimeout(function(){
						window.location.replace("/myservers");
					}, 1000);
				} else {
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error(data.text);
				}
			},
			error: function(){
				//humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error('Please slow down then try again.'); return;
				
			}
		});
		
	
});


$("#search").click(function(){
	$('#content').html('<center><span style="font-size: 75px;" class="glyphicon glyphicon-refresh glyphicon-spin"></span></center>');
	setTimeout(function(){
			var name = $('input#serversearch').val();
				if($.trim(name) != ''){
					$( "#content" ).stop();
					$('#content').load('content/serverlist.php?search=' + name);
				}
		}, 3000);
	return false;

});

$("#lowrate").click(function(){
	$('#content').html('<center><span style="font-size: 75px;" class="glyphicon glyphicon-refresh glyphicon-spin"></span></center>');
	setTimeout(function(){
					$( "#content" ).stop();
					$('#content').load('content/serverlist.php?rate=1');
				
		}, 3000);
	return false;

});

$("#midrate").click(function(){
	$('#content').html('<center><span style="font-size: 75px;" class="glyphicon glyphicon-refresh glyphicon-spin"></span></center>');
	setTimeout(function(){
					$( "#content" ).stop();
					$('#content').load('content/serverlist.php?rate=2');
				
		}, 3000);
	return false;

});

$("#highrate").click(function(){
	$('#content').html('<center><span style="font-size: 75px;" class="glyphicon glyphicon-refresh glyphicon-spin"></span></center>');
	setTimeout(function(){
					$( "#content" ).stop();
					$('#content').load('content/serverlist.php?rate=3');
				
		}, 3000);
	return false;

});

$("#premium").click(function(){
	$('#content').html('<center><span style="font-size: 75px;" class="glyphicon glyphicon-refresh glyphicon-spin"></span></center>');
	setTimeout(function(){
					$( "#content" ).stop();
					$('#content').load('content/serverlist.php?premium=1');
				
		}, 3000);
	return false;

});


$('#ajax-votein').click(function(e){
	e.preventDefault();
	e.stopPropagation();
	var data = $('#ajax-voteinform').serialize()
	
	
	if(xhr && xhr.readyState != 4){
            xhr.abort();
			
        }
	//humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error('Please wait...');
		xhr = $.ajax({
			type: "POST",
			url: "/content/ajax/js_votein.php",
			data: data,     
			dataType: "json",
			success: function(data,xhr){
				if(data.status == 1){
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-success', timeout: 3000 }); humane.error(data.text);
					setTimeout(function(){
						window.location.replace("/");
					}, 1000);
				} else {
					humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error(data.text);
					
				}
			},
			error: function(){
				//humane.error = humane.spawn({ addnCls: 'humane-jackedup-error', timeout: 3000 }); humane.error('Please slow down then try again.'); return;
				
			}
		});
	return;
});


//VOTE RESET COUNTER
var refDate = new Date();
var date = new Date();
date.setMonth(refDate.getUTCMonth()+2);
date.setDate(1);
$("#voteResetCountdown")
   .countdown(date.getFullYear()+"/"+date.getMonth()+"/"+date.getDate(), function(event) {
     $(this).text(
       event.strftime('%D:%H:%M:%S')
     );
   });


});