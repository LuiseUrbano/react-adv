import { ProductCard } from "../components/ProductCard"

const product = {
    id: '1',
    title: 'Coffe Mug',
    description: 'This is a coffe mug',
}

export const ShoppingPage = () => {
  return (
    <>
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{
        display:'flex',
        flexDirection: 'row',
        flexWrap:'wrap'
      }}></div>
      <ProductCard product={product} />
    </div>
   
    </>
  )
}
