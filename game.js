//-----------------------------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?-----------------------------?
var bloques=/*0*/[[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 1*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 2*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 3*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 4*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 5*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,0 ,0 ,1],
            /* 6*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 7*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 8*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /* 9*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,2 ,0 ,0 ,0 ,1 ,2 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,3 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,3 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,2 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /*10*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,3 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /*11*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,3 ,4 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /*12*/[0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,5 ,6 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1],
            /*13*/[7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,12,0 ,0 ,11,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,8 ,9 ,10,7 ,12,0 ,0 ,0 ,0 ,1],
            /*14*/[15,16,15,15,15,16,15,15,16,15,16,15,15,15,16,16,15,15,15,15,15,16,15,15,15,16,16,15,15,15,15,15,16,15,15,15,16,16,15,15,15,15,15,16,15,15,15,16,16,15,15,15,15,15,16,15,15,15,15,16,16,15,15,15,15,15,15,16,14,0 ,0 ,13,15,15,16,15,15,15,15,16,16,15,15,15,15,14,0 ,0 ,0 ,0 ,1]
];
var buttonD=false;
var buttonI=false;
var caminata=0;
var camMax=2;
var frenar=false;
var salto=0;
var caminar=true;
var parado=true;
var descrementar=false;
var aumentar=false;
var saltar=false;
var derecha=true;
var pared=false;
//--------------------------Canvas----------------------//
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvita = document.getElementById("canvitas");
var ctx2= canvitas.getContext("2d");

//--------------------------Listener--------------------//
window.addEventListener("gamepadconnected",conectado);
function disconetc(e){
    console.log(e);
}
function conectado(e){
    console.log(e.gamepad.buttons);
}
var tiempo1=0;
var tiempo2=0;
window.addEventListener("keydown",mandos);//presiona boton
function mandos(e){
    if(e.keyCode==37){//izquierda
        buttonI=true;
        buttonD=false;
    }else if(e.keyCode==39){//derecha
        buttonD=true;
        buttonI=false;
        /*console.log( "caminata",caminata
             ,"camMax",camMax,
             "frenar",frenar,
             "salto",salto,
             "caminar",caminar,
             "parado",parado,
             "descrementar",descrementar,
         "aumentar",aumentar,
             "avanza",avanza,
             "avanzaI",avanzaI,
             "saltar",saltar,
             "derecha",derecha)*/
        tiempo1=Date.now();
    }
    if(e.keyCode==40){//abajo
        mario.setCaida(false);
        e.preventDefault();
    }
    if(e.keyCode==38){//arriba
        saltar=true;
    }
    if(e.keyCode==32){//abajo
        e.preventDefault();
    }
    if(e.keyCode==83){//s
        caminar=false;
    }
    if(e.keyCode==67){//c
        saltar=true;
    }
    
    console.log(e.keyCode);
}
window,addEventListener("keyup",mandos2);//suelta boton
function mandos2(e){
    if(e.keyCode==37){//izquierda
        frenar=true;
        buttonI=false;
    }else if(e.keyCode==39){//derecha
        frenar=true;    
        buttonD=false;    
    }
    if(e.keyCode==38){//arriba
       
    }
    if(e.keyCode==40){//abajo
        e.preventDefault();
    }
    if(e.keyCode==83){
        mario.setCaminar(true);
       // caminar=true;
    }
    
}
//------------------------animaciones-------------------------//


function aniCoinBox(conCoinBox){
    
        if(conCoinBox==0){
            return ["imagenes/coinBox/coinBox-1.png",1];
        }else if(conCoinBox==1){
            return ["imagenes/coinBox/coinBox-2.png",2];
        }else if(conCoinBox==2){
           return ["imagenes/coinBox/coinBox-3.png",3];
        }else if(conCoinBox==3){
            return ["imagenes/coinBox/coinBox-4.png",4];
        }else if(conCoinBox==4){
            return ["imagenes/coinBox/coinBox-5.png",5];
        }else if(conCoinBox==5){
            return ["imagenes/coinBox/coinBox-6.png",6];
        }else if(conCoinBox==6){
            return ["imagenes/coinBox/coinBox-7.png",1000];
        }
}

