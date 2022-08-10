import { Fragment } from "react";
import { Container } from "react-bootstrap";
import pureLove from "../store/svg/pureLove.svg";

const Showcase = () => {
  return (
    <Fragment>
      <section className="bg-light text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <Container>
          <div className="d-sm-flex align-items-center text-sm-start">
            <div>
              <h1>
                Rent a <span className="text-warning">Boyfriend</span>
              </h1>
              <img
                className="img-fluid w-75 mx-auto d-block d-sm-none"
                src={pureLove}
                alt="pure friends"
              />
              <p className="lead my-4">
                Tired of watching your friends making plans with their
                boyfriends, don't worry we are here. Rent a boyfriend at your
                local with reasonable price.
              </p>
              <button
                className="btn btn-primary btn-lg"
                data-bs-toggle="modal"
                data-bs-target="#fillup"
              >
                Start Renting
              </button>
            </div>
            <img
              className="img-fluid w-50 d-none d-sm-block"
              src={pureLove}
              alt="pure friends"
            />
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default Showcase;
