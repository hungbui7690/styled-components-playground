/*
  Simple Props


*/

import BasicTitle from './components/BasicTitle'
import { Button } from './components/Button'

function App() {
  return (
    <div style={{ padding: '2rem', backgroundColor: 'lightgrey' }}>
      <BasicTitle>Hello World</BasicTitle>
      <BasicTitle special='true'>Hello World</BasicTitle>
      <Button>Click Me</Button>
    </div>
  )
}

export default App
