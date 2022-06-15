
var mpp1 = document.getElementById("mpp1");
var mpp1 = document.getElementById("mpp1");
var mpp1 = document.getElementById("mpp1");
var mpp1 = document.getElementById("mpp1");
var mpp1 = document.getElementById("mpp1");
var mpp1 = document.getElementById("mpp1");
var mpp1 = document.getElementById("mpp1");
var mpp1 = document.getElementById("mpp1");

var mpc1 = document.getElementById("mpc1");
var mpc2 = document.getElementById("mpc2");
var mpc3 = document.getElementById("mpc3");
var mpc4 = document.getElementById("mpc4");
var mpc5 = document.getElementById("mpc5");
var mpc6 = document.getElementById("mpc6");
var mpc7 = document.getElementById("mpc7");
var mpc8 = document.getElementById("mpc8");
var mpc9 = document.getElementById("mpc9");

var mpcr1=document.getElementById("mpcr1");
var mpcr2=document.getElementById("mpcr2");
var mpcr3=document.getElementById("mpcr3");
var mpcr4=document.getElementById("mpcr4");
var mpcr5=document.getElementById("mpcr5");
var mpcr6=document.getElementById("mpcr6");
var mpcr7=document.getElementById("mpcr7");
var mpcr8=document.getElementById("mpcr8");
var mpcr9=document.getElementById("mpcr9");

var mpb2 =document.getElementById("mpb2");
var mpb3 = document.getElementById("mpb3");
var mpb4 =document.getElementById("mpb4");

var mps1=document.getElementById("mps1");
var mps2=document.getElementById("mps2");
var mps3=document.getElementById("mps3");


var aCorrer = document.getElementById("correr");
var aCaminar = document.getElementById("caminar");
var aSaltar = document.getElementById("saltar");


function marioParado(conParado){
    
        if(conParado==0){
            return [mpp1,1];
        }else if(conParado==1){
            return [mpp1,2];        
        }else if(conParado==2){
            return [mpp2,3];        
        }else if(conParado==3){
            return [mpp2,4];        
        }else if(conParado==4){
            return [mpp3,5];    
        }else if(conParado==5){
            return [mpp3,6];        
        }else if(conParado==6){
            return [mpp4,7];        
        }else if(conParado==7){
            return [mpp4,8];        
        }else if(conParado==8){
            return [mpp5,9];        
        }else if(conParado==9){
            return [mpp5,10];        
        }else if(conParado==10){
            return [mpp6,11];        
        }else if(conParado==11){
            return [mpp6,12];        
        }else if(conParado==12){
            return [mpp7,13];        
        }else if(conParado==13){
            return [mpp7,14];        
        }else if(conParado==14){
            return [mpp8,15];        
        }else if(conParado==15){
            return [mpp8,0];        
        }
}

function marioCamina(c){

        if(c==0){
            return [mpc1,1];
        }else if(c==1){
            return [mpc2,2];
        }else if(c==2){
            return [mpc3,3];
        }else if(c==3){
            return [mpc4,4];
        }else if(c==4){
            return [mpc5,5];
        }else if(c==5){
            return [mpc6,6];
        }else if(c==6){
            return [mpc7,7];
        }else if(c==7){
            return [mpc8,8];
        }else if(c==8){
            return [mpc9,0];
        }
    
}
function marioCorre(c){
    if(c==0){
        return [mpcr1,1];
    }else if(c==1){
        return [mpcr2,2];
    }else if(c==2){
        return [mpcr3,3];        
    }else if(c==3){
        return [mpcr4,4];        
    }else if(c==4){
        return [mpcr5,5];        
    }else if(c==5){
        return [mpcr6,6];        
    }else if(c==6){
        return [mpcr7,7];        
    }else if(c==7){
        return [mpcr8,8];        
    }else if(c==8){
        return [mpcr9,0];   
    }
}

function marioCaida(c){
    if(c==0){
        return [mpb2,1];
    }else if(c==1){
        return [mpb2,2];
    }else if(c==2){
        return [mpb3,3];
    }else if(c==3){
        return [mpb3,4]; 
    }else if(c==4){
        return [mpb4,1000]; 
    }else if(c==1000){
        return [mpb4,1000]; 
    }

}

function marioSalta(c){
    
    if(c==0){
        return [mps1,1];
    }else if(c==1){
        return [mps2,2];
    }else if(c==2){
        return [mps3,1000];
    }else if(c==1000){
        return [mps3,1000];
    }

}



class Heroe{
    constructor(a,b,e){
        let x=a;
        let y=b;
        let g=0;
        let f=0;
        let img=new Image();
        let frame=0;
        let frameCaida=0;
        this.caminar=true;
        this.parado=true;
        let caida=false;
        this.derecha=true;
        this.saltar=false;
        let frameSal=0;
        let collideUp=true;
        let collideDw=true;
        let collideL=true;
        let collideR=true;
        let s=21;
        let cs=0;
        let cc=0;
        let sc=16;
        this.setCaminar=(set)=>{
            this.caminar=set;
        }
        this.setSaltar=(set)=>{
            this.saltar=set;
        }
        this.setY=(set)=>{
            y=set;
        }
        this.setX=(set)=>{
            x=set;
        }
        this.setParado=(set)=>{
            this.parado=set;
        }
        this.setCaida=(set)=>{
            caida=set;
        }
        
        let frame2=0;
        let getSrc=()=>{
            let r=[];
            if(this.saltar){sc=15,cc=0;if(frameSal==0){aSaltar.play()}
                frameCaida=0;
                r=marioSalta(frameSal);
                img=r[0];
                frameSal=r[1];
                if(cs==0){
                    y-=s;
                    cs++;
                }else if(cs<3){
                    s-=1;
                    y-=s;
                    cs++;
                }else if(cs<7){
                    s=15;
                    y-=s
                    cs++;
                }
            }else if(caida){
                frameSal=0;s=21,cs=0;
                r=marioCaida(frameCaida);
                    img=r[0];
                    frameCaida=r[1];                
                if(cc==0){
                    cc++;
                }else if(cc<3){
                    y+=s;
                    cc++;
                }else if(cc<5){
                    sc+=1;
                    y+=sc;
                    cc++;
                }else{
                    sc=21;
                    y+=sc;
                }
            }else{
                frameCaida=0;
                if(this.parado){
                    frame2=0;
                    r=marioParado(frame);
                   img=r[0];
                    frame=r[1];
                }else{
                    frame=0;
                    if(this.caminar){
                        r=marioCamina(frame2);
                        img=r[0];
                        frame2=r[1];
                    }else{
                        r=marioCorre(frame2);
                        img=r[0];
                        frame2=r[1];
                    }
                }
            }
        }
        getSrc();
        this.getCollindeUp=()=>{
            return collideUp
        }
        this.getCollindeDw=()=>{
            return collideDw;
        }
        this.getCollindeR=()=>{
            return collideR;
        }
        this.getCollindeL=()=>{
            return collideL;
        }
        this.getAlt=()=>{
            return (y+31);
        }
        this.getAnc=()=>{
            return (24);
        }
        this.getCaida=()=>{
            return caida;
        }
        this.getX=()=>{
                return x;
        }
        this.getY=()=>{
            return y;
        }
        this.pintar=(ctx)=>{
           
            ctx.drawImage(img,x,y);
            getSrc();
        }
    }
}