import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { ProductCard } from '../components';
import '../styles/custom-styles.css';
import { Product, onChangeArgs } from '../interfaces/interfaces';
import { useState } from 'react';

const product1 = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2];


interface ProductInCart extends Product{
    count: number
}

export const ShoppingPage = () => {

    const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({});

    const onProductCartChange = ({count, product}: onChangeArgs): void => {
        console.log(count, product);
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

                {
                    products.map(product => (

                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={ onProductCartChange}>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ))
                }
            </div>

            <div className='shopping-cart'>
                <ProductCard
                    product={product1}
                    className="bg-dark text-white"
                    style={{
                        width: '100px'
                    }}
                    >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
                <ProductCard
                    product={product2}
                    className="bg-dark text-white"
                    style={{
                        width: '100px'
                    }}>
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
            </div>

        </div>
    )
}
