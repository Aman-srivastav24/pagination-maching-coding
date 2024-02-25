
import { useEffect, useState } from 'react'


import './App.css';


function App() {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setProduct(data.products)
    
  }
  

  useEffect(() => {
    fetchProduct();
  }, [])
  console.log(product)
  return (
    <div className="App">
      <h1>Hello World</h1>
      {product.length>0 && (
        <div className='allproducts'>
          {
            product.map((prod)=>{
              return <span>{prod.title} <br /></span> ;
            })
          }
           </div>
      )}
      <div>
        
      </div>
    </div>
  );
}

export default App;
