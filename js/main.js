//buscador
var search = document.getElementById("search"),
    food = document.getElementsByClassName("avatar"),
    forEach = Array.prototype.forEach;

search.addEventListener("keyup", function(e){
    var choice = this.value;
  
    forEach.call(food, function(f){
        if (f.innerHTML.toLowerCase().search(choice.toLowerCase()) == -1)
            f.style.display = "none";        
        else
            f.parentNode.style.display = "block";        
    });
}, false);
//funcion chat para enviar mensajes y recicbir 
function Chat()
{
	this.nombre = " ";
	this.gente= [];
	this.mensajes = [];
	this.chatImagen = " ";
}

function Personas(_nombre, _imagen)
{
	this.nombre = _nombre;
	this.imagen = _imagen;
}
function Mensaje(_mensaje, _enviar)
{
	this.mensaje = _mensaje;
	this.enviar = _enviar;
	this.recibir = false;
}

//funcion general
function general ()
{
    this.chatear = [];
    this.selecionChat= function selecionar(){};
    this.listaChat = function (_htmlTarget)
    {
        var chatLista = document.getElementsByClassName("w-recent-chats");
        for(var i in this.chatear)
        {
            var lista =console.log(this.chatear[i].messages);
			var htmlChatList = '<li><div class="avatar">' +
					'<img src="' + this.chatear[i].chatImagen + '" alt="" class="wh-44">' +
					'<h4 class="w-contact-name">' + this.chatear[i].nombre +'</h4>' +
					'<p class="w-last-message">' + this.chatear[i].mensajes[this.chatear[i].mensajes.length-1].mensaje+'</p>' +
				'</div>' +
				'<div class="time">'+fecha +'</div>' +
			'</li>';
			chatLista.innerHTML += lista;
        }
    }
    this.listaMensajes = function ()
    {
        var divChat =document.getElementById("chat");
        divChat.innerHTML ="";
        for (var i in this.selecionChat.mensajes)
        {
            if (object.hasOwnProperty(i))
            {
               this.enviarMensaje(this.selecionChat.mensajes[i], false); 
            }
        }
    };
    
    //obtener el ultimo mensaje
    this.ultimoMensaje=function()
    {
       return this.selecionChat.mensajes[this.selecionChat.mensajes.length-1]; 
    };
    //recicbir mensaje
    this.enviarMensaje=function (_mensaje , _en)
    {
        //var MensajeEn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _mensaje.mensaje +'</p><div class="time">'+ hora +'</div></div></div>';
		var MensajeFuera= '<div class="w-message w-message-out"><div class="w-message-text"><p>' + _mensaje.mensaje+ '</p><div class="time">'+ hora +'</div></div></div>';
		var divChat = document.getElementById("chat");
        
        this.selecionChat.mensajes.push(_mensaje);
        if (_en)
        {
            divChat.innerHTML += MensajeEn;
		}else{
			divChat.innerHTML += MensajeFuera;
		}   
        divChat.scrollTop = divChat.scrollHeight; 
    }
    
    var tiempo = new Date();
    var hora = tiempo.getHours()+':'+tiempo.getMinutes();
    var fecha =tiempo.getDay()+'/'+tiempo.getMonth()+'/'+tiempo.getYear();
    //var minuto=tiempo.getMinutes(); 
    window.status=hora;
    window.status=fecha;
    console.log(hora ,fecha);
}

var wapp = new general();
var yo = new Personas("sayda");
var Eva = new Personas("Eva");
var Cristian = new Personas("cristian")

var chat = new Chat();
chat.gente.push(Eva);
wapp.enviarMensaje(new Mensaje(" ", Eva));


var chat = new Chat();
chat.nombre ="Eva";
chat.gente.push("Eva");
chat.chatImagen="https://i.ytimg.com/vi/4gTjQUOyHfo/maxresdefault.jpg";
wapp.chatear.push(chat);

var chat2=new Chat();
chat2.nombre="Cristian";
chat2.gente.push("Cristian");
chat2.chatImagen="http://st-listas.20minutos.es/images/2011-03/279699/2982224_640px.jpg?1334875539";
wapp.chatear.push(chat2);


wapp.selecionChat = chat ;
wapp.enviarMensaje(new Mensaje("hola", yo));
wapp.enviarMensaje(new Mensaje("hola , como bas", Eva));
//wapp.enviarMensaje(new Mensaje("hola , quieren comer?", Cristian));
wapp.listaChat();

window.onload = init;
var inputMensaje;
var divChat;
var chatPanel;

function init()
{
	inputMensaje= document.getElementById("mensajes");
	divChat = document.getElementById("chat");
	inputMensaje.addEventListener("keyup", onInputKeyUp);
}

function onInputKeyUp(evento)
{
    console.log(evento.keyCode);
	if(evento.keyCode == 13)
	{
		wapp.enviarMensaje(new Mensaje(evento.target.value, yo));
		evento.target.value = " ";
	}
}
