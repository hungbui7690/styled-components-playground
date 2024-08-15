/*
  Global Styles 
  - 2 methods:
    1. index.css
    2. styled components 
      # create global-styles.js 
      # cut from index.css 
      # import and use -> place on top of Card component
  

*/

import Card from './Card'
import GlobalStyles from './global-styles'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyles />
      <Card />
    </div>
  )
}

export default App
