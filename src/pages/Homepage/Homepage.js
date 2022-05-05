import "./styles.css";
export default function Homepage() {
  return (
    <div className="homepage">
      <div className="shop-image">
        <img
          src="https://i.ibb.co/CMj9tdj/shop.jpg"
          alt="shop"
          width="100%"
          height="100%"
        />
        <div>SHOP</div>
      </div>
      <div className="four-categories">
        <div className="small-image">
          <img
            src="https://i.ibb.co/XzNMScs/women-fashion.jpg"
            alt="woman"
            width="100%"
            height="100%"
          />
          <div>WOMEN'S APPAREL</div>
        </div>
        <div className="small-image">
          <img
            src="https://i.ibb.co/6NSvkvj/mens-fashion.jpg"
            alt="mens fashion"
            width="100%"
            height="100%"
          />
          <div>MEN'S APPAREL</div>
        </div>
        <div className="small-image">
          <img
            src="https://i.ibb.co/jGs7c1c/jewelry.jpg"
            alt="jewelry"
            width="100%"
            height="100%"
          />
          <div>JEWELRY</div>
        </div>
        <div className="small-image">
          <img
            src="https://i.ibb.co/pd5nJ6m/electronics.jpg"
            alt="electronics"
            width="100%"
            height="100%"
          />
          <div>ELECTRONICS</div>
        </div>
      </div>
    </div>
  );
}