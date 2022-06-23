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
---

## Task

Add button to ``ProductList`` and upon click of that button add new product list to the display in the ``ProductList`` component.

Note: We don't have to do anything in the ``ProductItem`` , we have to modify the ``ProductList`` 
component a little bit

```js
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
                        return <ProductItem isHidden = {false} item={product} key = {product.id}></ProductItem>
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
            //... is a spread operator i.e if productList  is an array with 4 object then ...productList will be '{},{},{},{}' and we can easily add 5th object into it as you can see in the above statement.
        })
    }
}
export default ProductList;
```

__Note :__

``{}`` are used in jsx to represent conditional redering inside html tags parathesis ``<tag></tag>``
e.g

```js
render(){
    return (
         <ol>
                  {
                    this.state.productList.map(product=>{
                        return <ProductItem isHidden = {false}  item={product} key = {product.id}></ProductItem>
                    })
                  }
        </ol>
    );
}
```
---

**LifeCycle of react component**

Every lifecycle can be group into three categories

Mounting : when the component is rendered for the first time
Updating : when the state of the component changes and the component is re-rendered
Unmounting: when the component is destroyed


Mounting
-

Mounting means putting elements into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

``constructor()``:

    Called once.
    The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values

``componentWillMount()``:

    Called once.
    Invoked immediately before react insert the component into the dom.

``render()``:

    Used to insert the component into the dom
``componentDidMount()``:

    Called Once after the first ``render()``
    Best place to initialize other javascript libraries that needs access to the dom. i.e Ajax calls can be made from here.

Updating
--
``componentWillRecieveProps(nextPops)``:

    First to be invoked in updating phase
    Called when child component recieves new props from the parent component.

    Is an opportunity to compare the current component's properties using ``this.props`` object with the next component's properties using the ``nextprops`` object
        Based on this comparison, we can choose to update the component's state using this.setState() function, which will not trigger an additional render

``shouldComponentUpdate(nextprops, nextstate)``:

    •Allows to decide whether the next component's state should trigger the component's re-rendering
    •Returns a Boolean value, which by default is true
    •Great place to prevent re-rendering of the component based on some condition

``componentWillUpdate(nextprops, nextstate)``:

    •Called immediately before React updates the DOM
    •setState() cannot be used here
    •Can be used as a preparation stage before the DOM update

``render()``:

    used for re-redering of the component into the dom.

``componentDidUpdate(previousprops, previousstate)``:

    •Called immediately after React updates the DOM
    •Can be used to interact with the updated DOM or perform any post-render operations
    •Updating cycle ends after this method is called
    •A new cycle is started when a component's state is updated or a parent component passes new properties
    •Good place to do network requests as long as you compare the current props to previous props

Unmounting
--
``componentWillUnmount()``:

    •Invoked immediately before a component is unmounted & destroyed
    •Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount()


# Task :

Lets create ``TodoListComponent`` as parent and ``TodoItemComponent``  as child

now , change the state of ``TodoListComponent`` and see how different life cycle hooks are excecuted
I will add more details regarding this but, for now read this and get a basic idea of it

