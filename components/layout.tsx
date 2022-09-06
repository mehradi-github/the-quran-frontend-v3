import React ,{Fragment, PropsWithChildren} from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children })=>{
    return(
        <Fragment>
            { children }
        </Fragment>
    )
}
export default Layout;