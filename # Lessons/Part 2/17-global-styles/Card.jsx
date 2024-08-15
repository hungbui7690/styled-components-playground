import styled from 'styled-components'

const Card = () => {
  return (
    <StyledCard>
      <img src='../images/mainBcg.jpeg' alt='' />
      <footer>
        <h4>Dark Roasted Coffee</h4>
        <p>$15</p>
      </footer>
      <p>Description</p>
    </StyledCard>
  )
}

const StyledCard = styled.article`
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
      &::before {
        content: 'Name: ';
        color: darkcyan;
      }
    }
    & h4:hover {
      color: green;
    }
    p {
      color: orangered;
      font-style: normal;
      font-weight: 900;
    }
  }
  &:hover {
    box-shadow: 0 1px 1px #222;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`

export default Card
