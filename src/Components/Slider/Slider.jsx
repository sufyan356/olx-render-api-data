import Carousel from "react-bootstrap/Carousel";

const Slider = ({images}) => {
  // return (
   
        
          //   <Carousel >
          //   {images.map((image, index) => (
          //     <Carousel.Item key={index} className="productDesSliderCustom">
          //       <img
          //           className="img-fluid card-img-top"
          //           src={image.src}
          //           alt={image.alt}
          //           loading={image.loading}
          //         />
               
          //     </Carousel.Item>
          //   ))}
          // </Carousel>
         

     
     
  // );


  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index} className="productDesSliderCustom">
          <img
            className="img-fluid card-img-top"
            src={image}
            // alt={image.alt}
            // loading={image.loading}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export default Slider;
