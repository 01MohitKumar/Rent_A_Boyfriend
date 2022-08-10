import { Container } from "react-bootstrap";

import rules from ".././store/svg/rules.svg";

const Rules = () => {
  return (
    <section className="p-5 bg-dark text-light" id="rules">
      <Container>
        <div className="row align-item-center justify-content-between">
          <div className="col-md px-1 py-5">
            <h2>You must have to follow our rules to enjoy our service</h2>
            <ul>
              <li>
                Don't show our service provider to your relatives as your real
                boyfriend.
              </li>
              <li>
                50% of the fees must be paid before service and 50% after
                service.
              </li>
              <li>Don't make any sexual contact with our service providers.</li>
              <li>All the expenses must be bear by you.</li>
              <li>You must be above 18.</li>
            </ul>
            <p>For more datails direct call us on : xxxxxxxxx </p>
          </div>
          <div className="col-md">
            <img className="img-fluid" src={rules} alt="security" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Rules;
