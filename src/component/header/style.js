import styled from "@emotion/styled";

export const HeaderStyle = styled.div`
  font-family: "Hiragino Sans";
  background-color: #dee2e6;
  height: 80px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  padding: 0 0 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn-back {
    align-items: flex-end;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    height: 48px;
    width: 48px;
    font-size: 12px;
  }

  .icon-back{
    display: flex;
    align-items: center;
  }

  .stroke-3 {
    box-sizing: border-box;
    height: 10px;
    width: 10px;
    border: 2px solid #000000;
    transform: rotate(45deg);
    border-left: none;
    border-bottom: none;
    margin-left: -10px;
  }

  .mid-header{
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .title-header{
    height: 30px;
    padding-top: 5px;
    color: #363B40;
    font-family: "Noto Sans JP";
    font-size: 16px;
    margin-left: 10px;
    margin-right: 20px;
  }
  .icon-mid-header{
    height: 30px;
  }

  .line-header{
    height: 18px;
    border-right: #363B40;
    border: 1px solid #000000;
    margin-right: 20px;
  }
  .right{
    width: 48px;
  }
`

