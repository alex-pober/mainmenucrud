import React from 'react';

import './Splashpage.css';

function SplashPage(){
    return (
        <div>
            <h2>Turn your PDF menu into actual digital menu!</h2>
            <div className='splashImage'>
                <img src='https://mainmenu.io/wp-content/uploads/2021/02/MainMenu-Digital-Menu-Contactless.png'></img>
            </div>
                <div className='twoButtons'>
                    <button><a href="/signup">Signup</a></button>
                </div>
                <div className='twoButtons'>
                    <button><a href="/login">Login</a></button>
                </div>
            </div>
    )
}

export default SplashPage;
