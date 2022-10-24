
const Opporators = ({handleInput}) => {
    return (
    <section>
        <button id="÷" onClick={handleInput}>÷</button>
        <button id="x"onClick={handleInput}>x</button>
        <button id="%"onClick={handleInput}>%</button>
        <button id="+"onClick={handleInput}>+</button>
        <button id="-"onClick={handleInput}>-</button>
    </section>
    )
}
export default Opporators;