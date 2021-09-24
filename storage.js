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

    search(id){
        let pos = this._storage.findIndex( (p) => {
            if(p.getId() == id){
                return(true);
            }else {
                return(false);
            }
        });
        if(pos >= 0){
            return(`El producto con codigo ${this._storage[pos].getId()} encontrado fue:  [${this._storage[pos].getQuantity()} unidades de ${this._storage[pos].getName()} a ${this._storage[pos].getPrice()} c/u]`);
        }
        return(`No se encontro el producto buscado`);
    }

    _exists(id){ // Funcion para que al añadir revise que no haya un producto con mismo ID
        let aux = false;
        this._storage.forEach((p) =>{
            if(p.getId() == id){
                aux = true;
            }
        });
        return(aux);
    }

}