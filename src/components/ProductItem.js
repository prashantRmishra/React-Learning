import { Component } from "react";
import  PropTypes  from "prop-types";
export class ProductItem extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            /* <ol>
                    <li>Product 1 </li>
                    <li>Product 2</li>
                    <li>Product 3</li>
                </ol>*/          
              <li>{this.props.item.id}{this.props.item.name}</li> 
        );
    }
}
ProductItem.prototypes = {
    item:PropTypes.object.isRequired
}