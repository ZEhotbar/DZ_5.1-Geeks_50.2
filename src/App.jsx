import './App.css'
import Cards from './companents/Cards/Cards'

const App = () => {
  return (
    <div className="wrapper">
      <div className="header">
        <h1>Cards</h1>
        <h3>Cars all</h3>
      </div>
      <div className="cards">
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>
  )
}

export default App
