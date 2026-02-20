import React, { useState } from 'react'
import './App.css'
import AddGroceries from "./components/AddGroceries.jsx";

function App() {
    const itemTypes=['sauce','meat','pasta'];
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

    const handleChange = (itemName) => {

        if(itemName === "pasta"){
            setPasta('')
        }else if(itemName === "meat"){
            setMeat('')
        }else if(itemName === "sauce"){
            setSauce('')
        }
    }



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
                            <input type="checkbox" className="checkbox"/>

                            {selectedsauce}
                            <AddGroceries handleChange={handleChange} itemName={"sauce"}/>
                            <button className='remove' onClick={() => setSauce('')}><span className="remove-label">Remove</span></button>
                        </li>
                    )}


                    {selectedmeat && (
                        <li className="grocery-row">
                            <input type="checkbox" className="checkbox"/>
                            {selectedmeat}
                            <AddGroceries handleChange={handleChange} itemName={"meat"}/>
                            <button className='remove' onClick={() => setMeat('')}><span className="remove-label">Remove</span></button>
                        </li>
                    )}


                    {selectedpasta && (
                        <li className="grocery-row">
                            <input type="checkbox" className="checkbox"/>
                            {selectedpasta}
                            <AddGroceries handleChange={handleChange} itemName={"pasta"}/>
                            <button className='remove' onClick={() => setPasta('')}><span className="remove-label">Remove</span></button>
                        </li>
                    )}

                </ul>
            </div>


        </>
    )
}

export default App