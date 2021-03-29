import React from 'react';
import './App.css';
import AllResources from './components/AllResources';
import Header from './components/Header';
import InputForm from './components/InputForm';



function App() {
    return (
        <div className="App">
            <Header />
            <InputForm />
            <AllResources />
        </div>
    );
}

export default App;
