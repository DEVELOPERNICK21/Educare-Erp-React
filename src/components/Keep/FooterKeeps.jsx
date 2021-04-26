import React from 'react';

const FooterKeep = () =>
{
    const Year = new Date().getFullYear();
    return(
        <>
            <footer style={{position: "fixed",
                            left: 0,
                            bottom: 0,
                            background:"#000",
                            justifyContent:'center',
                            alignContent:'center',
                            textAlign:'center',
                            height: "100px",
                            width: "100%" }}>
                <h2 style={{textAlign:"center", marginBottom:"34px" ,color:"#b5d7ff"}}>Copyright © {Year}</h2>
            </footer>
        </>
    );
}

export default FooterKeep;