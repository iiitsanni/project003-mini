import React from 'react';


const AddGroceries = ({handleChange, itemName}) => {
    const [count, setCount] = React.useState(1);

    const handleUpClick = () => {
        setCount(count + 1);
    }

    const handleDownClick = () => {

        if(count === 1){
            // setCount(0);
            // this.className += "disabled"
            handleChange(itemName);

        }
            else
        setCount(count - 1);
    }


    return (
        <>
            <div className="card">
                <button onClick={handleDownClick} className='negative'> -
                </button>
            </div>

            <div className="count">
                {count}
            </div>

            <div className="card">
                <button onClick={handleUpClick} className='plus'> + </button>
            </div>

        </>
    );
};

export default AddGroceries;