```js
import { Component } from "react";
import { TodoItemComponent } from "./TodoItemComponent";

export class TodoListComponent extends Component{
    constructor(props){ // 1st Life Cycle (lc) method of mounting 
        super(props);
        this.state = {
            todos : this.props.todos
        }
    }
    componentWillMount(){ //2nd lf method of mounting
        console.log("componentWillMount() called in TodoListComponent")
    }
    render(){ // 3rd lf method of mounting and second method of updating
        return (
            <div>
                {
                    this.state.todos.map(todo=>{
                        return <TodoItemComponent key = {todo.id} todo={todo}/>
                    })
                }
                <button className="btn btn-primary" onClick={this.addTodoItem.bind(this)}>Add Todo</button>
                <button className="btn btn-primary" onClick={this.dontAddItem.bind(this)}>Don't add anything new todo</button>

            </div>
           
        );
    }
    componentDidMount(){
        console.log("componentDidMount() called in TodoListComponent ")
    }

    addTodoItem(){
        this.setState({
            todos:[...this.state.todos,{id:2,name:"This is second todo"}]
        })
    }
    dontAddItem(){
        this.setState({
            todos:this.state.todos
        })
    }

}
```
```js
import { Component } from "react";

export class TodoItemComponent extends Component{
    constructor(props){ // first method of mounting life cycle hook
        super(props);
        this.state = {
            todo : this.props.todo
        }
      
    }

    componentWillMount(){ //second mounting life cycle hook method
        console.log("componentWillMount() called of TodoItemComponent");
    }
    render(){ // 3rd life cycle mounting life cycle hook method.
        return (
            <li>{this.state.todo.id}{this.state.todo.name}</li>
        );
    }
    componentDidMount(){
        console.log("componentDidMount() called of TodoItemComponent");
    }


    // updating life cycle hood methods
componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps() called in TodoItemComponent")
    console.log(nextProps);
    console.log(this.state);
    if(nextProps!==this.state) {
        this.setState({
            todo:nextProps.todo
        })
    }
}

shouldComponentUpdate(nextProps,nextState){

    console.log("shouldComponentUpdate() is called in TodoItemComponent")
    console.log(this.state)
    console.log(nextState);
    if(this.state!== nextState) return true;
    return false;
}
// should componentUpdate() returns true then componentWillUpdate() will be called else not
componentWillUpdate(){
    console.log("componentWillUpdate called of TodoItemComponent");
}


componentDidUpdate(prevProp,prevState){
    console.log("componentDidUpdate() called in TodoItemComponent");
}


componentWillUnmount(){
    console.log("componentWillUnmount() called in TodoItemComponent  ")
}

}
```

Finally make necessary changes in ``App.js``

```js
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ProductList from './components/ProductList'
import { CounterComponent } from './components/CounterComponent';
import { TodoListComponent } from './components/lifeCycleComponents/TodoListComponent';

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
           
          {/*
          <ProductList/>
            <CounterComponent count={1}/>
            <CounterComponent count={100}/>
        */}
        <TodoListComponent todos={[{id:1,name:"this is first todo"}]}/>
           </div>
         </div>
       </div>
    </div>
   );
 }
}

export default App;

```

----

Ajax in React js
--

React does not have its own library for making http requests
Hence it uses other ways like jQuery, axios, etc.

We will use ``axios``

``npm install axios --save';``

``import axios from 'axios';``

----

Json-server
--
We will use ``json-server`` for making dummy ajax api calls.

``npm install -g json-server``

Create a file ``users.json`` in the root of your react app

then run ``json-server --watch users.json -p <different-port>``

``GetOperationComponent`` will call api of json-server and response will be shown on the page

```js
import { Component } from "react";
import axios from "axios";
export class GetOperation extends Component{
    constructor(){
        super();
        this.state = {
            users:[]
        }
    }
    render(){
        return(
           <div>Get Operation
           
                <button className="btn btn-primary"
                onClick={this.getAllUsers.bind(this)}
                > Get All Users</button>
               {
                this.state.users.map(user=>{
                    return <h2 key = {user.id}>{user.name}</h2>
                })
               }
           </div>
        );
    }
    getAllUsers(){
        axios.get(" http://localhost:3001/users").then(res=>{
            console.log("users are here")
            console.log(res)
            this.setState({
                users:res.data
            })
        }).catch(error=>{console.log(error)})
    
    }

    //as we know this is the right life cycle hook to make ajax calls
    componentDidMount(){
    
           
    }
}
```

``App.js``

```js
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ProductList from './components/ProductList'
import { CounterComponent } from './components/CounterComponent';
import { TodoListComponent } from './components/lifeCycleComponents/TodoListComponent';
import { GetOperation } from './components/ApiComponents/GetOperation';

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
           
          {/*
          <ProductList/>
            <CounterComponent count={1}/>
            <CounterComponent count={100}/>
            <TodoListComponent todos={[{id:1,name:"this is first todo"}]}/>
        */}
        <GetOperation></GetOperation>
           </div>
         </div>
       </div>
    </div>
   );
 }
}

export default App;

```
---


