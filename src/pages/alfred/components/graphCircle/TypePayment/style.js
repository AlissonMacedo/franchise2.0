import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffff;
  padding: 10px;
  margin: 0 0px;
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

export const DivLoading = styled.div`
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
`;

export const DivLabels = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Labels = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: center;
  justify-content: center;

  span.title {
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: #555;
  }
  span.value {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: #555;
    margin-top: 5px;
  }

  div.divCircle {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  div.circle-red {
    width: 10px;
    height: 10px;
    margin: 0 10px;
    border-radius: 50%;
    background-color: #e64c1d;
  }

  div.circle-green {
    width: 10px;
    height: 10px;
    margin: 0 10px;
    border-radius: 50%;
    background-color: #6ecb98;
  }
`;
