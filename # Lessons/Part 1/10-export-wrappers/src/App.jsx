/*
  Export Wrapper
  - alternative syntax


*******************************

  1. components/ComplexTitle


*/

import ComplexTitle from './components/ComplexTitle' // though we export Wrapper -> we still import ComplexTitle

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <ComplexTitle title={'Hello World'} />
    </div>
  )
}

export default App
