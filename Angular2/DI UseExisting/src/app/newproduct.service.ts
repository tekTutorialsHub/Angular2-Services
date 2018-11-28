
import {Product} from './Product'

export class NewProductService{

    public  getProducts() {

        let products:Product[];

        products=[
            new Product(1,'New Memory Card',500),
            new Product(1,'New Pen Drive',750),
            new Product(1,'New Power Bank',100)
        ]

        return products;               
    }

}



