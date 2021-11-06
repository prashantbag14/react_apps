import React, { useEffect, useState } from "react";
import firebase from '../Firebase'

const Packages=()=>{
    const [service,setService]=useState([]);
    const [loader,setloader]=useState(true);

    const ref=firebase.firestore().collection("services");
    console.log(ref)


    function getData(){
            ref.onSnapshot((querySnapshot)=>{
                    setService(querySnapshot.docs.map(doc=>({
                        service:doc.data()
                      
                    })))
                    setloader(false)
            })
            
    }

    useEffect(()=>{
        getData()
    },[])

    return(
        <div className="packages-list">
        <h2 className="text-dark mb-2 ">POPULAR HEALTH CHECKUP PACKAGES</h2>
        {console.log(service)}


        <div className="row">
        {!loader?(
            service.map(item=>
        <div className="packagecard col-lg-3 card ">
                <h6 className="text-uppercase text-warning">{item.service.title}</h6>
                <div className="card-body">
                    <small className="card-text">{item.service.description}</small><br/>
                    <hr id="package-divider"/>
                    <h6 className="item-price text-dark">&#8377;{item.service.price}</h6>
                </div>
            </div>
            )
        ):(<p>Sorry nothing to display</p>)}
        </div>
        </div>
    )
}

export default Packages;