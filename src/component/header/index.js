
import React from 'react'
import { HeaderStyle } from './style'
// import iconHouse from './iconHouse'

export const Header = () => {
  return (
    <div>
      <HeaderStyle>
        <div className="btn-back">
          <span>Back</span>
          <div className="icon-back">
            <div
              style={{
                boxSizing: "border-box",
                height: "20px",
                width: "8px",
                border: "2px solid #000000",
                borderRight: "none",
              }}
            ></div>
            <div
              style={{
                boxSizing: "border-box",
                height: "1px",
                width: "12px",
                borderTop: "2px solid #000000",
              }}
            ></div>
            <div className="stroke-3"></div>
          </div>
           
        </div>
        <div className='mid-header'>
          <img className='icon-mid-header' src='/apartment.png' alt="back"/>
          <div className="title-header"><span>青木中央病院第二ビル-5-棟東側工事</span></div>
          <div className ="line-header"></div>
          <img height="48px" src='/menu.png' alt="menu"/>
        </div>
        <div className="right"></div>
      </HeaderStyle>
    </div>
  )
}