function aniBox(conCoin){
    if(conCoin==0){
        return ["imagenes/coin animacion/boxCoin 1.png",1];
    }else if(conCoin==1){
        return ["imagenes/coin animacion/boxCoin 2.png",2];
    }else if(conCoin==2){
        return ["imagenes/coin animacion/boxCoin 3.png",3];
    }else if(conCoin==3){
        return ["imagenes/coin animacion/boxCoin 4.png",4];
    }else if(conCoin==4){
        return ["imagenes/coin animacion/boxCoin 5.png",5];
    }else if(conCoin==5){
        return ["imagenes/coin animacion/boxCoin 6.png",6];
    }else if(conCoin==6){
        return ["imagenes/coin animacion/boxCoin 7.png",7];
    }else if(conCoin==7){
        return ["imagenes/coin animacion/boxCoin 8.png",8];
    }else if(conCoin==8){
        return ["imagenes/coin animacion/boxCoin 9.png",9];
    }else if(conCoin==9){
        return ["imagenes/coin animacion/boxCoin 10.png",10];
    }else if(conCoin==10){
        return ["imagenes/coin animacion/boxCoin 11.png",11];
    }else if(conCoin==11){
        return ["imagenes/coin animacion/boxCoin 12.png",12];
    }else if(conCoin==12){
        return ["imagenes/coin animacion/boxCoin 13.png",13];
    }else if(conCoin==13){
        return ["imagenes/coin animacion/boxCoin 14.png",14];
    }else if(conCoin==14){
        return ["imagenes/coin animacion/boxCoin 15.png",15];
    }else if(conCoin==15){
        return ["imagenes/coin animacion/boxCoin 16.png",16];
    }else if(conCoin==16){
        return ["imagenes/coin animacion/boxCoin 17.png",17];
    }else if(conCoin==17){
        return ["imagenes/coin animacion/boxCoin 18.png",0];
    }
    
}

function aniBlock(conBlock){
    if(conBlock==0){
        return ["imagenes/block brick/block 1.png",1];
    }else if(conBlock==1){
        return ["imagenes/block brick/block 2.png",2];
    }else if(conBlock==2){
        return ["imagenes/block brick/block 3.png",3];
    }else if(conBlock==3){
        return ["imagenes/block brick/block 4.png",4];
    }else if(conBlock==4){
        return ["imagenes/block brick/block 5.png",5];
    }else if(conBlock==5){
        return ["imagenes/block brick/block 6.png",6];
    }else if(conBlock==6){
        return ["imagenes/block brick/block 7.png",7];
    }else if(conBlock==7){
        return ["imagenes/block brick/block 1.png",8];
    }else if(conBlock==8){
        return ["imagenes/block brick/block 1.png",9];
    }else if(conBlock==9){
        return ["imagenes/block brick/block 1.png",10];
    }else if(conBlock==10){
        return ["imagenes/block brick/block 1.png",11];
    }else if(conBlock==11){
        return ["imagenes/block brick/block 1.png",12];
    }else if(conBlock==12){
        return ["imagenes/block brick/block 1.png",13];
    }else if(conBlock==13){
        return ["imagenes/block brick/block 1.png",14];
    }else if(conBlock==14){
        return ["imagenes/block brick/block 1.png",15];
    }else if(conBlock==15){
        return ["imagenes/block brick/block 1.png",16];
    }else if(conBlock==16){
        return ["imagenes/block brick/block 1.png",17];
    }else if(conBlock==17){
        return ["imagenes/block brick/block 1.png",18];
    }else if(conBlock==18){
        return ["imagenes/block brick/block 1.png",19];
    }else if(conBlock==19){
        return ["imagenes/block brick/block 1.png",0];
    }
}

