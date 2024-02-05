import { useContext } from "react";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const honey = useContext(AssetContext)
    const [money , setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>does not have {honey}</p>
            <button>money:{setMoney}</button>
            <p>set {money}</p>
            <p>set {money}</p>
            <p>set {money}</p>
        </div>
    );
};

export default Brother;