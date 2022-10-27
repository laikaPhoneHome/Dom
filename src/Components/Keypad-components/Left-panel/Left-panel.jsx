import MU from './Mark-up';
import Ambivalence from './Ambivalence';
import SQRT from './Square-root';
import CE from './Clear-entry';

const Leftpanel =({handleInput}) => {
    return (
        <section className='left-buttons'>
            <MU handleInput={handleInput}/>
            <Ambivalence handleInput={handleInput}/>
            <SQRT handleInput={handleInput}/>
            <CE />
        </section>
    )
}
export default Leftpanel;