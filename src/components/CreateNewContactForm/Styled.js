import styled from 'styled-components';

export const StyledNewContactForm = styled.div`
  .input-title {
    color: rgb(21, 21, 65);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-bottom: 10px;
  }

  .title {
    font-size: 40px;
    color: rgb(245, 239, 232);
    text-align: center;
    margin: 40px 0px;
  }

  .box-shadow {
    padding: 15px;
    width: 351px;
    height: 273px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 15px;
    background-color: rgb(245, 239, 232);
    animation: animate 2s linear infinite;
    box-shadow: 0px 0px 50px green, 0px 0px 50px deepskyblue;
  }

  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  .input {
    font-size: 18px;
    width: 300px;
    border: none;
    border-bottom: 1px solid rgb(21, 21, 65);
    background-color: transparent;
    margin-bottom: 20px;
  }

  .button-add-contact {
    width: 150px;
    padding: 15px;
    background-color: #9dc180;
    border: none;
    border-radius: 15px;
    color: #fff;
    font-size: 18px;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translate(-50%, 0%);
    cursor: pointer;
    transition: 0.4s;
  }

  .button-add-contact:hover,
  .button-add-contact:focus {
    border: 1px solid #9dc180;
    background-color: #ffffff;
    color: #9dc180;
  }
`;
