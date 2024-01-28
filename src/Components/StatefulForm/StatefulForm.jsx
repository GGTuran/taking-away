import { useState } from "react";


const StatefulForm = () => {


    const[email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(email);
        console.log(password)
    }

    const handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e =>{
        setPassword(e.target.value)
        console.log(e.target.value);
    }



    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input 
                onChange={handleEmailChange}
                type="email" name="email" id="" />
                <br />
            
                
                <input
                    onChange={handlePasswordChange}
                type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;