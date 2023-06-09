// util
/**
 * get a lilst of asste and load them
 * @param [string] list, name of the asset
 * @param string baseurl, base url of the asset
 * @param string media , type of the asset
 */

function loadImg (obj){
      console.log('loading img... ');
            for(let i=0;i<obj.lista.length;i++) {
                if(obj.t == "img") {
                    let img = new Image();
                    img.src = obj.baseurl + "/" + obj.lista[i].f;
                    img.id =  obj.lista[i].id;

                    img.onload = function() {
                        console.log('loaded ' + obj.lista[i].f);
                    }

                    document.body.appendChild(img);
                }
            }
       
}   
 
