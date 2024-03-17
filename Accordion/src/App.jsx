
import './App.css'
import Accordion from './Accordion'
import questions from './Data'

function App() {

  return (
    <>
      {questions.map((question) => <Accordion question={question}/>)}
    </>
  )
}

export default App
