var pipeLeftUp = document.getElementById("pipeLeftUp");
var pipeRithUp = document.getElementById("pipeRithUp");
var pipeLeftDn = document.getElementById("pipeLeftDn");
var pipeRithDn = document.getElementById("pipeRithDn");
var grama1 = document.getElementById("grama1");
var grama2 = document.getElementById("grama2");
var grama3 = document.getElementById("grama3");
var grama4 = document.getElementById("grama4");
var gramaLeft = document.getElementById("gramaLeft");
var gramaRith = document.getElementById("gramaRith");
var arenaLeft = document.getElementById("arenaLeft");
var arenaRith = document.getElementById("arenaRith");
var arena1 = document.getElementById("arena1");
var arena2 = document.getElementById("arena2");

var block1 = document.getElementById("block1");
var block2 = document.getElementById("block2");
var block3 = document.getElementById("block3");
var block4 = document.getElementById("block4");
var block5 = document.getElementById("block5");
var block6 = document.getElementById("block6");
var block7 = document.getElementById("block7");

var brakeBlock1 = document.getElementById("brakeBlock-1");
var brakeBlock2 = document.getElementById("brakeBlock-2");
var brakeBlock3 = document.getElementById("brakeBlock-3");
var brakeBlock4 = document.getElementById("brakeBlock-4");
var brakeBlock5 = document.getElementById("brakeBlock-5");
var brakeBlock6 = document.getElementById("brakeBlock-6");
var brakeBlock7 = document.getElementById("brakeBlock-7");
var brakeBlock8 = document.getElementById("brakeBlock-8");
var brakeBlock9 = document.getElementById("brakeBlock-9");
var brakeBlock10 = document.getElementById("brakeBlock-10");
var brakeBlock11= document.getElementById("brakeBlock-11");
var brakeBlock12 = document.getElementById("brakeBlock-12");

var boxCoin1 = document.getElementById("boxCoin1");
var boxCoin2 = document.getElementById("boxCoin2");
var boxCoin3= document.getElementById("boxCoin3");
var boxCoin4 = document.getElementById("boxCoin4");
var boxCoin5 = document.getElementById("boxCoin5");
var boxCoin6 = document.getElementById("boxCoin6");
var boxCoin7 = document.getElementById("boxCoin7");
var boxCoin8 = document.getElementById("boxCoin8");
var boxCoin9 = document.getElementById("boxCoin9");
var boxCoin10 = document.getElementById("boxCoin10");
var boxCoin11 = document.getElementById("boxCoin11");
var boxCoin12 = document.getElementById("boxCoin12");
var boxCoin13 = document.getElementById("boxCoin13");
var boxCoin14 = document.getElementById("boxCoin14");
var boxCoin15 = document.getElementById("boxCoin15");
var boxCoin16 = document.getElementById("boxCoin16");
var boxCoin17 = document.getElementById("boxCoin17");
var boxCoin18 = document.getElementById("boxCoin18");

var boxEmpty=document.getElementById("boxEmpty");

 var coinBox1 =document.getElementById("coinBox1")
 var coinBox2 =document.getElementById("coinBox2")
 var coinBox3 =document.getElementById("coinBox3")
 var coinBox4 =document.getElementById("coinBox4")
 var coinBox5 =document.getElementById("coinBox5")
 var coinBox6 =document.getElementById("coinBox6")
 var coinBox7 =document.getElementById("coinBox7")
//------------------------sonidos-------------------------------------//
var aMonedBox = document.getElementById("moneda");
var aTope = document.getElementById("tope");
var aBrack = document.getElementById("brackBlock");
//------------------------animaciones-------------------------//


function aniCoinBox(conCoinBox){
    
    if(conCoinBox==0){
        return [coinBox1,1];
    }else if(conCoinBox==1){
        return [coinBox2,2];
    }else if(conCoinBox==2){
       return [coinBox3,3];
    }else if(conCoinBox==3){
        return [coinBox4,4];
    }else if(conCoinBox==4){
        return [coinBox5,5];
    }else if(conCoinBox==5){
        return [coinBox6,6];
    }else if(conCoinBox==6){
        return [coinBox7,1000];
    }
}

function aniBox(conCoin){
if(conCoin==0){
    return [boxCoin1,1];
}else if(conCoin==1){
    return [boxCoin2,2];
}else if(conCoin==2){
    return [boxCoin3,3];
}else if(conCoin==3){
    return [boxCoin4,4];
}else if(conCoin==4){
    return [boxCoin5,5];
}else if(conCoin==5){
    return [boxCoin6,6];
}else if(conCoin==6){
    return [boxCoin7,7];
}else if(conCoin==7){
    return [boxCoin8,8];
}else if(conCoin==8){
    return [boxCoin9,9];
}else if(conCoin==9){
    return [boxCoin10,10];
}else if(conCoin==10){
    return [boxCoin11,11];
}else if(conCoin==11){
    return [boxCoin12,12];
}else if(conCoin==12){
    return [boxCoin13,13];
}else if(conCoin==13){
    return [boxCoin14,14];
}else if(conCoin==14){
    return [boxCoin15,15];
}else if(conCoin==15){
    return [boxCoin16,16];
}else if(conCoin==16){
    return [boxCoin17,17];
}else if(conCoin==17){
    return [boxCoin18,0];
}

}

