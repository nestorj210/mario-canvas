//--------------------------Canvas----------------------//
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canvita = document.getElementById("canvitas");
var ctx2= canvitas.getContext("2d");
var player = document.getElementById("player");
var ctxP = player.getContext("2d");
//------------------------------------------------------//
var aCaida = document.getElementById("caida");
var audioMundo = document.getElementById("aworld");

function startPlay(){
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle="DD0000";
    ctx.fillText("PRESIONE BARRA ESPACIADORA PARA COMENZAR",20,175);
    ctx.closePath();
}
var start=false;
var Y=0;
var X =0;
var pared=false;
var cccc =72;
var correr=false;
var saltar=false;
var camMax=2;
var salto=false;
var frenar=true;
var z=1;
var inv=false;
var caminata=0;
var p =0;
var buttonD=false;
var buttonI=false;
var aumentar=false;
var descrementar=false;
var buttonS=false;
var buttonC=false;
//---------------------controles----------------------------//
document.addEventListener("keydown",controlDown);


function controlDown(e){
    if(e.keyCode==38){//arriba
        
    }
    if(e.keyCode==40){//abajo
      console.log(t1-t2); 
      console.log(cccc+caminata+4,mario.getY());
      console.log(X,Y);
      e.preventDefault() ;
    }
    if(e.keyCode==37){//izquierda
        buttonI=true;
        buttonD=false;
       z=-1;
    }else 
    if(e.keyCode==39){//derecha
        buttonD=true;
        buttonI=false;
        z=1;
    }
    if(e.keyCode==83){//s
        correr=true;
    }
    if(e.keyCode==83){//s
        buttonS=true;
    }
    if(e.keyCode==67){//c
        buttonC=true;
    }
    if(e.keyCode==32){//Barra espaciadora
        start=true;audioMundo.play();e.preventDefault() ;
        
    }
console.log(e.keyCode);
}
document.addEventListener("keyup",controlUp);
function controlUp(e){
    if(e.keyCode==39){
        frenar=true;
        buttonD=false;
    }
    if(e.keyCode==37){
        frenar=true;
        buttonI=false;
    }
    if(e.keyCode==83){//s
        buttonS=false;
    }
    if(e.keyCode==67){//c
        buttonC=false;
    }
}
//--------------------------------------------------------------//
var t2= 0;
var t1= 0;
var tiempo =0;


const bgP1 = new Bg(0,0,0);
const bgP2 = new Bg(0,0,1);
const mario = new Heroe(4,282,"M");





//ciclo//

