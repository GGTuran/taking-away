

const ReusableForm = ({formTitle, handleSubmit , submitBtnText = 'Submit'}) => {
    const HandleLocalSubmit = e =>{
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email:e.target.email.value,
            password:e.target.password.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formTitle}</h2>
            <form  onSubmit={HandleLocalSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;