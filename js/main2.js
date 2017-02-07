//parte visual
var li = null;
function onMensajeKey(event)
{
    if (event.keyCode==13){
        var elInputMensajes=document.getElementById("mensajes");
        
        crearListaChats(elInputMensajes.value);
        crearMensajes(elInputMensajes.value);
        
        elInputMensajes.value="";
    }
}

function crearMensajes (_mensaje)
{
    var d = new Date();
    var mensajeIn = 
     '<div class="w-message w-message-in">'+
	  	'<div class="w-message-text">'
	  	    +'<h5 class="green-1">Maria Paula Rivarola</h5>'
	  	    +'<p>Nunca!!! Juan Diego es único</p>'+
	  	    '<div class="time">14:20</div>'+
	  	'</div>'+        
      '</div>';
    var mensajeOut =
      '<div class="w-message w-message-out">'
	  	+'<div class="w-message-text">'
	  		+'<p>'+_mensaje+'</p>'
	  	    +'<div class="time">'+d.getHours()+':'+d.getMinutes()+'</div>'
	  	+'</div>'
      +'</div>';
    

    var mensaje= document.getElementsByClassName("w-last-message")[0];
    mensaje.innerHTML= _mensaje;
    
    var chat = document.getElementById("chat");
    chat.innerHTML+=mensajeOut;
    chat.scrollTop=chat.scrollHeight;
    
    //var conversacion= document.getElementById("conversacion");
    //conversacion.innerHTML+=mensajeOut;
}

function crearListaChats (_mensaje)
{
   var lista=document.getElementById("lista-chat");
   var d = new Date();
    if (li==null)
    {
        li =document.createElement('LI');
        var htmlChatList =
        '<div class="avatar">' +
				'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
				'<h4 class="w-contact-name">Laboratoria Perú</h4>' +
				'<p class="w-last-message">' + _mensaje + '</p>' +
			'</div>' +
       '<div class="time">'+d.getHours()+':'+d.getMinutes()+'</div>';
        
        li.innerHTML=htmlChatList;
        lista.insertBefore(li, lista.childNodes[0]);
   }
}
function headerChats ()
{
    
}

//parte logica