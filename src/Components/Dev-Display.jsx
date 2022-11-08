
const DevDisplay = ({DevDisplay}) => {
    const [defautNum, opperator, newNum] = DevDisplay;
    return(
        <section>
            <p>{defautNum}</p><p>{opperator}</p><p>{newNum}</p>
        </section>
    )
}
export default DevDisplay;