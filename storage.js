export default class Storage{
    constructor(){
        this._storage = new Array();
    }

    add(product){
        if(this._exists(product.getId()) == true){
            return(false);
        }
        this._storage.push(product);
        this._sortStorage();
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
        return(null);
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

    showAll(){
        let text = "Los productos en la lista son: <br>";
        let total = 0;
        this._storage.forEach((p) => {
            text = text + `[Codigo ${p.getId()}: ${p.getName()} ${p.getQuantity()} unidades, $${p.getPrice()} C/U] <br>`
            total += p.getTotal();
        });
        text += `Total = $ ${total}`;
        return(text);
    }

    showAllInv(){
        let text = "Los productos en la lista invertida son: <br>";
        let total = 0;
        this._storage.reverse().forEach((p) => {
            text = text + `[Codigo ${p.getId()}: ${p.getName()} ${p.getQuantity()} unidades, $${p.getPrice()} C/U] <br>`
            total += p.getTotal();
        });
        text += `Total = $ ${total}`;
        this._storage.reverse();
        return(text);
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

    _sortStorage(){
        if(this._storage.length >= 2){
            for(let i = 1; i<this._storage.length; i++){
                for(let j = this._storage.length-1; j>=i;j--){
                    console.log(this._storage[j-1]);
                    if(this._storage[j-1].getId() > this._storage[j].getId()){
                        let aux = this._storage[j-1];
                        this._storage[j-1] = this._storage[j];
                        this._storage[j] = aux;
                    }
                }
            }
        }
    }

}