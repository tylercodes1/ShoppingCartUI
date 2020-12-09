import React, {useState } from 'react'
import './LoginPage.css'

export default function LoginPage() {
    const [state, setStat] = useState([])

    const addClick = () => {
        setStat(state.concat(addComponent(state.length + 1)))
    }

    return (
        <div>
            <h1>HelloWhat'sUp</h1>
            <button onClick={() => console.log("hello")}>toNotFound</button>
            <br/>
            <button onClick={() => [1,2,3].map((input, index) => console.log(input + " " + index))}>changeColor</button>
            <br/>
            <button onClick={() => addClick()}>addComponent</button>
            {state}
            {/* <div className="added"></div> */}
        </div>
    );


}



const addComponent = (thisKey) => {
    return (
        <div className="added" key={thisKey}></div>
    )
}