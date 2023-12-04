import styled from 'styled-components';

export const StyledList = styled.div`
  .profile-photo {
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;
    repeat: no-repeat;
    background-size: cover;
  }

  .no-contacts-title {
    color: rgb(245, 239, 232);
    font-size: 20px;
  }

  .list-name {
    list-style-type: none;
    display: flex;
    padding: 15px 0px;
    gap: 30px;
    justify-content: baseline;
    align-items: center;
    padding-left: 10px;
    position: relative;
    color: white;
    font-size: 18px;
    font-style: normal;
    font-weight: 300px;
    line-height: normal;
    transition: 0.4s;
  }

  .list-name:hover,
  .list-name:focus {
    background-color: rgb(224, 241, 245);
    color: black;
    fill: black;
  }

  .remove-btn {
    border: none;
    background-color: transparent;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50px;
    right: 40px;
    cursor: pointer;
    transform: translateX(0);
    transition: 0.4s;
    fill: white;
  }

  .list-name:hover .remove-btn,
  .list-name:hover .favorite-btn {
    fill: black;
  }

  .remove-btn:hover,
  .remove-btn:focus {
    transform: translateX(0.5rem);
  }

  .main-title {
    color: white;
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
  }
  .contacts-list {
    padding: 0px;
    overflow: hidden;
  }

  .favorite-btn {
    background-color: transparent;
    border: none;
    fill: white;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50px;
    right: 100px;
    cursor: pointer;
    transition: 0.4s;
  }

  .favorite {
    fill: red;
  }

  // .favorite-btn:hover {
  //   transform: scale(1.3);
  //   fill: black;
  // }
`;
