//list of file  to load
// puedes usar esta funcion para limpiar el html de las imagenes cargadas
const bg = {
    baseurl: "imagenes/bg",
    t: "img",
    lista : [{f:"bg-1-1.png",id:"bg1"},{f:"bg-1-1-b.png",id:"bg1b"},{f:"bg-1-1-c.png",id:"bg1c"},{f:"bg 1-1-2.png",id:"bg2"}]
};
// la magia aqui 
//TODO : tratar the cargar las imagenes async 
loadImg(bg);

var bg1 = document.getElementById("bg1");
var bg1b = document.getElementById("bg1b");
var bg1c = document.getElementById("bg1c");
var bg2 = document.getElementById("bg2");

//-----------------------------BackGraund----------------------//
class Bg{
    constructor(a,b,n){
        let con=0;
        let x=a;
        let y=b;
        let e=0;
        let f=0
        let img= new Image();
        this.getSrc=()=>{
            if(n==0){
                if(con==0){
                    img=bg1;
                }else if(con==1){
                    img=bg1b;
                }else{
                    img=bg1c;
                    con=-1;
                }
               return img;
            }else{
                return img=bg2;;
            }
        }
        this.pintar=(ctx,c,d)=>{con++;
                e=x-c;
                f=y-d;                
                ctx.drawImage(img,e,f);
                this.getSrc();
        }
    }
}  

