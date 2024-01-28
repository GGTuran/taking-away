import useInputState from "../../hooks/useInputState";


const SimpleForm = () => {
    const[name, handleNameChange] = useInputState('GGG')
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('form data', name)
        // console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.phone.value);
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;