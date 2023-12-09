import React, { useState } from 'react'

const Cost = ({data}) => {
  const [costPrice, setCostPrice] = useState(data.costPrice);
  const editCost = (e) => {
    data.costPrice = costPrice;
    setCostPrice(data.costPrice + 1000);
  };
  const deleteCost = (e) => {};
  return (
    <div className='cost-container'>
        <div className='content-container'>
            <div className='cost-description'>شرح هزینه: {data.costDescription}</div>
            <div className='cost-price'>مبلغ هزینه: {data.costPrice} تومان</div>
        </div>
        <div className='button-container'>
            <button type="button" className='btn-edit' onClick={editCost}>ویرایش</button>
            <button type="button" className='btn-delete' onClick={deleteCost}>حذف</button>
        </div>
    </div>
  )
}

export default Cost