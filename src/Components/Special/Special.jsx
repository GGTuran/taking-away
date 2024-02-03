import PropTypes from 'prop-types' ;
import { useContext } from 'react';
import { AssetContext, MoneyContext } from '../Grandpa/Grandpa';

const Special = ({asset}) => {
    const queen = useContext(AssetContext);
    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h2>Special person  {queen}</h2>
            <p>Has {asset}</p>
            <p>Has money:{money}</p>
            
            
            
        </div>
    );
};
Special.propTypes = {
    asset:PropTypes.array.isRequired
}
export default Special;