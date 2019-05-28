import styled from 'styled-components';

export const Container = styled.aside`
  width: 20%;
  background: #fff;
  border: 3px solid rgba(145, 140, 140, 0.3);
  position: absolute;
  left: 1%;
  top: 2%;
  height: 95%;
  border-radius: 5px;
  overflow: auto;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      display: flex;

      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 15px 0;
      border-bottom: 1px solid #efefef;
      width: 85%;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }

      #description {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-left: 10px;

        p {
          color: #302f30;
          font-size: 18px;
          font-weight: bold;
        }

        span {
          color: #b3b2b3;
          font-size: 13px;
          font-weight: bold;
        }
      }

      button {
        background: #f00;
        border: 0;
        width: 20px;
        height: 20px;
        border-radius: 50%;

        color: #fff;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
`;
