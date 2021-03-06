import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxProducts = styled.div`
  position: relative;
  width: 100%;
  max-width: 1247px;
  display: flex;
  padding: 16px;

  @media (max-width: 1200px) {
    padding: 0;
  }
`;
