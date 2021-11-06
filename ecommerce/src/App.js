import React,{ useEffect,useState } from 'react';
import './App.css';
import Bookwithus from './Components/bookwithus';
import Footer from './Components/footer';
import Header from './Components/header';
import Home from './Components/home';
import Packages from './Components/package';
import firebase from './Firebase';

function App() {

  const [user,setUser]=useState(null);
 

  useEffect(()=>{
    const unsubscribe =firebase.auth().onAuthStateChanged((authuser)=>{
      if(authuser){
          setUser(authuser);
         
      }
      else{
        
        setUser(null);
      }
    })
    return()=>{
      unsubscribe();
    }
  },[user])



  const CurrentUser=React.createContext(user)

  return (
    <div className="app-content px-xl-5">
    <CurrentUser.Provider value={user}>
      <Header/>
       <Home newuser={user}/>
       <Packages />
       <Bookwithus/>
      <Footer/>
      </CurrentUser.Provider>
    </div>
  );
}

export default App;
