import Special from "../Special/Special";
import PropTypes from 'prop-types';

const Myself = ({asset}) => {
    return (
        <div>
           <h2>Myself</h2> 
           <section className="flex">
            <Special asset={asset}></Special>
           </section>
        </div>
    );
};

Myself.propTypes = {
    asset:PropTypes.array.isRequired
}

export default Myself;