import styled from 'styled-components'

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  img {
    height: 200px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`
