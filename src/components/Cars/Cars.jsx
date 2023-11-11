import "./car.css";

const Cars = ({ carsData }) => {
  const carsCard = carsData?.map((car, index) => {
    return (
      <div key={index} className="container">
        <div className="wrapper">
          <div
            className="banner-image"
            style={{ "--banner-image": `url(${car.carphoto})` }}
          ></div>
          <h1>{car.make}</h1>
          <p>
            Model - {car.model}
            <br />
            Price - ${car.price}
          </p>
        </div>
        <div className="button-wrapper">
          <button className="btn outline">DETAILS</button>
          <button className="btn fill">BUY NOW</button>
        </div>
      </div>
    );
  });

  return <div className="cars-container">{carsCard}</div>;
};

export default Cars;
