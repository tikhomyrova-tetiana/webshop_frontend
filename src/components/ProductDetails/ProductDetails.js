import React from "react";
import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  BsBasket3Fill,
  BsFacebook,
  BsHeartFill,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Popup from "../Popup/Popup";
import StarRating from "../StarRating/StarRating";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function ProductDetail(props) {
  const { id } = props;

  const [productDetail, setProductDetail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const theme = createTheme({
    status: {
      danger: "#e53e3e",
    },
    palette: {
      primary: {
        main: "#FF3EB2",
        darker: "#053e85",
      },
      neutral: {
        main: "#1D3178",
        contrastText: "#fff",
      },
    },
  });

  useEffect(() => {
    const details = async () => {
      const detailsResponse = await axios.get(
        `http://localhost:4000/products/${id}`
      );
      setProductDetail(detailsResponse.data);
    };
    details();
  }, []);

  return productDetail ? (
    <div className="detailView">
      <div className="product-detail-img-container">
        <img
          className="productDetailImg"
          src={productDetail.mainImage}
          alt="product"
        />
      </div>
      <div className="details">
        <h1>{productDetail.title}</h1>
        <div className="rating-part">
          <StarRating stars={productDetail.rating} />
          <h2>{productDetail.rating}</h2>
          <div>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                color="neutral"
                size="small"
                onClick={togglePopup}
              >
                Add review
              </Button>
            </ThemeProvider>
            {isOpen && (
              <Popup
                content={
                  <>
                    <h1>Add review</h1>
                    <h6>Name</h6>
                    <input></input>
                    <h6>Rating</h6>
                    <h6>Review</h6>
                    <input></input>
                  </>
                }
                handleClose={togglePopup}
              />
            )}
          </div>
        </div>
        <h2>{productDetail.price}</h2>
        <p>{productDetail.description}</p>
        <div className="two-buttons">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              startIcon={<BsBasket3Fill />}
            >
              Add to Cart
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="neutral"
              size="small"
              startIcon={<BsHeartFill />}
            >
              Favorite
            </Button>
          </ThemeProvider>
        </div>
        <h4>Categories: {productDetail.categoryId}</h4>
        <div className="shareIcons">
          Share <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>
      </div>
    </div>
  ) : (
    <p>Wait..</p>
  );
}

export default ProductDetail;
