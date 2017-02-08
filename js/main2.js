//buscador
var search = document.getElementById("search"),
    food = document.getElementsByClassName("avatar"),
    forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
    var choice = this.value;
  
    forEach.call(food, function(f){
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.parentNode.style.display = "none";        
        else
            f.parentNode.style.display = "block";        
    });
}, false);
//parte logica
function Chat(_nombre, _imagen , _mensaje, _fecha)
{
	this.nombre =  _nombre;
	this.imagenURL = _imagen;
	this.ultimoMensaje = _mensaje;
	this.horaUltimoMensaje = _fecha;
}
var fecha= new Date();
var listaDeChats=
[
    new Chat("Maday ", 'http://st-listas.20minutos.es/images/2011-03/279699/2982224_640px.jpg?1334875539' , 'bamos a comer..??', '12:00'),
    
    new Chat("Zeldina " , 'http://www.mejoreslistasyrankings.com/images/0/5/1/actrices_y_cantantes_coreanas_mas_guapas_143150_portada.png', 'estoy durmiendo', '1:03'),
    
    new Chat("Grace " , 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3SJ3YqM-VUD7cQeaYZ1I1cXevMy13xirdurJph98bk96lZMoM' , 'si..!!!' , '7:03'),
    
    new Chat("Rosa " , 'http://cde.3.elcomercio.pe/ima/0/0/8/3/7/837620/base_image.jpg' , 'donde esta la escoba.?', '12:00'),
    
    new Chat("Misterio " , 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTygypdZfncEfd46sDd7z_N6buMAscTTfcbe1aIFJ8p9SY7Owbs' , 'kien soy ..??', '7:15'),
    
    new Chat("Cristian " , 'https://ugc.kn3.net/i/origin/http://imagenesfotos.com/wp-content/2008/11/naruto-14.jpg' , '...??' , '10:34'),
    
    new Chat("Mona " , 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRhtiTxuRiKDno8MPuW0jGAMsNE2o6TlRgBUyG8dx0kQsP5z_hLkg' , 'porque esa cara.?' , '10:32'),
    
    new Chat("Cancervero " , 'http://cdn.noticiaaldia.com.s3.amazonaws.com/wp-content/uploads/2016/03/canse-400x227.jpg' , 'no me salen rimas que no sean reales', '3:20')
];

//parte visual
var liItem = null;
function init()
{
    initChat();
    vasio();
}

function initChat()
{
    var htmlLista=document.getElementById("lista-chat");
    
    for ( var i in listaDeChats)
    {
        var htmlChatList='<li><div class="avatar">'+
				'<img src="' +listaDeChats[i].imagenURL+'" alt="" class="wh-44">' +
				'<h4 class="w-contact-name" style="color:blue; font-weight:bold;">'+listaDeChats[i].nombre+'</h4>' +
				'<p class="w-last-message">'+listaDeChats[i].ultimoMensaje+ '</p>' +
			'</div> ' +
           '<div class="time">'+ listaDeChats[i].horaUltimoMensaje +'</div></li>'; 
       htmlLista.innerHTML+=htmlChatList;
    }
	setEventsChatList();
}

function setEventsChatList()
{
    var listaChats = document.getElementById("lista-chat");
    var lisItem=listaChats.getElementsByTagName("li");
    
    for (var i=0; i < lisItem.length; i++)
    {
        lisItem[i].addEventListener('click', onListaChatClick);
    }   
}

function  onListaChatClick(evt)
{
    var contactName = evt.currentTarget.getElementsByClassName("w-contact-name")[0].textContent;
    var imgURL= evt.currentTarget.getElementsByClassName("wh-44")[0].src;
    
   chatCabesa(contactName, imgURL, "Activo (a)");
}

function onMensajeKey(event)
{
    if (event.keyCode==13){
        var elInputMensajes=document.getElementById("mensajes");
        
        crearListaChats(elInputMensajes.value);
        crearMensajes(elInputMensajes.value);
        
        elInputMensajes.value="";
    }
}
//funcion para enviar mensajes
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

function vasio(){
    var borrar = document.getElementById("chat");
    borrar.innerHTML="";
}
//funcion para crear listas de chat
function crearListaChats (_mensaje)
{
   var htmlLista=document.getElementById("lista-chat");
   var d = new Date();
    
    if (liItem==null)
    {
        liItem =document.createElement('LI');
        var htmlChatList =
        '<div class="avatar">' +
				'<img src="image/logocodeacademy.png" alt="" class="wh-44">' +
				'<h4 class="w-contact-name" style="color:blue; font-weight:bold;">Laboratoria Perú</h4>' +
				'<p class="w-last-message">' + _mensaje + '</p>' +
			'</div>' +
       '<div class="time">'+d.getHours()+':'+d.getMinutes()+'</div>';
        
        liItem.innerHTML=htmlChatList;
       htmlLista.insertBefore(liItem, htmlLista.childNodes[0]);
   }    
    setEventsChatList();
}

function chatCabesa(_contactName, _imgURL, _estado)
{
    var chatHeader=document.getElementById("chat-header");
    chatHeader.getElementsByClassName('w-contact-name')[0].innerHTML=_contactName;
    chatHeader.getElementsByClassName('w-users-messages')[0].innerHTML=_estado;
    chatHeader.getElementsByTagName('img')[0].src=_imgURL;
}
