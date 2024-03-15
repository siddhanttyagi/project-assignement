import { useSelector } from 'react-redux'
import PieChart from './PieChart'

function Dashboard() {
    const products = useSelector(state => state.productReducer.products)
    const orders = useSelector(state => state.orderReducer.orders)
    const productLength=products.length;
    const orderLength=orders.length
  return (
    <>
      <div>
        <div className='text-indigo-400 underline text-3xl mt-5 font-serif'>TOTAL NUMBERS OF PRODUCTS🔍</div>
        <p className='text-4xl text-yellow-500 mt-3 font-bold'>{products.length}</p>
      </div>
      <hr className="my-4 border-t-1 border-gray-400 widt" />
      <div>
        <div className='text-indigo-400 underline text-3xl mt-5 font-serif'>TOTAL NUMBERS OF ORDERS🎉🎉</div>
        <p className='text-4xl text-yellow-500 mt-3 font-bold'>{orders.length}</p>
      </div>
      <hr className="my-4 border-t-1 border-gray-400 widt" />
      <PieChart productLength={productLength} orderLength={orderLength} />
    </>
  )
}

export default Dashboard