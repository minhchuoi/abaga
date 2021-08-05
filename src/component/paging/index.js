
import React, {useState} from 'react'
import { PagingStyle } from './style'

export const Paging = () => {
  const sumPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const goToNextPage=()=>{
    setCurrentPage((page)=>page+1)
  }
  const goToPrevPage=()=>{
    setCurrentPage((page)=>page-1)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / 5) * 5;
    return new Array(5).fill().map((_, idx) => start + idx + 1);
  };
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
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
        <img onClick={goToPrevPage} className={`icon-prev${currentPage === 1?'-disabled':''}`} height="14px" src='/back.png' alt="prev"/>
        
        {getPaginationGroup().map((item, index) => {
          // if(index<=sumPage)
            return(<div key={index} onClick={changePage} className={`number-page${currentPage === item ? '-select' : ''}${item > sumPage?'-disabled':'' }`}>{item}</div>)
          // return(<div></div>)
        })}
        
        <img onClick={goToNextPage} className={`icon-next${currentPage >= sumPage?'-disabled':'' }`} height="14px" src='/back.png' alt="back"/>
      </div>
      <div className='right'></div>
    </PagingStyle>
  )
}
