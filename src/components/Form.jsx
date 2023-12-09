import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({costDescription: '', costPrice: 0,});
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const costDescriptionHandler = (e) => {
        setFormData({...formData, costDescription : e.target.value});
    };
    const costPriceHandler = (e) => {
        setFormData({...formData, costPrice : e.target.value});
    };
  return (
    <form onSubmit={submitHandler} className="frmInputData">
      <div className='input-container'>
                <input type="text" className='txtCostDescription' placeholder='شرح هزینه' onBlur={costDescriptionHandler}/>
                <input type="number" className='txtCostPrice' placeholder='مبلغ هزینه'  onBlur={costPriceHandler}/>
            </div>
      <button className="btnSaveCost">ثبت هزینه</button>
    </form>
  );
};

export default Form;
