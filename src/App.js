
import { useEffect, useState } from 'react'


import './App.css';


function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1)
  const fetchProduct = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setProduct(data.products)
    
  }
  
  const selectPageHandler = (selectedPage)=>{
    if(selectedPage>=1 && selectedPage <=product.length /6 && selectedPage!==page)
    setPage(selectedPage);
  }
  useEffect(() => {
    fetchProduct();
  }, [])
  console.log(product)
  return (
    <div className="App">
      <h1>Your Products</h1>
      {product.length>0 && (
        <div className='allproducts'>
          {
            product.slice(page*6-6,page*6 ).map((prod)=>{
              return <span className='product--single' key={prod.id}>
                <img src={prod.thumbnail} alt={prod.title}  />
                <span>{prod.title}</span>
              </span> ;
            })
          }
           </div>
      )}
      <div className='pagination'>
        <span className={page===1?"pagination--disable":""} onClick={()=>selectPageHandler(page-1)} >◀</span>
        {
          [...Array(product.length/6)].map((_,i)=>{
            return <span className={page === i+1 ? "selectedPage":""} onClick={()=>selectPageHandler(i+1)}>{i+1}</span>
          })
        }
        <span className={page===product.length/6?"pagination--disable":""} onClick={()=>selectPageHandler(page+1)}>▶</span>
      </div>
    </div>
  );
}

export default App;
