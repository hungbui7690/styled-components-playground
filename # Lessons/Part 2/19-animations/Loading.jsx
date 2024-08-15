import { styled, keyframes } from 'styled-components' // 1. import {keyframes}

// 2. create keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loading = styled.div`
  width: 6rem;
  height: 6rem;
  border: 5px solid #ccc;
  border-radius: 50%;
  border-top-color: var(--primary);

  /* 3. */
  animation: ${rotate} 2s linear infinite;
`

export default Loading
