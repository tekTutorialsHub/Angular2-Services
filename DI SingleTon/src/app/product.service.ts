
import {Product} from './Product'

export class ProductService{

    constructor(){
       console.log('Product Service initialised')
    } 

    public  getProducts() {

        console.log('getProducts Called');
  
        let products:Product[];

        products=[
            new Product(1,'Memory Card',500),
            new Product(1,'Pen Drive',750),
            new Product(1,'Power Bank',100)
        ]

        console.log('Products Retured');
        console.log(products);

        return products;               
    }


}