function otras(b){
    if(b==3){
        return "imagenes/pipeLeftUp.png"
    }else if(b==4){
        return "imagenes/pipeRithUp.png"
    }else if(b==5){
        return "imagenes/pipeLeftDn.png"
    }else if(b==6){
        return "imagenes/pipeRithDn.png"
    }else if(b==7){
        return "imagenes/grama1.png"
    }else if(b==8){
        return "imagenes/grama2.png"
    }else if(b==9){
        return "imagenes/grama3.png"
    }else if(b==10){
        return "imagenes/grama4.png"
    }else if(b==11){
        return "imagenes/gramaLeft.png"
    }else if(b==12){
        return "imagenes/gramaRith.png"
    }else if(b==13){
        return "imagenes/arenaLeft.png"
    }else if(b==14){
        return "imagenes/arenaRith.png"
    }else if(b==15){
        return "imagenes/arena1.png"
    }else if(b==16){
        return "imagenes/arena2.png"
    }
}

function aniBrakeBlock(conBrake){
    if(conBrake==0){
        return ["imagenes/brakeBlock/brakeBlock-1.png",1];
    }else if(conBrake==1){
        return ["imagenes/brakeBlock/brakeBlock-2.png",2];
    }else if(conBrake==2){
        return ["imagenes/brakeBlock/brakeBlock-3.png",3];
    }else if(conBrake==3){
        return ["imagenes/brakeBlock/brakeBlock-4.png",4];
    }else if(conBrake==4){
        return ["imagenes/brakeBlock/brakeBlock-5.png",5];
    }else if(conBrake==5){
        return ["imagenes/brakeBlock/brakeBlock-6.png",6];
    }else if(conBrake==6){
        return ["imagenes/brakeBlock/brakeBlock-7.png",7];
    }else if(conBrake==7){
        return ["imagenes/brakeBlock/brakeBlock-8.png",8];
    }else if(conBrake==8){
        return ["imagenes/brakeBlock/brakeBlock-9.png",9];
    }else if(conBrake==9){
        return ["imagenes/brakeBlock/brakeBlock-10.png",10];
    }else if(conBrake==10){
        return ["imagenes/brakeBlock/brakeBlock-11.png",11];
    }else if(conBrake==11){
        return ["imagenes/brakeBlock/brakeBlock-12.png",1000];
    }
}

function marioParado(conParado,i){
    let d="";
    if(i){
        d="imagenes/derecha/";
    }else{
        d="imagenes/izquierda/";
    }
        if(conParado==0){
            return [d+"mpp/mpp1.png",1];
        }else if(conParado==1){
            return [d+"mpp/mpp1.png",2];        
        }else if(conParado==2){
            return [d+"mpp/mpp2.png",3];        
        }else if(conParado==3){
            return [d+"mpp/mpp2.png",4];        
        }else if(conParado==4){
            return [d+"mpp/mpp3.png",5];    
        }else if(conParado==5){
            return [d+"mpp/mpp3.png",6];        
        }else if(conParado==6){
            return [d+"mpp/mpp4.png",7];        
        }else if(conParado==7){
            return [d+"mpp/mpp4.png",8];        
        }else if(conParado==8){
            return [d+"mpp/mpp5.png",9];        
        }else if(conParado==9){
            return [d+"mpp/mpp5.png",10];        
        }else if(conParado==10){
            return [d+"mpp/mpp6.png",11];        
        }else if(conParado==11){
            return [d+"mpp/mpp6.png",12];        
        }else if(conParado==12){
            return [d+"mpp/mpp7.png",13];        
        }else if(conParado==13){
            return [d+"mpp/mpp7.png",14];        
        }else if(conParado==14){
            return [d+"mpp/mpp8.png",15];        
        }else if(conParado==15){
            return [d+"mpp/mpp8.png",0];        
        }
}

