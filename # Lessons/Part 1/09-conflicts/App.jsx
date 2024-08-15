/*
  Conflicts
  - though we use the same ".underline" in <ComplexTitle> & <Underline> -> there's no conflicts


*/

import ComplexTitle from './components/ComplexTitle'
import Underline from './components/Underline'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <ComplexTitle title={'Hello World'} />
      <Underline />
    </div>
  )
}

export default App
