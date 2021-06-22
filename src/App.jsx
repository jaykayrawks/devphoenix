import React from 'react';
//import { Route, Switch, Redirect,useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
const selectData = state => state.data

function App() {
    const data = useSelector(selectData)
    return (
        <main>
            <nav className="navbar fixed-top navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt=""
                        height="24"
                        className="d-inline-block align-text-top"
                        />
                    </a>
                </div>
            </nav>

            <div className="container pt-4">
                Welcome to phoenix cart
                {
                    /*
                    <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/" component={Home} />
                    <Redirect from="*" to="/" />
                </Switch>
                */
                }
            </div>
        </main>
        
    );
}

export { App }; 