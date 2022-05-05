import "./styles.css";

export default function Banner() {
  return (
    <div className="banner">
      <h2 className="banner-text">
        From electronics to fashion,
        <br />
        <br /> we've got you covered.
      </h2>
      <img
        className="banner-image"
        src="https://i.ibb.co/bNRVFT8/banner.png"
        alt="woman next to car"
      />
    </div>
  );
}
