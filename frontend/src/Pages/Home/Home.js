import CardPrevious from "../../components/CardPrevious/";
import CardOffer from "../../components/CarfOffer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="d-flex flex-column lg-col-12 mb-4">
        <div className="container-previous d-flex col-2">
          <h1 className="title-home">PREVIOUS</h1>
        </div>
        <div className="d-flex col-12 justify-content-center">
          <CardPrevious />
        </div>
      </div>
      <div>
        <div className="container-previous d-flex col-2">
          <h1 className="title-home offer">OFFER</h1>
        </div>
        <div className="d-flex col-12 justify-content-between border-radius-4">
          <CardOffer />
        </div>
      </div>
    </div>
  );
};
export default Home;
