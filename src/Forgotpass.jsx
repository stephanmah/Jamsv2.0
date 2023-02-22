import React, {useState} from "react";
import { Link } from "react-router-dom";


{/* */}
export const Forgotpass = (props) =>{
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    {/* event handler for form entry*/}
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(email);
    }
    {/*forgot password form */}
    return(
        <div className="auth-form-container">
            <h2>Recover Password</h2>
            <form className="forgotpass-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@mail.com" id="email" name="email"/>
                <button type="submit">Recover Password</button>
            </form>
            {/* switch to login form*/}
            <Link to="/">
                <button className="link-btn" >login</button>
            </Link>      
        </div>
    );
}
