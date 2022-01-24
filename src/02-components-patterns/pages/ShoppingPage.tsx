import { ProductButtons, ProductImage, ProductTitle } from '../components'
import { ProductCard } from '../components';
import '../styles/custom-styles.css';
import { products } from '../data/products';

export const ShoppingPage = () => {

    const product = products[0];

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <ProductCard
                product={product}
                className="bg-dark text-white"
                key={product.id}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />

                            <button onClick={reset}>Reset</button>
                            <button onClick={() => increaseBy(-2)}>-2</button>
                            {
                                !isMaxCountReached &&
                                <button onClick={() => increaseBy(2)}>+2</button>
                            }
                            <span>{count}-{maxCount}</span>
                            {/* {JSON.stringify(args, null, 3)} */}
                        </>
                    )
                }
            </ProductCard>



        </div>
    )
}
