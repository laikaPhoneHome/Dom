import Equals from "./Equals"
import Memory from "./Memory";
import ON from "./On";
import Opporators from "./Opperators"

const Rightpanel = ({handleInput}) => {
    return (
        <section className="right-buttons">
            <ON />
            <Opporators handleInput={handleInput}/>
            <Equals />
            <Memory />
        </section>
    )
}
export default Rightpanel;