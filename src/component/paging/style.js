import styled from "@emotion/styled";

export const PagingStyle = styled.div`
  font-family: "Hiragino Sans";
  margin-top: 20px;
  background-color: #dee2e6;
  height: 60px;
  width: 1040px;
  box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.3);
  background-color: #ffffff;
  padding: 0 0 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 48px;
  padding-right: 48px;
  .start-paging{
    display: flex;
    align-items: center;
    span{
      font-size: 12px;
    }
  }
  .number{
    font-family: "SF Pro Text";
  }
  .select-btn{
    box-sizing: border-box;
    width: 54px;
    height: 29px;
    border: 1px solid #CED4DA;
    border-radius: 3px;
    background-color: #F8F9FA;
    font-size: 13px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 10px;
  }
  .mid-paging{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "SF Pro Text";
    .icon-next{
      transform: rotate(180deg);
      margin-left: 13px;
      &:hover{
        cursor: pointer;
      }
    }
    .icon-next-disabled{
      transform: rotate(180deg);
      margin-left: 13px;
      pointer-events: none;
    }
    .icon-prev{
      margin-right: 13px;
      &:hover{
        cursor: pointer;
      }
    }
    .icon-prev-disabled{
      margin-right: 13px;
      pointer-events: none;
    }
    .number-page{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      width: 32px;
      height: 32px;
      cursor: pointer;
    }
    .number-page-select{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      width: 32px;
      height: 32px;
      background-color: #E4E4E4;
      border-radius: 50%;
    }
    .number-page-disabled{
      display: none;
    }
  }
  .right{
    width: 159px;
  }
`