import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ProductList from './components/ProductList'

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
           
            <ProductList/>
           </div>
         </div>
       </div>
    </div>
   );
 }
}

export default App;
