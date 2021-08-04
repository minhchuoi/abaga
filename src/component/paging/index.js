
import React from 'react'
import { PagingStyle } from './style'

export const Paging = () => {
  return (
    <PagingStyle>
      <div className="start-paging">
        <div className='select-btn'>
          <span className='number'>10</span>
          <img height="7px" src='/triangle.png' alt="menu"/>
        </div>
        <span>件表示 /（<span className='number'>50</span>件中）</span>
      </div>
      <div className='mid-paging'>
        <img className='icon-back' height="14px" src='/back.png' alt="back"/>
        <div className='number-page-select'>1</div>
        <div className='number-page'>2</div>
        <div className='number-page'>3</div>
        <div className='number-page'>4</div>
        <div className='number-page'>5</div>
        <img className='icon-next' height="14px" src='/back.png' alt="back"/>
      </div>
      <div className='right'></div>
    </PagingStyle>
  )
}
