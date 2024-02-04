import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";


const Cousin = ({name}) => {
    const[money ,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <p>does not have {money}</p>
           
            
            
        </div>
    );
};

export default Cousin;