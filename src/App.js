import './App.css';

const app = () => {
  const cart = [
        {name: "mobail",price:13000,quantity:4,discripion:"best mobail qulity"},
        {name: "tv",price:25000,quantity:3,discripion:"best tv qulity"},
        {name: "freez",price:16000,quantity:2,discripion:"best frrez qulity"},
        {name: "ac",price:5765,quantity:4,discripion:"best ac qulity"},
        {name: "cloths",price:7543,quantity:9,discripion:"best cloths qulity"},
        {name: "bike",price:36646,quantity:1,discripion:"best bike qulity"}
]
console.info("cart++",cart)

return (
  <div className="content">
         <h1>Products</h1>
    <div className="App"></div>
     <table border={1} >
          <thead>
                 <tr>
                      <th> Id</th>
                      <th> Name</th>
                      <th> Mobail no.</th>
                      <th> Color</th>
                 </tr>
          </thead>
          <tbody>
            {
              cart.map((i , index) => {
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{i?.name}</td>
                    <td>{i?.price}</td>
                    <td>{i?.quantity}</td>
                    <td>{i?.discripion}</td>
                  </tr>
                )
              })
            }
         
          </tbody>
     </table>
     
  </div>
)

}
export default App;
 

