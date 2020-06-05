import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BoxProducts = styled.div`
  width: 100%;
  max-width: 1247px;
  display: flex;
  padding: 16px;
`;

export const Products = styled.div`
  width: 100%;
  display: flex;
  margin-top: 56px;
`;

export const BoxImage = styled.figure`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: center;

  .product__image {
    width: 100%;
  }
`;

export const BoxDescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.5rem 1rem;

  .product__description--title {
    font-size: 1.2rem;
    color: #000;
  }

  .product__description--choice {
    font-size: 0.9rem;
    color: #a7a7a7;
  }

  .product__description--button-add {
    width: 50%;
    background: #212529;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.5);
    font-size: 1rem;
    color: #fff;
    outline: none;
    padding: 0.5rem;
    text-align: center;
  }
`;

export const BoxPrice = styled.div`
  margin: 4px 0 15px 0;

  .product__description--price {
    font-size: 1rem;
    font-weight: bold;
  }

  .product__description--parcel {
    font-size: 0.9rem;
    font-weight: bold;
    color: #a7a7a7;
    margin-left: 10px;
  }
`;
export const BoxSize = styled.div`
  display: flex;
  margin: 10px 0 20px 0;

  .product__description--button-size {
    width: 2.1rem;
    height: 2.1rem;
    background: transparent;
    font-size: 1rem;
    font-weight: 600;
    border: 1px solid #dfdfdf;
    outline: none;
    border-radius: 4px;
    margin-right: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
