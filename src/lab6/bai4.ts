function Log3(target: any, name: string|symbol, decorator:PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(decorator);
}

class Product2{
    title:string;
    private _price:number;
    set price(val:number){}
    constructor(t:string,p:number){
        this.title=t;
        this._price= p;
    }
    @Log3
    getPriceWithTax(){}
}