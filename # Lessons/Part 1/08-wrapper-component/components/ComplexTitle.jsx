import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
  // 2. use Wrapper here
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div></div>
    </Wrapper>
  )
}

// 1.
const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  div {
    height: 5px;
    background-color: crimson;
    width: 5rem;
    margin: 0 auto;
  }
`

export default ComplexTitle
