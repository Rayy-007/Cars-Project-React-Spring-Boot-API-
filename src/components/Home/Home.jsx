import "./home.css";
import { NavLink } from "react-router-dom";
import CarImage from "../../assets/home-car.png";

const Home = () => {
  return (
    <main>
      <div className="line"></div>
      <div className="line1"></div>
      <div className="line2"></div>
      <section className="text">
        <h1>XYZ Car Chevrolet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          qui, animi nemo minus explicabo assumenda.
        </p>
        <NavLink to="/cars" className="cta">
          Learn More ➡
        </NavLink>
      </section>
      <section className="image">
        <img src={CarImage} alt="Car Image" />
      </section>
    </main>
  );
};

export default Home;
