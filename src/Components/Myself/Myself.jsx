import { useContext } from "react";
import Special from "../Special/Special";
import PropTypes from 'prop-types';
import { MoneyContext } from "../Grandpa/Grandpa";

const Myself = ({asset}) => {
    const[money, setMoney] = useContext(MoneyContext);
    return (
        <div>
           <h2>Myself</h2> 
           <section className="flex">
            <Special asset={asset}></Special>
            
           </section>
           
           
           <p>Net money:{money}</p>
           <button onClick={() => setMoney(money+1000)} > Add money!!</button>
           <p>gg</p>

        </div>
    );
};

Myself.propTypes = {
    asset:PropTypes.array.isRequired
}

export default Myself;