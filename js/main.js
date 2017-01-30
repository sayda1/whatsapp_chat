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
    //function contactos
    this.listaChat = function (_htmlTarget)
    {
        //definiendo  fecha
        var actual = new Date();
        var fecha =actual.getDate()+'/'+actual.getMonth()+'/'+actual.getYear();
        window.status=fecha;
        //console.log(fecha);
        var contactosList = document.getElementById("contactos");
        for (var i in this.chatear)
        {
            //console.log(htmlLista);
            var htmlLista ='<li><div class="avatar">' +	'<img src="' + this.chatear[i].chatImagen + '" alt="" class="wh-44">' +	'<h4 class="w-contact-name">' + this.chatear[i].nombre+'</h4>' +'<p class="w-last-message">'+this.chatear[i].mensajes[this.chatear[i].mensajes.length-1].mensaje + '</p>' +	'</div>' +
            '<div class="time">'+fecha+'</div>'
            +'</li>';
            
            contactosList.innerHTML += htmlLista;
        }
    };
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
        //definiendo tiempo hora
        var tiempo = new Date();
        var hora = tiempo.getHours()+':'+tiempo.getMinutes();
        //var minuto=tiempo.getMinutes(); 
        window.status=hora;        
        //console.log(hora );
        
        var MensajeEn = '<div class="w-message w-message-in"><div class="w-message-text"><p>' + _mensaje.mensaje +'</p><div class="time">'+ hora +'</div></div></div>';
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
}

//contactos para chatear
var wapp = new general();

// personas chat TRES
var Yo = new Personas("sayda");
var Eva = new Personas("Eva");
var Cristian = new Personas("cristian");
var Rashbir =new Personas("Rashbir");
var Harlin =new Personas("Harlin");

//primer contacto
var chat1 = new Chat();
chat1.nombre="Eva";
chat1.gente.push(Eva);
chat1.chatImagen="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSegj5Tx4gQv3RQVqazZqQBHkVhrLO_yu2rfQL8QYH2BNVTFSf1";
wapp.chatear.push(chat1);

//segundo contacto
var chat2 = new Chat();
chat2.nombre="Cristian";
chat2.gente.push(Cristian);
chat2.chatImagen="https://s-media-cache-ak0.pinimg.com/originals/3c/59/94/3c5994e630812530079bcd9a89d509cc.jpg";
wapp.chatear.push(chat2);

//tercera contacto 
var chat3 =new Chat();
chat3.nombre="Rashbir";
chat3.gente.push(Rashbir);
chat3.chatImagen="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQFqVx8cikhohuISwt__VpNdkas3ECDX4h_J8esvgfEug4q4z7_";
wapp.chatear.push(chat3);

//cuarta conversacion
var chat4 =new Chat();
chat4.nombre="Harlin";
chat4.gente.push(Harlin);
chat4.chatImagen="http://www.animalesyanimales.com/wp-content/uploads/2009/04/20081102164739-fotos-gatos.jpg";
wapp.chatear.push(chat4);

//primera conversacion
wapp.selecionChat=chat1;
wapp.enviarMensaje(new Mensaje("hola", Eva));
//wapp.enviarMensaje(new Mensaje("que tal?", Yo));

//segunda converzacion
wapp.selecionChat=chat2;
wapp.enviarMensaje(new Mensaje ("bamos ha comer?" , Cristian));
//wapp.enviarMensaje(new Mensaje ("bien" , Yo));

//tercera converacion
wapp.selecionChat=chat3;
wapp.enviarMensaje(new Mensaje("si.....!!!!" ,Rashbir));

wapp.selecionChat =chat4;
wapp.enviarMensaje(new Mensaje("bien..!!!" , Harlin));
wapp.listaChat();
//console.log(wapp.getLastMessage().sender);


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
		wapp.enviarMensaje(new Mensaje(evento.target.value, Yo));
		evento.target.value = " ";
	}
}
