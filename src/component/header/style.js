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
    border: 2px solid #989BA3;
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
    color: black;
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
    border-right: #989BA3;
    border: 1px solid #989BA3;
    margin-right: 20px;
  }
  .right{
    width: 48px;
  }
  .dropdown{
    float: right;
    overflow: hidden;
  }
  .menu{
    position: relative;
    cursor: pointer;
  }
  .menu-sub{
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 204px;
    height: auto;
    background-color: white;
    margin-top: -10px;
    margin-left: -156px;
    box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.3);
    font-size: 12px;
    font-family: 'Hiragino Sans W4';
  }
  .menu-sub-display{
    display: none;
  }


  
  .option-1{
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    border-bottom: solid 1px #989BA3;
    img{
      margin-right: 22px;
    }
    .select-option{
      transform: rotate(180deg);
    }
  }
  .option-2{
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    border-bottom: solid 1px #989BA3;
    justify-content: space-between;
    .option-2-left{
      img{margin-right: 22px;}
      display: flex;
      align-items: center;
    }
    .option-2-right{
      transform: rotate(180deg);
      margin-right: 10px;
    }
  }
  .option-3{
    height: 40px;
    width:  204px;
    display: inline-block;
    border-bottom: solid 1px #989BA3;
  }
  .option-4{
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 22px;
    border-bottom: solid 1px #989BA3;
    justify-content: space-between;
    .option-4-left{
      img{margin-right: 10px; margin-bottom: 10px}
      display: flex;
      align-items: center;
      .text-1{
        font-size: 10px;
        font-family: 'SF Pro Text Regular';
        color: #9DA0A3;
      }
    }
    .option-4-right{
      transform: rotate(180deg);
      margin-right: 10px;
      margin-bottom: 5px;
    }
  }
  .option-5{
    height: 74px;
    display: flex;
    align-items: center;
    border-bottom: solid 1px #989BA3;
    justify-content: center;
    .bt-option-5{
      width: 163px;
      height: 41px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: solid 1px #979797;
      border-radius: 19px;
    }
}
`

