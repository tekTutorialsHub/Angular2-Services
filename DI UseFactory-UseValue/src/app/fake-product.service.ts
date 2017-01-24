
import {Product} from './Product'

export class FakeProductService{

    public  getProducts() {

        let products:Product[];

        products=[
            new Product(1,'Fake Memory Card',500),
            new Product(1,'Fake Pen Drive',750),
            new Product(1,'Fake Power Bank',100)
        ]

        return products;               
    }


}
