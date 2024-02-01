import PropTypes from 'prop-types' ;
import { useContext } from 'react';
import { AssetContext } from '../Grandpa/Grandpa';

const Special = ({asset}) => {
    const queen = useContext(AssetContext);
    return (
        <div>
            <h2>Special person  {queen}</h2>
            <p>Has {asset}</p>
            
            <p>bar ache</p>
        </div>
    );
};
Special.propTypes = {
    asset:PropTypes.array.isRequired
}
export default Special;