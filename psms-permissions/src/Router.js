import React from 'react';

import {Route} from 'react-router-dom'
import Home from './components/Home'
import About_us from './components/About_us'
import Login from './components/login'
import Register from './components/Register'
import Footer from './components/footer'
import Header from './components/Header'
export default function ButtonAppBar() {
  

  return (
    <div style={{flexGrow: 1 ,
      fontSize: '2rem',background:'#30027e', display:"flex" ,flexDirection:'column',justifyContent:'center' ,alignItems:'center'}}>
     <Header/>
      <div style={{background:'white' ,width:'50%'}}>
<Route exact path='/'   component={Home}/>


<Route exact path='/about_Us'   component={About_us}/>
<Route exact path='/register'   component={Register}/>
<Route exact path='/login'   component={Login}/></div>


<Footer/>
    </div>
  );
}