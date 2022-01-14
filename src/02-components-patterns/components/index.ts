import { ProductCard as ProductCardHoc } from './ProductCard';
import { ProductTitle } from './ProductTltle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductCardHocProps } from '../interfaces/interfaces';

export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTltle";
export { ProductButtons } from "./ProductButtons";

export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard;