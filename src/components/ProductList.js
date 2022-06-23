import { Component } from "react";
import { ProductItem } from "./ProductItem";

class ProductList extends Component{
    constructor(){
        super();
        this.state = {
           productList:[{id:45,name:'product one'},
           {id:2,name:'product two'},
           {id:3,name:'product three'},
           {id:4,name:'product four'}]
        }

    }
    render(){
        
            return (
                <div className="panel panel-default border">
                <div className="panel-heading border">
                    <h3>new product that are added list</h3>
                </div>
            
                <div className="panel-body border">
                  <ol>
                  {
                    this.state.productList.map(product=>{
                        return <ProductItem isHidden = {false}  item={product} key = {product.id}></ProductItem>
                    })
                  }
                  </ol>
                  <button className="btn btn-primary"
                  onClick={this.addNewProduct.bind(this)}>Add Product</button>
                </div>
            </div>
            
        );
    }
    addNewProduct(){
  
        this.setState({
            productList: [...this.state.productList,{id:4545,name:"this is a new product added"}]
        })
    }
}
export default ProductList;