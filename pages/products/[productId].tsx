import type { NextPage } from "next";
import { useRouter } from "next/router";

const Product: NextPage = () => {
    
    const router = useRouter();
    const productId = router.query.productId

    return(
        <>
        <p>Products Searh</p>
        <p>Current product: {router.query.productId}</p>
        </>
    )
}

export default Product;