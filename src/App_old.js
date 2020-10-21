import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import histry from './components/Histry';

class App extends React.Component{
 

  setData(){

    //set data with localstorage
    let obj={id: 1,name:'vivek',age:29,email:'vivek2gmail.com'}
     localStorage.setItem('myData',JSON.stringify(obj));
    }
    
    getData(){
    
      let  data= localStorage.getItem('myData');
    data=JSON.parse(data);
   
    console.log(data)
    
    }
   
  render(){
    
  return (
    <div className="App">
      <Header/>
    
      
<h1>Local Storage Demo</h1>
      
      <button type="button" class="btn btn-info"  onClick={()=>this.setData() }>Set Data</button>

     <hr></hr>
<button  type="button" class="btn btn-info"  onClick={()=>this.getData() }>Get Data</button>


<hr/>







    </div>
  );
  }
}

export default App;
