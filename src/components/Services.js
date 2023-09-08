import React from "react";
import styled from "styled-components";
import { HiColorSwatch, HiBookOpen, HiBadgeCheck, HiEye } from "react-icons/hi";

const Services = () => {
  return (
    <ServicesContainer>
      <div className="section-center">
        <article className="header">
          <h3>More about our company</h3>
        </article>
        <div className="services-center">
          <article className="service">
            <span className="icon">
              <HiBadgeCheck />
            </span>
            <h4>Mission</h4>
            <p>
              "At [House Of Furniture], our mission is to transform houses into homes by providing high-quality
              , stylish, and functional furniture that enhances the comfort and aesthetics of living spaces.
              We are committed to offering a diverse range of furniture pieces that cater to various tastes and lifestyles,
              all while maintaining affordability and sustainability.
            </p>
          </article>
          <article className="service">
            <span className="icon">
              <HiEye />
            </span>
            <h4>Vision</h4>
            <p>
              Our vision at [House Of Furniture] is to become the premier destination for furniture excellence,
              where innovation meets craftsmanship to elevate the art of interior design.
              We envision a future where every home is a sanctuary of comfort, style,
              and sustainability, and where our brand is synonymous with quality and innovation
            </p>
          </article>
          {/* <article className="service">
            <span className="icon">
              <HiBookOpen />
            </span>
            <h4>History</h4>
            <p>
              Similique modi, quidem quae quas explicabo necessitatibus sint
              eius beatae officiis ut!
            </p>
          </article> */}
          {/* <article className="service">
            <span className="icon">
              <HiColorSwatch />
            </span>
            <h4>Designers</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </article> */}
        </div>
      </div>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;
  background: var(--clr-primary-10);
  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-8);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;

export default Services;
