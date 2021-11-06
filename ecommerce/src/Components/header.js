import React, { useEffect, useState } from 'react';
import Avatar from "@mui/material/Avatar";
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { Input } from '@mui/material';
import firebase from '../Firebase';
import {Dropdown} from 'react-bootstrap';

const Header=()=>{

        const [open,setOpen]=useState(false);
        const [user,setUser]=useState(null);
        const [username,setUsername]=useState('');
        const [email,setEmail]=useState('');
        const [password,setPassword]=useState('');
        const [openSignIn,setOpenSignIn]=useState(false);



        const ref=firebase.firestore().collection("services");


        useEffect(()=>{
              const unsubscribe=firebase.auth().onAuthStateChanged((authuser)=>{
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
        },[user,username])



       



        const signUp=(event)=>{
          event.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(email,password)
          .then((authuser)=>{
              return authuser.user.updateProfile({
                displayName:username
              })
          })
          .catch((error)=>alert(error.message))
          setOpen(false);
        }



        const signIn=(event)=>{
          event.preventDefault();
          firebase.auth().signInWithEmailAndPassword(email,password)
          .catch((error)=>alert(error.message))

          setOpenSignIn(false)
        }


        return(
            <div className="app_header">
                
                    
                    <img src="https://newassets.apollo247.com/images/ic_logo.png" alt=""
                    height="20%" width="10%" />
                    
                   

                   
                   
                   <Dropdown className="avvatar">
                   <Dropdown.Toggle variant="muted" id="dropdown-basic">
                   <Avatar className="post_avatar"
                   alt="" 
                   />
                   </Dropdown.Toggle>
                 
                   <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1">Your Account</Dropdown.Item>
                     <Dropdown.Item href="#/action-2">Your Orders</Dropdown.Item>
                     <Dropdown.Item href="#/action-3">Your Services</Dropdown.Item>
                     <Dropdown.Item href="#/action-4">Your Account Settings</Dropdown.Item>
                     <Dropdown.Item href="#/action-5">Terms & Conditions</Dropdown.Item>
                   </Dropdown.Menu>
                 </Dropdown>


                   <i className="fa fa-shopping-cart"></i>  
<form className="form-control">
<input type="search" className="form-control" placeholder="Search..."/>

</form>

    <Modal
      open={open}
      onClose={()=>setOpen(false)}
      >
      
      <div className='modal-content'>
          <h4 className="text-warning bg-dark text-center p-1  text-uppercase">Sign Up</h4>
          <form className="app_signup">
             
          <Input 
          placeholder="username"
          type="text"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />    

      <Input 
        placeholder="email"
        type="text"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
      />

      <Input 
        placeholder="password"
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />

      <Button onClick={signUp}>Sign Up</Button>

          </form>
        
      
      </div>
      </Modal>
      



      <Modal
      open={openSignIn}
      onClose={()=>setOpenSignIn(false)}
      >


      <div className="modal-content">
      <h4 className="text-warning bg-dark text-center p-1 text-uppercase">Sign In</h4>
      <form className="app_signup">
          
          
      <Input 
      placeholder="email"
      type="text"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />

    <Input 
      placeholder="password"
      type="password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
    />

    <Button onClick={signIn}>Sign In</Button>
          </form>
          
      </div>

      </Modal>


      <div className="app_header">
          
      </div>

      {user ?(
        //to logout
        <Button onClick={()=>firebase.auth().signOut()}>Logout</Button>
      ):(
        //otherwise stay logged in
        <div className="app_loginContainer">
        <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
  
        <Button onClick={()=>setOpen(true)}>Sign Up</Button>
  
        </div>
      )}
               
            </div>


            
        )
}

export default Header;