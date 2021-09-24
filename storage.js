export default class Storage{
    constructor(){
        this._storage = new Array();
    }

    add(product){
        if(this._exists(product) == true){
            return(false);
        }
        this._storage.push(product);
        return(true);
    }

    _exists(product){
        let aux = false;
        this._storage.forEach((p) =>{
            if(p.getId() == product.getId()){
                aux = true;
            }
        });
        return(aux);
    }

}