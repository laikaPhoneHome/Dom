import Equals from "./Equals"
import Memory from "./Memory";
import ON from "./On";
import Opporators from "./Opperators"

const Rightpanel = ({handleInput}) => {
    return (
        <section className="right-buttons">
            <ON handleInput={handleInput}/>
            <Opporators handleInput={handleInput}/>
            <Equals handleInput={handleInput}/>
            <Memory />
        </section>
    )
}
export default Rightpanel;