export default class Product{
    constructor(id,name,quantity,price){
        this._id = id;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
    }

    getId(){
        return(this._id);
    }

    getName(){
        return(this._name);
    }

    getQuantity(){
        return(this._quantity);
    }

    getPrice(){
        return(this._price);
    }

    getTotal(){
        let total = this._quantity * this._price;
        return(total);
    }
}