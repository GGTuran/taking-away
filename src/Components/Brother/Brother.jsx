import { useContext } from "react";
import { AssetContext, MoneyContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const money = useContext(AssetContext)
    const [mopney , setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>does not have {money}</p>
            <button>money:{setMoney}</button>
        </div>
    );
};

export default Brother;