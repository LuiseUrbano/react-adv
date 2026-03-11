import { ProductCard, ProductButtons, ProductImage, ProductTitle, ProductDescription } from "../components"


const product = {
  id: '1',
  title: 'Coffe Mug',
  description: 'This is a coffe mug',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <>
      <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}></div>
        <ProductCard product={product}>
          <ProductImage  />
          <ProductTitle />
          <ProductDescription  />
          <ProductButtons />
        </ProductCard>

        
      </div>

    </>
  )
}