function marioCamina(c,i){
    let d="";
    if(i){
        d="imagenes/derecha/";
    }else{
        d="imagenes/izquierda/";
    }
        if(c==0){
            return [d+"mpc/mpc1.png",1];
        }else if(c==1){
            return [d+"mpc/mpc2.png",2];
        }else if(c==2){
            return [d+"mpc/mpc3.png",3];
        }else if(c==3){
            return [d+"mpc/mpc4.png",4];
        }else if(c==4){
            return [d+"mpc/mpc5.png",5];
        }else if(c==5){
            return [d+"mpc/mpc6.png",6];
        }else if(c==6){
            return [d+"mpc/mpc7.png",7];
        }else if(c==7){
            return [d+"mpc/mpc8.png",8];
        }else if(c==8){
            return [d+"mpc/mpc9.png",0];
        }
    
}
function marioCorre(c,i){
    let d="";
    if(i){
        d="imagenes/derecha/";
    }else{
        d="imagenes/izquierda/";
    }
    if(c==0){
        return [d+"mpcorre/mpcr-1.png",1];
    }else if(c==1){
        return [d+"mpcorre/mpcr-2.png",2];
    }else if(c==2){
        return [d+"mpcorre/mpcr-3.png",3];        
    }else if(c==3){
        return [d+"mpcorre/mpcr-4.png",4];        
    }else if(c==4){
        return [d+"mpcorre/mpcr-5.png",5];        
    }else if(c==5){
        return [d+"mpcorre/mpcr-6.png",6];        
    }else if(c==6){
        return [d+"mpcorre/mpcr-7.png",7];        
    }else if(c==7){
        return [d+"mpcorre/mpcr-8.png",8];        
    }else if(c==8){
        return [d+"mpcorre/mpcr-9.png",0];   
    }
}

function marioCaida(c,i){
    let d="";
    if(i){
        d="imagenes/derecha/";
    }else{
        d="imagenes/izquierda/";
    }
    if(c==0){
        return [d+"mpb/mpb-2.png",1];
    }else if(c==1){
        return [d+"mpb/mpb-2.png",2];
    }else if(c==2){
        return [d+"mpb/mpb-3.png",3];
    }else if(c==3){
        return [d+"mpb/mpb-3.png",4]; 
    }else if(c==4){
        return [d+"mpb/mpb-4.png",1000]; 
    }else if(c==1000){
        return [d+"mpb/mpb-4.png",1000]; 
    }

}

function marioSalta(c,i){
    let d="";
    if(i){
        d="imagenes/derecha/";
    }else{
        d="imagenes/izquierda/";
    }
    if(c==0){
        return [d+"mps/mps1.png",1];
    }else if(c==1){
        return [d+"mps/mps2.png",2];
    }else if(c==2){
        return [d+"mps/mps3.png",1000];
    }else if(c==1000){
        return [d+"mps/mps3.png",1000];
    }

}
//---------------------------------Objetos-------------------// 

