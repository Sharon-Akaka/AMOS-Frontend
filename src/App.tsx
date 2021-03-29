import React from 'react';
import './App.css';
import AllResources from './components/AllResources';
import Header from './components/Header';
import InputForm from './components/InputForm';



function App() {
    return (
        <div className="App">
            <Header />
            <div className="content-container">
            <InputForm />
            <AllResources />
            </div>
        </div>
    );
}

export default App;
