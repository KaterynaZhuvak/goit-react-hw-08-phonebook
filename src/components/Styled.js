import styled from 'styled-components';

export const StyledBook = styled.div`
.container {
  margin-right: auto;
  margin-left: auto;
  width: 1200px;
  height: 100%;
  padding: 0px 20px;
}

  .header-styled {
    background-color:  rgb(224, 241, 245);
    // animation: animate 2s linear infinite;
    // box-shadow: 0px 0px 50px green,
    //   0px 0px 50px deepskyblue;
    height: 100px;
  }

  header nav div {
    padding: 20px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    list-style-type: none;
  }

  .nav-link {
    text-decoration: none;
    display: inline-block;
    padding: 10px;
    border-radius: 15px;
    border: 1px solid rgb(21, 21, 65);
    background-color:  rgb(224, 241, 245);
    color: rgb(21, 21, 65);
  }

  header .active {
    background-color: rgb(21, 21, 65);
    color: #ffffff;
  }

  .button-log-out {
    border: none;
    background: transparent;
    font-size: 18px;
    color: rgb(21, 21, 65);
    cursor: pointer;
    transition: 0.4s;
  }

  .button-log-out:hover,
  .button-log-out:focus {
    transform: scale(1.3)
  }
`;
