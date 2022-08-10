import { Container } from "react-bootstrap";

import security from ".././store/svg/security.svg";

const Security = () => {
  return (
    <section className="p-5" id="security">
      <Container>
        <div className="row align-item-center justify-content-between">
          <div className="col-md">
            <img className="img-fluid" src={security} alt="security" />
          </div>
          <div className="col-md px-1 py-5">
            <h2>Your security, our concern</h2>
            <p className="lead">
              Being with us means being secure. Feel free to rent boyfriend from
              us our service providers are well trained you can easily expect no
              sexual contact from them.
            </p>
            <p>
              Making our service providers feel safe and work with us takes a
              lot, so please don't take them to your home and don't take photo
              with them. 
            </p>
            <p>For more datails direct call us on : xxxxxxxxx </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Security;
