import React from 'react';
import classes from './main-header.module.css'
import Link from 'next/link'

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <Link href={'/'}>NextPro</Link>
            </div>
            <nav className={classes.navigation}>
                <ul>
                    <li>
                        <Link href={'/events'}>Browse all events</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;