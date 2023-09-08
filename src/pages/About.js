import React from "react";
import styled from "styled-components";
import PageHero from "../components/PageHero";
// import image from "../assets/about_us.svg";

const About = () => {
  return (
    <main>
      <PageHero title="about" />
      <AboutContainer className="page section section-center">
        {/* <img src={image} alt="light room" /> */}
        <article>
          <div className="title">
            <h2>About Us</h2>
            <div className="underline"></div>
            <p>
              At [House Of Furniture], we are passionate about transforming houses into homes. Our mission is to provide you with high-quality, stylish, and functional furniture that enhances the comfort and aesthetics of your living spaces. We believe that your home should be a reflection of your unique style and personality.

              Our Commitment:
              Diverse Range: We offer a diverse range of furniture pieces that cater to various tastes and lifestyles. Whether you prefer contemporary minimalism, traditional craftsmanship, or something in between, we have something for everyone.

              Craftsmanship: Craftsmanship is at the heart of what we do. We collaborate with skilled artisans and designers to create unique and durable furniture items that stand the test of time.

              Innovation: We are committed to staying at the forefront of design and innovation. Our team explores new materials and design trends to meet the evolving needs of our customers.

              Sustainability: We prioritize environmentally responsible practices. We source eco-friendly materials, reduce waste, and minimize our carbon footprint. Our goal is to make a positive impact not only in your home but also on our planet.

              Core Values:
              Our core values revolve around craftsmanship, innovation, and customer satisfaction. We strive to inspire and empower individuals to express their personal style and create inviting, comfortable, and beautiful living spaces.

              Why Choose Us:
              Quality: We are dedicated to offering the highest quality furniture. Every piece is crafted with precision and care.

              Affordability: We believe that great design should be accessible to everyone. Our furniture combines quality with affordability.

              Customer-Centric: Your satisfaction is our priority. Our friendly and knowledgeable team is here to assist you at every step of your furniture-buying journey.

              Sustainability: By choosing us, you support sustainable practices and eco-conscious design.

              Visit Us:
              We invite you to visit our showroom and explore our curated collections. Experience the quality, craftsmanship, and design that define [House Of Furniture ]. Let us help you create a home that reflects your lifestyle and personality.

              Contact Us:
              Have questions or need assistance? Feel free to reach out to us. We're here to help you make the right choices for your home.

              Thank you for choosing [house Of Furniture] to be part of your journey in making your house a warm and inviting home.

              Feel free to customize this template with specific details about your shop, including its history, location, and any unique features or stories you'd like to share. Your "About Us" page is an opportunity to connect with your customers and convey your shop's values and personality.





            </p>
          </div>
        </article>
      </AboutContainer>
    </main>
  );
};

const AboutContainer = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default About;
