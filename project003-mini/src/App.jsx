import React, { useState } from 'react'
import './App.css'
import AddGroceries from "./AddGroceries.jsx";

function App() {
    const sauce = [
        {label: "Tomato Sauce"},
        {label: "Alfredo Sauce"},
        {label: "Marinara"}
    ];
    const meat = [
        {label: "Ground Beef"},
        {label: "Chicken"},
        {label: "Pork"}
    ];
    const pasta = [
        {label: "Spaghetti"},
        {label: "Penne"},
        {label: "Macaroni"}
    ];


    const [selectedsauce, setSauce] = useState('')
    const [selectedmeat, setMeat] = useState('')
    const [selectedpasta, setPasta] = useState('')

    return (
        <>
            <div className='dropdown'>
                <select value={selectedsauce} onChange={(e) => setSauce(e.target.value)}>
                    <option value="">-- Select a Sauce --</option>
                    {sauce.map((s, i) => (
                        <option >
                            {s.label}
                        </option>
                    ))}
                </select>

                <select value={selectedmeat} onChange={(e) => setMeat(e.target.value)}>
                    <option value="">-- Select Meat --</option>
                    {meat.map((m, i) => (
                        <option>
                            {m.label}
                        </option>
                    ))}
                </select>

                <select value={selectedpasta} onChange={(e) => setPasta(e.target.value)}>
                    <option value="">-- Select a Pasta --</option>
                    {pasta.map((p, i) => (
                        <option>
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