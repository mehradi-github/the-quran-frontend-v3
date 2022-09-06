import React from 'react';

const Layout: React.FC = ({ children })=>{
    return(
        <main style={{color:'green'}}>
            { children }
        </main>
    )
}
export default Layout;