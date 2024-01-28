

const Hookform = () => {
    return (
        <div>
            form  onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email"  />
                <br />
                <input type="text" name="phone"  />
                <br />
                <input type="password" value="password" />
            </form>
        </div>
    );
};

export default Hookform;