class Box{
    constructor(x,y,o) {
        this.img=new Image();
        this.img.src;
        this.frame=0;
        this.frame2=0;
        this.x=x*24;
        this.y=y*24;
        this.anc;
        this.alt;
        this.status=true;
        this.inactivo=true;
        this.accion=false;
        if(o!==0){
            this.status=true;
            this.inactivo=false; 
        }
        this.setX=(i)=>{
            this.x=i;
        }
        this.setY=(i)=>{
            this.y=i;
        }
        this.setInactivo=(i)=>{
            this.inactivo=i; 
        }
        this.setFrame=(a)=>{
            this.frame=a;
        }
        this.setFrame2=(a)=>{
            this.frame2=a;
        }
        this.setAccion=()=>{
            this.accion=true;
        }
        this.setStatus=(s)=>{
                this.status=s;
        }
        this.getFrame=()=>{
            return this.frame;
        } 
        this.getFrame2=()=>{
            return this.frame2;
        } 
        
        this.getSrc=()=>{
            let r=[];
            if(o!==0){
                if(o==1){
                    if(!this.accion){
                        r=aniBlock(this.getFrame());
                        this.img.src=r[0];
                        this.setFrame(r[1]);
                    }else if(!this.inactivo){    
                        r=aniBrakeBlock(this.getFrame2());
                        this.img.src=r[0];
                        this.setFrame2(r[1]);
                        this.setX(this.x-120);
                        this.setY(this.y-24);
                        if(r[1]==1000){
                            this.setInactivo(true);
                            this.setStatus(false);
                            this.img.src="";
                        }
                    }                    
                }else
                if(o==2){
                    if(!this.accion){
                        r=aniBox(this.getFrame());
                        this.img.src=r[0];
                        this.setFrame(r[1]); 
                    }else{
                       if(this.status){    
                            r=aniCoinBox(this.getFrame2());
                            this.img.src=r[0];
                            this.setFrame2(r[1]);
                            this.setX(this.x-2);
                            this.setY(this.y-72);
                            if(r[1]==1000){
                                this.setStatus(false);
                                //this.img.src="imagenes/boxEmptyAi.png";
                            } 
                        }else{
                            this.img.src="imagenes/boxEmpty.png";
                        } 
                    }     
                }else{
                    this.img.src=otras(o);
                }
            }
        }    
        this.getSrc(); 
        
        this.getX=()=>{
            return this.x-caminata;
        };
        this.getY=()=>{
            return this.y;
        }
        this.getAlt=()=>{
            return this.alt=this.getY()+24;
        }
        this.getAnc=()=>{
            return this.anc=this.getX()+24;
        }
        this.pintar=()=>{
            if(o!==0||!this.inactivo){
                
                ctx2.drawImage(this.img,this.getX(),this.getY());
                this.setX((x*24));
                this.setY(y*24);
                this.getSrc();
            }
        }
    } 
}

//-----------------------------BackGraund----------------------//
class Bg{
    constructor(x,y,n){
        this.x=x;
        this.y=y;
        this.img=new Image();
        this.img.src="";
        this.getSrc=()=>{
            if(n==0){
                this.img.src="imagenes/bg/bg 1-1-2.png";
            }else{
                this.img.src="imagenes/bg/bg-1-1.png";
            }
        }
        this.getSrc();
        this.getX=()=>{
            if(n==0){
                return this.x-(caminata/5);
            }else{
                return this.x-(caminata/2);
            }
            
        }
        this.getY=()=>{
            return this.y;
        }
        this.pintar=()=>{
            ctx.drawImage(this.img,this.getX(),this.getY());
            this.getSrc();
        }
    }
}
//----------------------------------Heroe----------------------//
class Heroe{
    constructor(x,y,e){
        this.x=x;
        this.y=y;
        this.img=new Image();
        this.img.src="";
        this.frame=0;
        this.frameCaida=0;
        this.caminar=true;
        this.parado=true;
        this.caida=false;
        this.derecha=true;
        this.saltar=false;
        this.frameSal=0;
        this.setCaminar=(c)=>{
            this.caminar=c;
        }
        this.setSaltar=(s)=>{
            this.saltar=s;
        }
        this.setDerecha=(d)=>{
            this.derecha=d;
        }
        this.sumarX=(s)=>{
            this.x+=s;
        }
        this.restarX=(s)=>{
            this.x-=s;
        }
        this.setY=(a)=>{
            this.y=a;
        }
        this.setParado=(p)=>{
            this.parado=p;
        }
        this.setCaida=(c)=>{
            this.caida=c;
        }
        this.frame2=0;
        this.getSrc=()=>{
            let r=[];let s=12;
            if(this.saltar){
                this.frameCaida=0;
                r=marioSalta(this.frameSal,this.derecha);
                this.img.src=r[0];
                this.frameSal=r[1];
                
                    this.y-=s;
                   
               
               /* if(this.frameSal==1000){
                    this.saltar=false;
                    this.caida=true;
                }*/
            }else if(this.caida){
                this.frameSal=0;
                r=marioCaida(this.frameCaida,this.derecha);
                    this.img.src=r[0];
                    this.frameCaida=r[1];                
                if(s<29){
                    this.y+=s;
                    s+=15;
                }else{
                    this.y+=30;
                }
            }else{
                this.frameCaida=0;
                if(this.parado){
                    this.frame2=0;
                    r=marioParado(this.frame,this.derecha);
                    this.img.src=r[0];
                    this.setFrame=r[1];
                }else{
                    this.frame=0;
                    if(this.caminar){
                        r=marioCamina(this.frame2,this.derecha);
                        this.img.src=r[0];
                        this.frame2=r[1];
                    }else{
                        r=marioCorre(this.frame2,this.derecha);
                        this.img.src=r[0];
                        this.frame2=r[1];
                    }
                }
            }
        }
        this.getAlt=()=>{
            return (this.getY()+31);
        }
        this.getAnc=()=>{
            return (this.getX()+24);
        }
        this.getSrc();
        this.getX=()=>{
                return this.x;
        }
        this.getY=()=>{
            return this.y;
        }
        this.pintar=()=>{
                ctx2.drawImage(this.img,this.getX(),this.getY());
            this.getSrc();
        }
    }
}

