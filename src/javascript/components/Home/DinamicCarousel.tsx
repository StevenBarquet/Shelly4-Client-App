// ---Dependencys
import React from 'react';
import { Carousel } from 'antd';
// ---Components
import Banner from 'Comp/Home/Banner';
import LazyBanner from 'Comp/Home/LazyBanner';
// ---Media
// import c1 from 'Images/bannerD1.jpg';

// ------------------------------------------ TYPES-----------------------------------------
interface Banner {
  _id: string;
  imgMovil: string;
  imgDesk: string;
}

interface Props {
  banners: Array<Banner>;
  isMovil: boolean;
}
// ------------------------------------------ COMPONENT-----------------------------------------
function DinamicCarousel(props: Props) : React.ReactElement {
  const { banners, isMovil } = props;
  if (banners)
    return (
      <>
        <div className="carousel-cont">
          <Carousel autoplay effect="fade" dotPosition="top">
            {banners.map(element => (
              <Banner
                key={element._id}
                srcImg={isMovil ? element.imgMovil : element.imgDesk}
              />
            ))}
          </Carousel>
        </div>
      </>
    );
  return (
    <>
      {/* ------------ Case No banners ------------ */}
      <div className="carousel-cont">
        <Carousel autoplay effect="fade" dotPosition="top">
          <LazyBanner />
        </Carousel>
      </div>
    </>
  );
}

export default DinamicCarousel;
