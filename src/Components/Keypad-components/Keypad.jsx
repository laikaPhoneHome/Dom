import NumberButtons from "./Centre-panel/Numbers";
import Leftpanel from "./Left-panel/Left-panel";
import Rightpanel from "./Right-panel/Right-panel";

const Keypad = ({handleInput}) => {
    return <section className="keypad">
        <Leftpanel handleInput={handleInput}/>
        <NumberButtons handleInput={handleInput}/>
        <Rightpanel handleInput={handleInput}/>
    </section>
}

export default Keypad;