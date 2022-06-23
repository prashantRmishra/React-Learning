# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.



## We are going to create root coponent as panel and we will render child component into it


For using bootstrap:
``npm install --save bootstra``
import bootstrap in ``index.js`` file

``import '../node_modules/bootstrap/dist/css/bootstrap.css'``

Communication between parent and child component (this.props and this.state)
-

this.prop 
--
    when this.prop is used to pass the value between parent and child. then the data is readonly i.e. child can't change the value only the parent can change the value.

``parent``

```js
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
```

``child``

```js
import { Component } from "react";
import  PropTypes  from "prop-types"; // Prototypes are used for validation
export class ProductItem extends Component{
    constructor(){
        super();
    }
    render(){
        /* state should not be hardcoded in the component itself 
        let it come from outside
        var elementState = {
            isHidden: true
        };*/
        if(this.props.isHidden){
            return <h1>Product details are not available</h1>;
        }
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
    item:PropTypes.object.isRequired // item is a 'prop' that is used to store data coming from the parent component to the child component.
}
ProductItem.defaultProps={ // default property is used when parent does not give any value then the default value can be used.
    inStock:true
}
```

Remember : **props are always public**


this.state
--

this.state is private to a  component and can be changed by the component .
this.state can be initialized using this.props.
**When ever the state of a component changes it re-renders itself**

Consider an example where there is ``CounterComponent`` that shows count value.
and the parent component  has ``CouterComponent`` selector tag in it.
Parent also has a button ``add count``. Now, whenever the ``add count`` button is clicked then new count value should be shown by the ``CounterComponent`` 

``CounterComponent`` : show close attention to state and event handeling 
```js
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
```

``App.js`` : Parent Component
```js
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ProductList from './components/ProductList'
import { CounterComponent } from './components/CounterComponent';

class App extends Component {
 render () {
  return (
    <div className='container'>
       <div className='container-fluid'>
         <div className='panel panel-warning border'>
           <div className='panel-heading'>
             <img src={logo} width = '30' height = "30"/>
             <h2 align ='center' className='text-warning'>React Root Component</h2>
           </div>
           <div className='panel-body'>
            <CounterComponent count={1}/>
            <CounterComponent count={100}/>
           </div>
         </div>
       </div>
    </div>
   );
 }
}

export default App;
```
