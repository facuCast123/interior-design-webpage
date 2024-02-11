import "./Main.css";

const Main = () => {
  return (
    <main className="main__container">
      <section className="hero">
        <div className="hero__main">
          <p className="hero__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hero__image--one">
            <h1 className="hero__title">
              Interi<span>or</span> Design
            </h1>
          </div>

          <div className="hero__side">
            <span className="hero__label">Our Recent Work</span>
            <h2 className="hero__heading">
              We Will Make These Unique Tastes of Yours a design reality!
            </h2>
            <button className="hero__button">VIEW PROJECT</button>
            <div className="hero__image--two"></div>
          </div>
        </div>
      </section>

      <section className="about">
        <img
          className="about__image"
          src="../assets/images/interior-3.jpg"
          alt="Image of interior design"
        />
        <div className="about__content">
          <span className="about__label">WHO WE ARE</span>
          <h1 className="about__title">Exterior & Interior</h1>
          <p className="about__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="about__button">READ MORE</button>
        </div>
      </section>

      <section className="program">
        <div className="program__description">
          <h1 className="program__title">Interior Design Program.</h1>

          <div className="program__description--one">
            <p className="program__description__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className="program__description__label">/01</span>
          </div>

          <div className="program__description--two">
            <span className="program__description__label">02/</span>
            <p className="program__description__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="program__image--top"></div>

        <div className="program__image-wrapper">
          <div className="image--top">
            <img
              className="image--bot"
              src="../assets/images/interior-6.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="program__description">
          <h1 className="program__title">
            Design Unique And Functional Spaces
          </h1>
          <p className="program__description__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="program__description__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      <section className="mentorship">
        <h1 className="mentorship__title">Our Mentorship Program</h1>

        <div className="mentorship__grid-container">
          <div className="mentorship__career">
            <span className="career__label">Career Course</span>
            <h2 className="career__heading">Certified Interior Decorator</h2>
            <p className="career__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="career__pricing">
              <span>Rs. 25,000/-</span> <p>Introduction Price!</p>
            </div>
            <button className="career__button">Book Now</button>
          </div>
          <div className="mentorship__image--one"></div>
          <div className="mentorship__info">
            <div className="mentorship__info__container">
              <span>Certification</span>
              <p>Certified Interior Decorator</p>
            </div>

            <div className="mentorship__info__container">
              <span>Course Pace</span>
              <p>Study at flexible Pace</p>
            </div>

            <div className="mentorship__info__container">
              <span>Duration</span>
              <p>4 Months</p>
            </div>

            <div className="mentorship__info__container">
              <span>Course Form</span>
              <p>100% Online</p>
            </div>
          </div>
          <div className="mentorship__image--two"></div>
          <div className="mentorship__subheading">
            <h1>Furniture Should Be Comfortable.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
          </div>
          <div className="mentorship__image--three__container">
            <div className="mentorship__image--three"></div>
            <p className="mentorship__image--three__info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact__content">
          <p>
            Let&apos;s Work together! Get in touch with Our Best Interior
            Designers
          </p>
          <button>Let&rsquo;s Chat</button>
        </div>
        <img
          className="contact__image"
          src="../assets/images/interior-10.jpg"
          alt="Image of an interior design"
        />
      </section>
    </main>
  );
};

export default Main;
