import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Brother = () => {
    const money = useContext(AssetContext)
    return (
        <div>
            <h2>Brother</h2>
            <p>does not have {money}</p>
        </div>
    );
};

export default Brother;