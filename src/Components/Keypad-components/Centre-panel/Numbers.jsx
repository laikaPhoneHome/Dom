const NumberButtons = ({handleInput}) => {

    return (
    <section className="number-grid">
        <button id="7" onClick={handleInput}>7</button>
        <button id="8" onClick={handleInput}>8</button>
        <button id="9" onClick={handleInput}>9</button>
        <button id="4" onClick={handleInput}>4</button>
        <button id="5" onClick={handleInput}>5</button>
        <button id="6" onClick={handleInput}>6</button>
        <button id="1" onClick={handleInput}>1</button>
        <button id="2" onClick={handleInput}>2</button>
        <button id="3" onClick={handleInput}>3</button>
        <button id="0" onClick={handleInput}>0</button>
        <button id="00" onClick={handleInput}>00</button>
        <button id="." onClick={handleInput}>.</button>
    </section>
    )
}

export default NumberButtons;