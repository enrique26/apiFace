var fb = require('facebook');

$.loginF.addEventListener('click', function(e){
	if(Titanium.Network.online){
	 fb.appid = 311277572388395;
	 fb.permissions = ['publish_stream','read_stream','public_profile','user_photos','user_birthday','user_interests','user_location','user_games_activity'];
	 fb.forceDialogAuth=true;
	 fb.authorize();
	 
 
 }else{
 	alert('no hay red');
 }
});

$.activeOff.addEventListener('click',function(e){
	fb.logout();
});

function facebookIformacion(){
	fb.requestWithGraphPath('me',{}, 'GET', function(e){
    if (e.success) {
    	Ti.API.info(e.result);
        // alert("Success!  From FB: " + e.result);
        var objetoFace=JSON.parse(e.result);
        alert(objetoFace);
        $.nombre.text=objetoFace.name;
        $.foto.image='http://graph.facebook.com/'+objetoFace.id+'/picture';
      
    } else {
        if (e.error) {
            alert(e.error);
            fb.logout();
        } else {
            alert("Unkown result");
            alert(logout);
        }
    }
});
}



fb.addEventListener('login',function(e){
	if(e.success){
		alert('login');
		facebookIformacion();
	}
});

fb.addEventListener('logout',function(){
	alert('logout');
	$.foto.image=null;
	$.nombre.text=null;
});


$.index.open();
