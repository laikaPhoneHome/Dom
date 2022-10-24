import DisplayNotation from "./Notation-display";
import IconDisplay from "./Icon-display";


const Display = ({icons, notations, displayNum}) => {
    return <section className="display">
        <DisplayNotation notations={notations}/>
        <p className="number-display">{displayNum}</p>
        <IconDisplay icons={icons}/>
    </section>
}

export default Display;