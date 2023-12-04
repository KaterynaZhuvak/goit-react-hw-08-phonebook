import styled from 'styled-components';

export const StyledLoginForm = styled.div`
  padding-top: 30px;

  .title {
    font-size: 30px;
    text-align: center;
    color: rgb(245, 239, 232);
  }
  input {
    margin-right: auto;
    margin-left: auto;
    display: block;
    margin-bottom: 30px;
    font-size: 18px;
    width: 50%;
    border-radius: 10px;
    height: 30px;
    background-color: white;
    padding: 5px;
  }

  .btn-log {
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
    min-height: 30px;
    background-color: #9dc180;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    padding: 10px;
    color: black;
    cursor: pointer;
    background-color: #9dc180;
    animation: animate 2s linear infinite;
    box-shadow: 0px 0px 50px green, 0px 0px 50px deepskyblue;
  }

  .btn-log:hover,
  .btn-log:focus {
    background-color: rgb(245, 239, 232);
    color: black;
  }
`;
