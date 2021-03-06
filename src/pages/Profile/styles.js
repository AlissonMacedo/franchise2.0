import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    hr {
      border: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    div {
      display: flex;
    flex-direction: column;
    align-items: flex-end;

    button {
    margin: 5px 0 0;
    height: 42px;
    width: 172px;
    background: #F94D6A;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 19px;
    transition: background 0.2s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0;

    &:hover {
      background: ${darken(0.03, '#F94D6A')}
    }
  }
    }

}
`;


