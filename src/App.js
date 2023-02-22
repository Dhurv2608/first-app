import './App.css';

const App = () => {
  const cart = [
    { name: "mobail", price: 13000, quantity: 4, discripion: "best mobail qulity" },
    { name: "tv", price: 25000, quantity: 3, discripion: "best tv qulity" },
    { name: "freez", price: 16000, quantity: 2, discripion: "best frrez qulity" },
    { name: "ac", price: 5765, quantity: 4, discripion: "best ac qulity" },
    { name: "cloths", price: 7543, quantity: 9, discripion: "best cloths qulity" },
    { name: "bike", price: 36646, quantity: 1, discripion: "best bike qulity" }
  ];
  const xyz = cart.filter(a => a.quantity >= 3 );
  const totalPrice = xyz.reduce((acc,curr) => {
    return acc + curr.price
  },0)
  const totalquantity = xyz.reduce((acc,curr) => {
    return acc + curr.quantity
  },0)
  const total = xyz.reduce((acc,curr) =>{
            return acc + (curr.price * curr.quantity)
  },0);
  return (
    <div className="content">
      <h1>Products</h1>
      <div className="App">
        <table className="border" >
          <thead>
            <tr>
              <th className="border"> Id</th>
              <th className="border"> Name</th>
              <th className="border"> Discripion</th>
              <th className="border"> Quantity</th>
              <th className="border"> Price</th>
               <th  className="border">Total</th>
            </tr>
     
          </thead>
          
          <tbody>
              {
              xyz.map((i, index) => {
                return (
                  <tr key={index}>
                    <td className="border">{index + 1}</td>
                    <td className="border">{i?.name}</td>
                    <td className="border">{i?.discripion}</td>
                    <td className="border">{i?.quantity}</td>
                    <td className="border">{i?.price}</td>
                    <td  className="border">{i?.price * i?.quantity}</td>
                  </tr>
                  
                )
              })
            }
            <tr>
                <td  className="border" colspan={3}>Total</td>
                <td  className="border" >{totalquantity}</td>
                <td  className="border" >{totalPrice}</td>
                <td  className="border" >{total}</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  )
}
export default App;


