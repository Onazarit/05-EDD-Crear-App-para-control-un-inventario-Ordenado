export default class Storage{
    constructor(){
        this._storage = new Array();
    }

    add(product){
        if(this._exists(product.getId()) == true){
            return(false);
        }
        this._storage.push(product);
        return(true);
    }

    remove(id){
        let pos = this._storage.findIndex( (p) => {
            if(p.getId() == id){
                return(true);
            }else {
                return(false);
            }
        });
        if(pos >= 0){
            let text = `Se ha removido el producto [${this._storage[pos].getName()}] de la lista`;
            this._storage.splice(pos,1);
            return(text);
        }
        return(`No se encontro el producto a eliminar`);
    }

    _exists(id){
        let aux = false;
        this._storage.forEach((p) =>{
            if(p.getId() == id){
                aux = true;
            }
        });
        return(aux);
    }

}