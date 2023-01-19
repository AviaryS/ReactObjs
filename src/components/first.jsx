import React, {useState} from 'react';

function First(props) {
    const [obj, setObj] = useState({
        prop1: "prop1",
        prop2: "prop2",
        prop3: "prop3",
    });

    const handleChange = (prop) => {
        let copy = Object.assign({}, obj);
        copy[prop] = "selected";
        setObj(copy);
    };

    return (
        <div>
            <br/><br/> task 1 <br/>
            <p>{obj.prop1}</p>
            <p>{obj.prop2}</p>
            <p>{obj.prop3}</p>
            <button onClick={() => handleChange("prop1")}>first</button>
            <button onClick={() => handleChange("prop2")}>second</button>
            <button onClick={() => handleChange("prop3")}>third</button>
        </div>
    );
}

export default First;