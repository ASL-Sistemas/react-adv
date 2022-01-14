import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { ProductCard } from '../components'

export const ShoppingPage = () => {

    const product = {
        id: '1',
        title: 'Coffee Mug - Card',
        img: './coffee-mug.png'
    }

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle/>
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
