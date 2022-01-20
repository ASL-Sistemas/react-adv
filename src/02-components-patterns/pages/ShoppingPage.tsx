import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { ProductCard } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

export const ShoppingPage = () => {

    const {shoppingCart, onProductCartChange} = useShoppingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (

                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCartChange}
                            value={shoppingCart[product.id]?.count || 0}>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{
                                width: '100px'
                            }}
                            value={product.count}
                            onChange={onProductCartChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons className='custom-buttons' style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }} />
                        </ProductCard>
                    ))
                }
            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}

        </div>
    )
}
