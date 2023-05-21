import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const MyToy = () => {

    const [myToy,setMyToy] = useState([])
    const {user} = useContext(AuthContext)
    
    useEffect(()=>{
        fetch(`http://localhost:5000/email/${user.email}`)
        .then(res => res.json())
        .then(data => setMyToy(data))
    },[])
  console.log(myToy);
    return (
        <div>
           
        </div>
    );
};

export default MyToy;