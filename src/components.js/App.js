import React from 'react'
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Main from './Main';

const App = () => {
    return (
        <div className="app">
            <div className="app__header">
                <Header />
            </div>
            <div className="app__mainContainer">
                <div className="app__sidebar">
                    <SideBar />
                </div>
                <div className="app__main">
                    <Main />
                </div>
            </div>
        </div>
    )
}

export default App
