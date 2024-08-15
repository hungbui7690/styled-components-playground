import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
      <img src='../images/mainBcg.jpeg' alt='' />
      <footer>
        <h4>product name</h4>
        <p>$15</p>
      </footer>
      <p>Description</p>
    </StyledCard>
  )
}

// #
const StyledCard = styled.article`
  /* 
    article
      img
      footer
        h4
        p
      p
  */

  width: 90vw;
  max-width: 300px;
  background-color: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    object-fit: cover;
  }
  p {
    font-style: italic;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      text-transform: capitalize;
    }
    p {
      color: orangered;
      font-style: normal;
      font-weight: 900;
    }
  }
`

export default Card