function draw(){
if(start){
    if(buttonS){
        if(buttonD||buttonI){
            caminar=false;
        }
    }else{
        correr=false;
        caminar=true;
    }
    if(buttonC){
        if(!saltar&&!mario.getCaida()){
            saltar=true;
        }
    }
    if(buttonD){
        descrementar=false;
        derecha=true;
        aumentar=true;
        frenar=false;
       mario.setParado(false);
    }
    if(buttonI){
        derecha=false;
        aumentar=false;
        descrementar=true;
        frenar=false;

    }
    if(correr){
        mario.setCaminar(false)
    }else{
        mario.setCaminar(true)
    }
    if(aumentar||descrementar){
        mario.setCaida(true);
        pared=false;
    }
    if(frenar){
        mario.setParado(true);
    }

    t2=Date.now();

    ctx2.clearRect(0,0,552,360);
    bgP2.pintar(ctx2,caminata/4,0);
    bgP1.pintar(ctx2,caminata/2,0);
    for(let y=0;y<cuerpo.length;y++){
        for(let x=0;x<cuerpo[y].length;x++){
            
            //-----------------collide objet------------------//
            if(!cuerpo[y][x].inactivo){per[y][x]=true;
                let Ax =cccc+4;
                let Ay = mario.getY();
                let Aanc = Ax+mario.getAnc();
                let Aalt = mario.getAlt();
                let B = cuerpo[y][x];
                let Bx = B.getX()-caminata;
                let By = B.getY();
                let Banc = Bx+B.getAnc();
                let Balt = B.getAlt();
               if(saltar){
                   if(B.getCollideDw()){
                      if(((Aanc-4>Bx&&Aanc-3<=Banc)||(Ax+4<Banc&&Ax+3>=Bx))){
                            if(Ay<Balt&&Ay>By){
                                mario.setSaltar(false);saltar=false;salto=0;
                                mario.setCaida(true);mario.setY(B.getY()+22);
                                cuerpo[y][x].setAccion(true);aTope.play();  
                            }
                        } 
                   }
                    
                 }
               
                if(aumentar){//parar corrida 
                    if(B.getCollideL()){
                        if(Aanc+6>Bx&&Ax+30<Banc){
                            if(Aalt<Balt&&Aalt-5>By||Ay+2>By&&Ay<Balt){
                                
                                if(Aanc+6-Bx>9){
                                    caminata--;
                                }
                                aumentar=false;pared=true;
                            }
                        }
                    }
                  }else{//parar corrida 
                    if(B.getCollideR()){
                        if(Ax-6<Banc&&Aanc-30>Bx){
                            if(Aalt<Balt&&Aalt-5>By||Ay+2>By&&Ay<Balt){
                                Y=Banc;X=Ax-6;
                                if(Ax-6-Banc<-8){
                                    caminata++;
                                }
                               descrementar=false;pared=true;
                            }
                        }
                    }
                  }
                if(mario.getCaida()||!pared){//parar de caer
                    if(B.getCollideUp()){
                        if(((Aanc-6>Bx&&Aanc-3<=Banc)||(Ax+6<Banc&&Ax+3>=Bx))){                           
                           if(Aalt+3>By&&Aalt<Balt){
                              if(mario.getCaida()){aCaida.play(); };mario.setCaida(false);   mario.setY(By-30);
                           }      
                         }
                    }
                    
                }  
            } 
            
            //------------------------------------------------//
        }
    }
    for(let y=0;y<cuerpo.length;y++){
        for(let x=0;x<cuerpo[y].length;x++){
            if(per[y][x]){
                cuerpo[y][x].pintar(ctx2,caminata,0);
            }
        }
    }
    //-----pintar a mario----//
    ctxP.clearRect(0,0,30,48);
        if(z<0){p=30;
            if(!inv){
                ctxP.scale(-1,1);
                inv=true;
                mario.setX(-30);
            }
           ctxP.clearRect(0,0,-552,360); 
        }else if(z>0){p=0;
            if(inv){
                ctxP.scale(-1,1);
                inv=false;
                mario.setX(3);
            }ctxP.clearRect(0,0,552,360);
        }
         
       //-----------------------//
       if(aumentar){//&&avanza
        mario.setParado(false);
        if(cccc<195){
            if(caminar){mario.setCaminar(true);if(!saltar&&!mario.getCaida()){aCaminar.play();console.log("aqui")};stopMusic(aCorrer);
                if(camMax<8){
                   cccc+=camMax;
                    if(!frenar){
                        camMax+=2;
                    }
                }else{
                    if(!frenar){
                        camMax=8;
                    }
                    cccc+=camMax;
                }
            }else{mario.setCaminar(false);if(!saltar&&!mario.getCaida()){aCorrer.play()};stopMusic(aCaminar);
                if(camMax<=12){
                    cccc+=camMax;
                    if(!frenar){
                        camMax+=2;
                    }
                }else{
                    cccc+=camMax;
                }
            }
        }else{
            if(caminar){mario.setCaminar(true);if(!saltar&&!mario.getCaida()){aCaminar.play();};stopMusic(aCorrer);
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
            }else{mario.setCaminar(false);if(!saltar&&!mario.getCaida()){aCorrer.play()};stopMusic(aCaminar);
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

      
        mario.setParado(false);
        if(caminata>0){
            if(caminar){mario.setCaminar(true);if(!saltar&&!mario.getCaida()){aCaminar.play()};stopMusic(aCorrer);
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
            }else{mario.setCaminar(false);if(!saltar&&!mario.getCaida()){aCorrer.play()};stopMusic(aCaminar);
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
            if(cccc>1){
                if(caminar){mario.setCaminar(true);if(!saltar&&!mario.getCaida()){aCaminar.play()};stopMusic(aCorrer);
                    if(camMax<8){
                        cccc-=camMax;
                        if(!frenar){
                            camMax+=2;
                        }
                    }else{
                        if(!frenar){
                            camMax=8;
                        }
                        cccc-=camMax;
                    }
                }else{mario.setCaminar(false);if(!saltar&&!mario.getCaida()){aCorrer.play()};stopMusic(aCaminar)
                    if(camMax<=10){
                        cccc-=camMax;
                        if(!frenar){
                            camMax+=2;
                        }
                    }else{
                        cccc-=camMax;
                    }
                }
            }
        }
        
    }
    if(saltar){//stopMusic(aCaminar);stopMusic(aCorrer);
       if(salto<8){
           mario.setSaltar(true);
           salto++;
       }else{
           mario.setSaltar(false);
           mario.setCaida(true);
           saltar=false;salto=0;
       }
    }
    if(frenar){
        
        if(camMax<1){//stopMusic(aCaminar);stopMusic(aCorrer);
            mario.setParado(true);
            frenar=false;camMax=0;
            descrementar=false;
            aumentar=false;
        }else{
            camMax-=1;
        }
    }

    //fin  
    mario.pintar(ctxP);
    ctx2.drawImage(player,cccc,0);  
    ctx.clearRect(0,0,552,360);
    ctx.drawImage(canvitas,0,0);
    t1=Date.now();
    tiempo=t1-t2; 

}else{
    startPlay()
}   
    

}


setInterval(draw,80);
function stopMusic(a){
    a.pause();
    a.currentTime=0;
}
