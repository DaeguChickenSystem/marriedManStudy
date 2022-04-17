import React from 'react';

import { Header } from './Header';
import './page.css';



export const Login = () => {
    return (
        <div className="loginWraaper">
            <div className="head-title-wrap">
                <h3 className="head-title">로그인</h3>
            </div>
            <div className="inputWrapper">
                <div>
                    <input />
                </div>
                <div>
                    <input />
                </div>
            </div>
            <div className="buttonWrapper">
                <button>로그인</button>
            </div>
        </div>
    );
};

