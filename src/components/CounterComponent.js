import { Component } from "react";

export class CounterComponent extends Component{
    constructor(props){ // we are using props the initialize the state of this component
        super(props);
        this.state ={
            count :  this.props.count // the property count will keep track of count value as an when
            // it changes and every time it changes this component will be reredered in the dom.
        }
    }
    render(){
        return (
           <div>
           <button className="btn btn-primary"
           onClick={this.increment.bind(this)} // this is an event handling method signature in react which is bit
           // different from normal javascript : It is called synthetic event binding
           //Synthetic events have consistent properties across different browsers.
           >Increment</button>
           <h2>Current count is : {this.state.count}</h2>
           </div>
        );
    }
    increment(){
        let currentCount  = this.state.count;
        currentCount+=1;
        this.setState({
            count : currentCount
        });
    }
}