//-----------------------cargar----------------------------//
var cuerpo=[];
for(let y=0;y<bloques.length;y++){
    cuerpo[y]=[];
    for(let x=0;x<bloques[y].length;x++){
        cuerpo[y][x]=new Box(x,y,bloques[y][x]);
    }
}
var bg = [new Bg(0,0,0),new Bg(0,0,1)];
var mario =new Heroe(72,(360-152),"M");//(360-78)

//mario.setCaida(true);
var act=true;
var act1=true;
//---------------------------------Dibujar--------------------------//
async function dibujar(){
    if(buttonD){
        descrementar=false;
        avanzaI=true;
        derecha=true;
        aumentar=true;
        frenar=false;
        if(!saltar){
            mario.setCaida(true);       
        }
    }
    if(buttonI){
        derecha=false;
        aumentar=false;
        descrementar=true;
        frenar=false;
        if(!saltar){
            mario.setCaida(true); 
        }
    }
    if(aumentar||descrementar){
        mario.setCaida(true);
        pared=false;
    }
    
    for(let y=0;y<cuerpo.length;y++){
        for(let x=0;x<cuerpo[y].length;x++){
            cuerpo[y][x].pintar();
            if(!cuerpo[y][x].inactivo){
                let A =mario;
                let B = cuerpo[y][x];
                 if(saltar){
                    if((A.getAnc()-3>B.getX()&&A.getX()+10<B.getAnc()||(A.getX()+3<B.getAnc()&&A.getAnc()-10>B.getAnc()))){                            
                        if(A.getAlt()-17>B.getAlt()&&A.getY()+1<B.getAlt()){
                          saltar=false;mario.setSaltar(false); cuerpo[y][x].setAccion();mario.setCaida(true);
                        }
                    }
                 }
                if(derecha){//parar corrida 
                    if(A.getAnc()+8>B.getX()&&A.getX()+10<B.getX()){
                        if(A.getY()-7>B.getY()&&A.getY()-7<B.getAlt()||A.getAlt()-3<B.getAlt()&&A.getAlt()-3>B.getY()){
                            aumentar=false;pared=true;
                        }
                    }
                }else{/*/parar corrida/*/
                     if(A.getX()-8<B.getAnc()&&A.getAnc()-10>B.getX()){
                        if(A.getY()-7>B.getY()&&A.getY()-7<B.getAlt()||A.getAlt()-3<B.getAlt()&&A.getAlt()-3>B.getY()){
                            descrementar=false; pared=true;
                            
                        }
                     }
                   
                }
                if(mario.caida||!pared){//parar de caer
                    if((A.getAnc()-3>B.getX()&&A.getX()+10<B.getAnc()||(A.getX()+3<B.getAnc()&&A.getAnc()-10>B.getAnc()))){                            
                        if(A.getAlt()>B.getY()-3&&(A.getY()+10)<B.getY()){
                            mario.setCaida(false);mario.setY(B.getY()-30);
                        }      
                }
            }
               
                
            } 
        }
    }
   
    if(aumentar){//&&avanza

        mario.setDerecha(true);
        mario.setParado(false);
        if(mario.getX()<195){
            if(caminar){mario.setCaminar(true);
                if(camMax<8){
                    mario.sumarX(camMax);
                    if(!frenar){
                        camMax+=2;
                    }
                }else{
                    if(!frenar){
                    camMax=8;
                    }
                    mario.sumarX(camMax);
                }
            }else{mario.setCaminar(false);
                if(camMax<=12){
                    mario.sumarX(camMax);
                    if(!frenar){
                    camMax+=2;
                    }
                }else{
                    mario.sumarX(camMax);
                }
            }
        }else{
            if(caminar){mario.setCaminar(true);
                if(camMax<8){
                    caminata+=camMax;
                    if(!frenar){
                    camMax+=2;
                    }
                }else{
                    if(!frenar){
                    camMax=8
                    }
                   caminata+=camMax;
                }
            }else{mario.setCaminar(false);
                if(camMax<12){
                    caminata+=camMax;
                    if(!frenar){
                    camMax+=2;
                    }
                }else{
                    if(!frenar){
                    camMax=12;
                    }
                    caminata+=camMax;
                }
            }
        }
    }
    
    if(descrementar){//&&avanzaI
        mario.setDerecha(false);
        mario.setParado(false);
        if(caminata>0){
            if(caminar){mario.setCaminar(true);
                if(camMax<8){
                    caminata-=camMax;
                    if(!frenar){
                    camMax+=2;
                    }
                }else{
                    if(!frenar){
                    camMax=8
                    }
                   caminata-=camMax;
                }
            }else{mario.setCaminar(false);
                if(camMax<12){
                    caminata-=camMax;
                    if(!frenar){
                    camMax+=2;
                    }
                }else{
                    if(!frenar){
                    camMax=12;
                    }
                    caminata-=camMax;
                }
            }
        }else{
            if(mario.getX()>1){
                if(caminar){mario.setCaminar(true);
                    if(camMax<8){
                        mario.restarX(camMax);
                        if(!frenar){
                        camMax+=2;
                        }
                    }else{
                        if(!frenar){
                        camMax=8;
                        }
                        mario.restarX(camMax);
                    }
                }else{mario.setCaminar(false);
                    if(camMax<=10){
                        mario.restarX(camMax);
                        if(!frenar){
                        camMax+=2;
                        }
                    }else{
                        mario.restarX(camMax);
                    }
                }
            }
        }
        
    }
    if(saltar){

       if(salto<9){
           mario.setSaltar(true);
           salto++;
       }else{
           mario.setSaltar(false);
           mario.setCaida(true);
           saltar=false;salto=0;
       }
    }
    if(frenar){
        
        if(camMax<1){
            mario.setParado(true);
            frenar=false;camMax=0;
            descrementar=false;
            aumentar=false;
        }else{
            camMax--;
            
        }
    }
    mario.pintar();
     ctx.clearRect(0,0,552,360);
    for(let i =0;i<bg.length;i++){
         bg[i].pintar();
     }
     ctx.drawImage(canvitas,0,0);
    ctx2.clearRect(0,0,552,360);  
}
console.log("EXITO");
setInterval(dibujar,80);