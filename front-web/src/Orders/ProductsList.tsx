import { checkIsSelected } from "./Helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    product: Product[];
    onSelectProduct: (product: Product) => void;
    selectedProducts: Product[];
}

function ProductsList({ product,selectedProducts, onSelectProduct }: Props) {
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
            {product.map(product =>(
                <ProductCard 
                    key={product.id} 
                    product={product} 
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProducts, product)}
                    />
            ))}
             
            </div>
        </div>

    )
}

export default ProductsList;