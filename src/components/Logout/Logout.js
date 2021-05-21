import React,{useEffect} from 'react';
import { useHistory } from "react-router-dom";

const Logout = () => 
{

    const history = useHistory();

    // promise

    useEffect(() => {
        fetch('/signout',{
            method: "GET",
            headers: {
                Accept:"application/json",
                "Content-Type" : "application/json"
            },
            credentials: "include" } ).then((res) => {
                history.push('/login', {replace : true});
                if(res.status !== 200)
                {
                    const error = new Error(res.error);
                    throw error;
                }
            }).catch((err) => {
                console.log(err);
            });
    });

    // const Logoutpage = async () => {

    
    //     try{
    //       const res = await fetch('/signout',{
    //         method: "GET",
    //         headers: {
    //             Accept:"application/json",
    //             "Content-Type" : "application/json"
    //         },
    //         credentials: "include" } );
            
            
    //         const data = await res.json();
    
    //         if(!res.status === 200) {
    //           const error = new Error(res.error);
    //           throw error;
    //         }
    
    //     }
    //     catch(err)
    //     {
    //       console.log(err)
    //   history.push('./index');

    //     }
    //   }
    
    //   useEffect(() => 
    //   {
    //     Logoutpage();
    //   },[]);
    
    

    return(
        <>
        <h4>Logout</h4>
        </>
    );

}

export default Logout;