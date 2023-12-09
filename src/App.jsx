import './App.css'
import Cost from './components/Cost.jsx'

function App() {
  const myCosts = [
    {costId: 1, costDescription: "خرید لپ تاپ", costPrice:25000000},
    {costId: 2, costDescription: "خرید موبایل", costPrice:12500000},
    {costId: 3, costDescription: "خرید ساعت هوشمند", costPrice:6250000},
    {costId: 4, costDescription: "خرید هندزفری", costPrice:3125000},
    {costId: 5, costDescription: "خرید کتاب", costPrice:1562500},
    {costId: 6, costDescription: "خرید لباس", costPrice:15000000},
  ];

  return (
    <div className='costs-container'>
      <span className='costs-list'>لیست هزینه‌ها</span>
      {myCosts.map((cost) => {
        // return <Cost key={cost.costId} costDescription={cost.costDescription} costPrice={cost.costPrice}/>
        return <Cost key={cost.costId} data={cost}/>
      })}
    </div>
  )
}

export default App
