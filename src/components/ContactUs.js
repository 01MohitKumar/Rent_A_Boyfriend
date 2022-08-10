import { Container } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contactUs" className="bg-primary p-5">
      <Container>
        <h2 className="text-center text-white">Our Team</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a wed developer in the
          industry.
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Shivam Gupta</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  labore a voluptate quibusdam sunt ratione.
                </p>
                <a href="!#">
                  <FaTwitter className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaFacebook className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaLinkedin className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaInstagram className="text-dark mx-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Mohit Kumar</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  labore a voluptate quibusdam sunt ratione.
                </p>
                <a href="!#">
                  <FaTwitter className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaFacebook className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaLinkedin className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaInstagram className="text-dark mx-1" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3">Mrittunjay Singh</h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  labore a voluptate quibusdam sunt ratione.
                </p>
                <a href="!#">
                  <FaTwitter className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaFacebook className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaLinkedin className="text-dark mx-1" />
                </a>
                <a href="!#">
                  <FaInstagram className="text-dark mx-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactUs;
