import React, {Fragment} from 'react';
import MainHeader from "./main-header";

const Layout = ({children}) => {
    return (
        <Fragment>
            <main>
                <MainHeader />
                {children}
            </main>
        </Fragment>
    );
};

export default Layout;