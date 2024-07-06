import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item className="Slider">
        <img
          className="d-block w-100"
          src="../src/assets/images/slider1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="Sliderh4">Great Quality Cocial life</h3>
          <h1 className="Sliderh1">
            Dicover the world of
            <br /> possible universty.
          </h1>
          <button className="button1">Admission</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="Slider">
        <img
          className="d-block w-100"
          src="../src/assets/images/slider2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="Sliderh4">Great Quality Cocial life</h3>
          <h1 className="Sliderh1">
            Dicover the world of
            <br /> possible universty.
          </h1>
          <button className="button1">Admission</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
