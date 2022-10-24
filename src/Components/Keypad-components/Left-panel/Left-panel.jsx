import MU from './Mark-up';
import Ambivalence from './Ambivalence';
import SQR from './Square-root';
import CE from './Clear-entry';

const Leftpanel =({handleInput}) => {
    return (
        <section className='left-buttons'>
            <MU handleInput={handleInput}/>
            <Ambivalence />
            <SQR />
            <CE />
        </section>
    )
}
export default Leftpanel;