function aniBlock(conBlock){
if(conBlock==0){
    return [block1,1];
}else if(conBlock==1){
    return [block2,2];
}else if(conBlock==2){
    return [block3,3];
}else if(conBlock==3){
    return [block4,4];
}else if(conBlock==4){
    return [block5,5];
}else if(conBlock==5){
    return [block6,6];
}else if(conBlock==6){
    return [block7,7];
}else if(conBlock==7){
    return [block1,8];
}else if(conBlock==8){
    return [block1,9];
}else if(conBlock==9){
    return [block1,10];
}else if(conBlock==10){
    return [block1,11];
}else if(conBlock==11){
    return [block1,12];
}else if(conBlock==12){
    return [block1,13];
}else if(conBlock==13){
    return [block1,14];
}else if(conBlock==14){
    return [block1,15];
}else if(conBlock==15){
    return [block1,16];
}else if(conBlock==16){
    return [block1,17];
}else if(conBlock==17){
    return [block1,18];
}else if(conBlock==18){
    return [block1,19];
}else if(conBlock==19){
    return [block1,0];
}
}

function otras(b){
if(b==3){
    return pipeLeftUp
}else if(b==4){
    return pipeRithUp
}else if(b==5){
    return pipeLeftDn
}else if(b==6){
    return pipeRithDn
}else if(b==7){
    return grama1
}else if(b==8){
    return grama2
}else if(b==9){
    return grama3
}else if(b==10){
    return grama4
}else if(b==11){
    return gramaLeft
}else if(b==12){
    return gramaRith
}else if(b==13){
    return arenaLeft
}else if(b==14){
    return arenaRith
}else if(b==15){
    return arena1
}else if(b==16){
    return arena2
}
}

function aniBrakeBlock(conBrake){
if(conBrake==0){
    return [brakeBlock1,1];
}else if(conBrake==1){
    return [brakeBlock2,2];
}else if(conBrake==2){
    return [brakeBlock3,3];
}else if(conBrake==3){
    return [brakeBlock4,4];
}else if(conBrake==4){
    return [brakeBlock5,5];
}else if(conBrake==5){
    return [brakeBlock6,6];
}else if(conBrake==6){
    return [brakeBlock7,7];
}else if(conBrake==7){
    return [brakeBlock8,8];
}else if(conBrake==8){
    return [brakeBlock9,9];
}else if(conBrake==9){
    return [brakeBlock10,10];
}else if(conBrake==10){
    return [brakeBlock11,11];
}else if(conBrake==11){
    return [brakeBlock12,1000];
}
}

//---------------------------------Objetos-------------------// 
class Box{
    constructor(a,b,o){
        let img= new Image();
        let config = true;
        let frame=0;
        let frame2=0;
        let anc=24;
        let alt=24;
        let x=a*anc;
        let y=b*alt;
        let e=0;
        let f=0;
        let status=true;
        let inactivo=true;
        let accion=false;
        let collideUp=false;
        let collideDw=false;
        let collideL=false;
        let collideR=false;
        let collindeAll=(set)=>{
            collideUp=set;
            collideDw=set;
            collideL=set;
            collideR=set;
        }
        if(o!==0){
            status=true;
            inactivo=false; 
        }
        this.setAccion=(set)=>{
            accion=set;
        }
        let getImg=()=>{
            let r=[];
            if(o!==0){
                if(o==1){if(config){collindeAll(true)}
                    if(!accion){
                        r=aniBlock(frame);
                        img=r[0];
                        frame=r[1];
                    }else if(!inactivo){if(frame2==0){aTope.play();aBrack.play();}   
                        if(frame2==0){
                            x=x-120;
                            y=y-24;
                        } 
                        r=aniBrakeBlock(frame2);
                        img=r[0];
                        frame2=r[1];
                        if(r[1]==1000){
                            inactivo=true;
                            status=false;
                            collideUp=false;
                            collideDw=false;
                            collideL=false;
                            collideR=false;
                        }
                    }                    
                }else
                if(o==2){if(config){collindeAll(true)}
                    if(!accion){
                        r=aniBox(frame);
                        img=r[0];
                        frame=r[1]; 
                    }else{if(frame2==0){aMonedBox.play();}
                       if(status){ 
                            if(frame2==0){
                                x=x-2;
                                y=y-72;
                            }
                            r=aniCoinBox(frame2);
                            img=r[0];
                            frame2=r[1];
                            
                            if(r[1]==1000){
                                status=false;
                            } 
                        }else{
                            img=boxEmpty;
                        } 
                    }     
                }else{if(config){collindeAll(true)}
                    img=otras(o);
                }
            }
        }    
        getImg();
        this.getCollideUp=()=>{
            return collideUp;
        }
        this.getCollideDw=()=>{
            return collideDw;
        }
        this.getCollideL=()=>{
            return collideL;
        }
        this.getCollideR=()=>{
            return collideR;
        }
        this.getInactivo=()=>{
            return inactivo;
        }
        this.getX=()=>{
            return x;
        }
        this.getY=()=>{
            return y;
        }
        this.getAnc=()=>{
            return anc;
        }
        this.getAlt=()=>{
            return y+alt;
        }
        this.pintar=(ctx,c,d)=>{
            if(o!==0||!inactivo){ 
                e=x-c;
                f=y-d; 
                ctx.drawImage(img,e,f);
                if(!status){
                    x=a*anc;y=b*alt;
                }
                getImg();
            }
        }
        config=false;
    }
}