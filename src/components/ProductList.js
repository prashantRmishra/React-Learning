import { Component } from "react";
import { ProductItem } from "./ProductItem";

class ProductList extends Component{
    constructor(){
        super();
        console.log("ProductList component created")
    }
    render(){
        console.log('render of productlist called')
        return (

            <div className="panel panel-default border">
                <div className="panel-heading border">
                    <h3>Product List</h3>
                </div>
                
                <div className="panel-body border">
                  <ol>
                    <ProductItem isHidden={false} item={{id:1,name:"product one"}}></ProductItem>
                    <ProductItem isHidden={false} item={{id:2,name:"product two"}}></ProductItem>
                    <ProductItem isHidden = {true} item={{id:3,name:"product three"}}></ProductItem>
                  </ol>
                </div>
            </div>
        );
    }
}
export default ProductList;