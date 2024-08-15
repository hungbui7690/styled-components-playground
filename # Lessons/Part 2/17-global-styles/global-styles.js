import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root {
  --primary: lightpink;
  --secondary: crimson;
  --white: white;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: lightgrey;
}

.btn {
  background: #645cff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  padding: 0.25rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
}

`

export default GlobalStyles
