import { Component } from "react";
import { ProductItem } from "./ProductItem";

class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            addProduct : this.props.addProduct
        }

    }
    render(){

        if(this.state.addProduct){
            return (
                <div className="panel panel-default border">
                <div className="panel-heading border">
                    <h3>new product that are added list</h3>
                </div>
                
                <div className="panel-body border">
                  <ol>
                {/* <ProductItem isHidden={false} item={{id:1,name:"product one"}}></ProductItem>
                    <ProductItem isHidden={false} item={{id:2,name:"product two"}}></ProductItem>
                    <ProductItem isHidden = {true} item={{id:3,name:"product three"}}></ProductItem>*/}
                    <ProductItem addProduct={false} item={{id:1,name:"product one"}}></ProductItem>
                  </ol>
                </div>
            </div>
            );
        }
       
        return (

            <div className="panel panel-default border">
                <div className="panel-heading border">
                    <h3>Product List</h3>
                </div>
                
                <div className="panel-body border">
                  <ol>
                {/* <ProductItem isHidden={false} item={{id:1,name:"product one"}}></ProductItem>
                    <ProductItem isHidden={false} item={{id:2,name:"product two"}}></ProductItem>
                    <ProductItem isHidden = {true} item={{id:3,name:"product three"}}></ProductItem>*/}
                    <ProductItem  item={{id:1,name:"product one"}}></ProductItem>
                  </ol>
                  
                  <button className="btn btn-success"
                  onClick={this.addProduct.bind(this)}>Add new Product</button>
                </div>
            </div>
        );
    }
    addProduct(){
        this.setState = {
            addProduct: true
        }
    }
}
export default ProductList;