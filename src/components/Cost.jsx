import React from 'react'

const Cost = (props) => {
  return (
    <div className='cost-container'>
        <div className='content-container'>
            {/* <div className='cost-description'>{props.costDescription}</div>
            <div className='cost-price'>{props.costPrice} تومان</div> */}
            <div className='cost-description'>شرح هزینه: {props.data.costDescription}</div>
            <div className='cost-price'>مبلغ هزینه: {props.data.costPrice} تومان</div>
        </div>
        <div className='button-container'>
            <button type="button" className='btn-edit'>ویرایش</button>
            <button type="button" className='btn-delete'>حذف</button>
        </div>
    </div>
  )
}

export default Cost