import MU from './Mark-up';
import Ambivalence from './Ambivalence';
import SQR from './Square-root';
import CE from './Clear-entry';
import SQRT from './Square-root';

const Leftpanel =({handleInput}) => {
    return (
        <section className='left-buttons'>
            <MU handleInput={handleInput}/>
            <Ambivalence />
            <SQRT handleInput={handleInput}/>
            <CE />
        </section>
    )
}
export default Leftpanel;