import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #ffff;
  padding: 10px;
  display: flex;

  height: 430px;
  width: 360px;
  flex-direction: column;
  border-radius: 10px;
`;

export const Header = styled.div`
  height: 40px;
  align-items: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;
  border-bottom: 1px solid #eee;

  span {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #555;
  }
`;

export const DivError = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  span {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #555;
    margin: 10px;
  }

  button {
    padding: 0 15px;
    margin: 5px 0 0;
    height: 44px;
    background: #e64b16;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#e64b16')};
    }

    span {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      color: #fff;
      margin: 10px;
    }
  }
`;

export const DivLoading = styled.div`
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

export const DivMaster = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
`;

export const DivCenter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DivNames = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 24px;
    font-family: 'Roboto-medium', sans-serif;
    margin-bottom: 10px;
    color: #666;
  }
  h2 {
    font-size: 34px;
    font-family: 'Roboto-medium', sans-serif;
    color: #555;
  }

  .classPercentege {
    display: flex;
    flex-direction: row;
    align-items: center;

    justify-content: center;
  }
`;

export const DivLastWeek = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding-top: 10px;

  span {
    font-size: 16px;
    font-family: 'Roboto-medium', sans-serif;
    color: #888;
  }
`;
