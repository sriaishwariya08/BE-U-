import React , {useState} from 'react'
import Nav from '../components/Nav'
import Amazon from '../components/Amazon'
import Cart from '../components/Cart'
import '../components/Amazon.css'
import Navbarr from '../components/Navbarr'
import ProductsHero from '../components/ProductsHero'
import Footer from '../components/Footer'

const Products = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
      let isPresent = false;
      cart.forEach((product)=>{
        if(item.id===product.id)
        isPresent = true;
      })
      if (isPresent){
         setWarning(true);
         setTimeout(()=>{
            setWarning(false);
         },2000);
         return ;
        }
      setCart([...cart, item]);
  }
  
  const handleChange = (item , d) => {
    let ind = -1;
    cart.forEach((data, index)=>{
      if (data.id === item.id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind] += d;
    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1 ;
    setCart([...tempArr])
  } 
  return (
    <div>
      <Navbarr />
      <ProductsHero />
      <Nav size={cart.length} setShow={setShow}/>
    {
       show ? <Amazon handleClick={handleClick}/> :  <Cart cart={cart} setCart={setCart} handleChange = {handleChange}/>
    }
    {
        warning && <div className='warning'>Item is already to your cart</div>
    }
      <Footer />
    </div>
  )
}

export default Products;
