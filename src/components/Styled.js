import styled from 'styled-components';

export const StyledBook = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 428px;
  height: 816px;
  padding: 0px 20px;
  overflow: scroll;
  border: 1px solid #9dc180;

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
    border: 1px solid #9dc180;
    background-color: #ffffff;
    color: #9dc180;
  }

  header .active {
    background-color: #9dc180;
    color: #ffffff;
  }

  .button-log-out {
    border: none;
    background: transparent;
    font-size: 18px;
    color: #9dc180;
    cursor: pointer;
    transition: 0.4s;
  }

  .button-log-out:hover,
  .button-log-out:focus {
    transform: scale(1.3)
  }
`;
