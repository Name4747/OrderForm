import React,{useState} from 'react'

import NotFound from './notfound.png'
import Yellow from './yellow.png'
import Teal from './teal.png'
import BlueClear from './blue_clear.png'
import OrangeShell from './orange_shell.png'
import Black from './black.png'

const Form = () => {

    const [type,setType] = useState('Necklace')
    const [style,setStyle] = useState('Wenge')
    const [mat1,setMat1] = useState('Orange Shell')
    const [mat2,setMat2] = useState('Orange Shell')
    const [mat3,setMat3] = useState('Orange Shell')
    const [email,setEmail] = useState('')
    const [fullName,setFullName] = useState('')
    const [phone,setPhone] = useState('')

    function getImage(mat) {
        switch(mat) {
            case 'Orange Shell' :
                return OrangeShell;
            case 'Blue Clear' :
                return BlueClear;
            case 'Black' :
                return Black;
            case 'Teal' :
                return Teal;
            case 'Yellow' :
                return Yellow;
            default :
                return NotFound;
        }
    }

    const handleSubmit = () => {
        const config = {
            "method" : "POST",
            "headers" : {
                "Content-Type" : "application/json"
            },
            "body" : JSON.stringify({
                type,
                style,
                mat1,
                mat2,
                mat3,
                email,
                fullName,
                phone
            })
        }
        fetch('/order', config)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Order Form</h1>
            
            <h2>Product Details</h2>

            <span>* = required</span>

            <div className="inputs">
                <label>What is your product?*</label><br/>
                <select required={true} onChange={(e) => {setType(e.target.value)}}>
                    <option>Necklace</option>
                    <option>Bracelet</option>
                    <option>Wind Chime</option>
                </select>
            </div>

            <div className="inputs">
                <label>What is the base style you want your product to be?*</label><br/>
                <select required={true} onChange={(e) => {setStyle(e.target.value)}}>
                    <option>Wenge</option>
                    <option>Regae</option>
                    <option>Michigan</option>
                    <option>Spring</option>
                    <option>Nature</option>
                    <option>Reliable</option>
                </select>    
            </div>

            <div className="inputs">
                <label>Material 1*</label><br/>
                <select required={true} onChange={(e) => {setMat1(e.target.value)}}>
                    <option>Orange Shell</option>
                    <option>Blue Clear</option>
                    <option>Black</option>
                    <option>Teal</option>
                    <option>Yellow</option>
                </select>
                <br/>
                <img src={getImage(mat1)} alt="Material 1" width="128px"></img>
            </div>

            <div className="inputs">
                <label>Material 2*</label><br/>
                <select required={true} onChange={(e) => {setMat2(e.target.value)}}>
                    <option>Orange Shell</option>
                    <option>Blue Clear</option>
                    <option>Black</option>
                    <option>Teal</option>
                    <option>Yellow</option>
                </select>
                <br/>
                <img src={getImage(mat2)} alt="Material 1" width="128px"></img>
            </div>

            <div className="inputs">
                <label>Material 3*</label><br/>
                <select required={true} onChange={(e) => {setMat3(e.target.value)}}>
                    <option>Orange Shell</option>
                    <option>Blue Clear</option>
                    <option>Black</option>
                    <option>Teal</option>
                    <option>Yellow</option>
                </select>
                <br/>
                <img src={getImage(mat3)} alt="Material 1" width="128px"></img>
            </div>

            <h2>Contact Information</h2>

            <div className="inputs">
                <label>Your Email*</label><br/>
                <input type="email" required={true} autoCorrect="off" onChange={(e) => {setEmail(e.target.value)}}/>
            </div>

            <div className="inputs">
                <label>Full Name*</label><br/>
                <input required={true} onChange={(e) => {setFullName(e.target.value)}}/>
            </div>

            <div className="inputs">
                <label>Phone Number</label><br/>
                <input type="tel" maxLength="10" onChange={(e) => {setPhone(e.target.value)}}/>
            </div>    

            <input type="submit" value="Place Order"/>
        </form>
    )
}

export default Form
