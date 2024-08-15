import styled from 'styled-components'

const Underline = () => {
  return (
    <Wrapper>
      <div className='underline'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .underline {
    height: 5px;
    background-color: darkseagreen;
    width: 5rem;
    margin: 1rem auto;
  }
`

export default Underline
