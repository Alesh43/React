import { useCallback, useEffect, useState } from "react";
import { Iproduct } from "../../interface/product";
import useSWR from "swr";
import { getProductById } from "../../API/productApi";
import { displayImage, errorMessage } from "../../utils/helper";
import RelatedProducts from "./related-products";
import Button from "../reusable/button/button";
import { toast } from "sonner";
import axios from "axios";
import { addProductToCart } from "../../redux/slice/order-slice";
import { useAppDispatch } from "../../Hooks/redux";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import StarRating from "../ratings/rating";
import { prototype } from "events";
import RecommendProducts from "./recommend-product";

interface Props {
  id: string;
}

const ProductDetail = ({ id }: Props) => {
  const { data: product } = useSWR(`getproduct/${id}`, getProductById);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { accessToken, userId } = useAuth();

  const handleAddToCart = useCallback(async () => {
    const product = {
      productId: id,
      totalOrder: 1,
    };
    if (accessToken) {
      dispatch(addProductToCart(product));
      toast.message("Added to cart");
    } else {
      toast.error("Please login");
      navigate("/Signin");
    }
  }, [accessToken, dispatch, id]);
  // const [product, setProduct] = useState<Iproduct>();

  // useEffect(() => {
  //   const productDetail = async () => {
  //     try {
  //       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  //       const product = await res.json();
  //       console.log(product);
  //       setProduct(product);
  //     } catch (error: any) {
  //       console.log(error);
  //     }
  //   };
  //   productDetail();
  // }, [id]);
  return (
    <div>
      {product && (
        <div className="border p-5 space-y-5 max-w-screen-sm shadow-lg rounded-xl mx-auto">
          <div className="flex items-center justify-center">
            <img
              src={product.productImage || displayImage(product?.productImage)}
              alt={product?.productName}
              className="h-52 w-52"
            />
          </div>
          <div className="border-t mt-2">
            <p className="font-bold capitalize">
              {product?.productCategory?.categoryName}
            </p>
            <p className="line-clamp-1">{product?.productName}</p>
            <div>
              <span className="font-bold">Rating:</span>{" "}
              {product?.productRating}
              <StarRating
                count={product?.productRating || 0}
                edit
                productId={product._id}
              />
            </div>
            <p>
              <span className="font-bold">Price:</span> {product?.productPrice}
            </p>
            <p className="line-clamp-2">{product?.productDescription}</p>
          </div>
          <div>
            <Button
              buttonType="button"
              buttonColor={{ primary: true }}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      )}
      {accessToken !== undefined && userId && userId !== undefined ? (
        // COLLABORATIVE FILTERING
        <RecommendProducts userId={userId} />
      ) : (
        // Content BASED FILTERING
        <RelatedProducts id={id} />
      )}{" "}
    </div>
  );
};

export default ProductDetail;
