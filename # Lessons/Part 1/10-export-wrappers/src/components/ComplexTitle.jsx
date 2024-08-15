import styled from 'styled-components'

const ComplexTitle = (props) => {
  console.log(props) // className, title

  // 3. we need to have className here -> otherwise, there's no styles
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <div className='underline'></div>
    </div>
  )
}

// 1. extends ComplexTitle
const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    height: 5px;
    background-color: crimson;
    width: 5rem;
    margin: 0 auto;
  }
`

export default Wrapper // 2.
