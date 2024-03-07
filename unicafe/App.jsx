import { useState } from "react"

const Header = () => <h1>give feedback</h1>


const StatisticLine = ({ text, value }) => <div>{text}  {value}</div>

const Button = ({ handleClick, write }) => (
  <button onClick={handleClick}>
    {write}
  </button>
)






const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)


  const sum = good + bad + neutral

  const average = (good - bad) / sum
  const averageAnswer = average.toFixed(1)

  const positive = (good / sum) * 100
  const positiveAnswer = positive.toFixed(1)

  /*
  if (sum === 0) {
    return (
      <div>
        <Header />
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <h2>statistics</h2>
        <div>No feedback given</div>
      </div>
    )
  }
  */


  return (

    <div>
      <Header />
      <Button handleClick={handleGoodClick}write='good'/>
      <Button handleClick={handleNeutralClick}write='neutral'/>
      <Button handleClick={handleBadClick}write='bad'/>
      {sum === 0 && <p>No feedback yet given.</p>}
      {sum > 0 && (
        <>
          <h2>statistics</h2>
          <table >
            <tbody>
            <tr><td><StatisticLine text="good" /></td><td><StatisticLine value={good} /></td></tr>
            <tr><td><StatisticLine text="neutral" /></td><td><StatisticLine value={neutral} /></td></tr>
            <tr><td><StatisticLine text="bad" /></td><td><StatisticLine value={bad} /></td></tr>

            <tr><td>all</td><td>{sum}</td></tr>
            <tr><td>average</td><td>{averageAnswer}</td></tr>
            <tr><td>positive</td><td> {positiveAnswer}%</td></tr>
            </tbody>
          </table>
        </>)}
    </div>
  )
}

export default App
