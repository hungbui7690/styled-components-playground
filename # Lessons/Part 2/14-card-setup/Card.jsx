import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
      <img src='../images/mainBcg.jpeg' alt='' />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
    </StyledCard>
  )
}

const StyledCard = styled.article``

export default Card
