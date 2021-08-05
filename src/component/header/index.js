
import React, {useState} from 'react'
import { HeaderStyle } from './style'
// import iconHouse from './iconHouse'

export const Header = () => {
  const [menuSub, setMenuSub] = useState('menu-sub-display')
  return (
    <HeaderStyle>
      <div className="btn-back">
        <span>Back</span>
        <div className="icon-back">
          <div
            style={{
              boxSizing: "border-box",
              height: "20px",
              width: "8px",
              border: "2px solid #989BA3",
              borderRight: "none",
            }}
          ></div>
          <div
            style={{
              boxSizing: "border-box",
              height: "1px",
              width: "12px",
              borderTop: "2px solid #989BA3",
            }}
          ></div>
          <div className="stroke-3"></div>
        </div>

      </div>
      <div className='mid-header'>
        <img className='icon-mid-header' src='/apartment.png' alt="back" />
        <div className="title-header"><span>青木中央病院第二ビル-5-棟東側工事</span></div>
        <div className="line-header"></div>
        <div className='dropdown'>
          <img onMouseOver={()=>setMenuSub('menu-sub')}
                onMouseOut={()=>setMenuSub('menu-sub-display')}
          className='menu' height="48px" src='/menu.png' alt="menu" />
          <div 
          onMouseOver={()=>setMenuSub('menu-sub')}
          onMouseOut={()=>setMenuSub('menu-sub-display')}
          className={menuSub}>
            <div className='option-1'>
              <img height='20px' src='/avatar.png' alt='' />
              <span>利用者一覧を見る</span>
            </div>
            <div className='option-2'>
              <div className='option-2-left'>
                <img height='20px' src='/pencil.png' alt='' />
                <span>現場を登録する</span>
              </div>
              <img className="option-2-right" height='9px' src='/back.png' alt='' />
            </div>
            <div className='option-3'></div>
            <div className='option-4'>
              <div className='option-4-left'>
                <img height='20px' src='/avatar.png' alt='' />
                <div>
                  <span>現場を登録する</span>
                  <span className='text-1'>watanabe@email.co.jp</span>
                </div>
              </div>
              <img className="option-4-right" height='9px' src='/back.png' alt='' />
            </div>
            <div className='option-5'>
              <div className='bt-option-5'>
                <span>ログアウト</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="right"></div>

    </HeaderStyle>
  )
}
