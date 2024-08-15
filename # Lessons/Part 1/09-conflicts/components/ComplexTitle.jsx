import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>

      {/* 2. */}
      <div className='underline'></div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  /* 1. use class here */
  .underline {
    height: 5px;
    background-color: crimson;
    width: 5rem;
    margin: 0 auto;
  }
`

export default ComplexTitle
