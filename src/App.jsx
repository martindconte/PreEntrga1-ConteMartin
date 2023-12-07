import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NavBar, Checkout, ItemListContainer, ItemDetailContainer, Cart } from './components'


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Todos Los productos en un solo lugar'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por Categoria'} />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={ <Cart /> } />
            <Route path='/checkout' element= { <Checkout/> } />
            <Route path='*' element={<h1 className='itemListContainer'>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
