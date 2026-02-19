import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import AddGroceries from "AddGroceries.jsx";

function App() {
    const sauce = [
        {label: "Tomato Sauce", value: "tomatoSauce"},
        {label: "Alfredo Sauce", value: "alfredo"},
        {label: "Marinara", value: "marinara"}
    ];
    const meat = [
        {label: "Ground Beef", value: "beef"},
        {label: "Chicken", value: "chicken"},
        {label: "Pork", value: "pork"}
    ];
    const pasta = [
        {label: "Spaghetti", value: "spaghetti"},
        {label: "Penne", value: "penne"},
        {label: "Macaroni", value: "macaroni"}
    ];

    //const SauceItems = sauce.map(sauce => <li>{sauce}</li>);

    const [selectedsauce, setSauce] = useState('')
    const [selectedmeat, setMeat] = useState('')
    const [selectedpasta, setPasta] = useState('')

    // modify button states, make selection static except when button modify is clicked
    const [editPasta, setEditPasta] = useState(false)
    const [editMeat, setEditMeat] = useState(false)
    const [editSauce, setEditSauce] = useState(false)

    /*const handleSauceChange = (bolo) => {
        setSauce(bolo.target.value)
    };
    const handleMeatChange = (bolo) => {
        setMeat(bolo.target.value);
    };
    const handlePastaChange = (bolo) => {
        setPasta(bolo.target.value);
    };
    */
    return (
        <>
            <div className='dropdown'>
                <select value={selectedsauce} onChange={(e) => setSauce(e.target.value)}>
                    <option value="">-- Select a Sauce --</option>
                    {sauce.map((s, i) => (
                        <option key={i} value={s.value}>
                            {s.label}
                        </option>
                    ))}
                </select>

                <select value={selectedmeat} onChange={(e) => setMeat(e.target.value)}>
                    <option value="">-- Select Meat --</option>
                    {meat.map((m, i) => (
                        <option key={i} value={m.value}>
                            {m.label}
                        </option>
                    ))}
                </select>

                <select value={selectedpasta} onChange={(e) => setPasta(e.target.value)}>
                    <option value="">-- Select a Pasta --</option>
                    {pasta.map((p, i) => (
                        <option key={i} value={p.value}>
                            {p.label}
                        </option>
                    ))}
                </select>

            </div>

            <h1>Your Groceries</h1>

            <div className="list">

                <ul>


                    {selectedsauce && (
                        <li className="grocery-row">
                            {selectedsauce}
                            <AddGroceries/>
                            <button onClick={() => setSauce('')}>Remove</button>
                        </li>
                    )}


                    {selectedmeat && (
                        <li className="grocery-row">
                            {selectedmeat}
                            <AddGroceries/>
                            <button onClick={() => setMeat('')}>Remove</button>
                        </li>
                    )}


                    {selectedpasta && (
                        <li className="grocery-row">
                            {selectedpasta}
                            <AddGroceries />
                            <button onClick={() => setPasta('')}>Remove</button>
                        </li>
                    )}

                </ul>
            </div>


        </>
    )
}

export default App