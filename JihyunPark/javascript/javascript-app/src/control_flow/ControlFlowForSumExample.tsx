export const ControlFlowForSumExample = () => {
    let loopResultArray = []
    let summation = 0

    // j 기준에서는 2
    // i 기준에서는 5로 지정하면 됨
    for (let i = 1, j = 0; i <= 2; i += 2, j++) {
        loopResultArray.push(i)
        summation += loopResultArray[j]
    }

    return (
        <div>
            <h3>javascript 제어문 (summation - example)</h3>

            <pre>{
                `
loopResultArray = ${loopResultArray}
summation = ${summation}
                `
            }</pre>
        </div>
    )
}