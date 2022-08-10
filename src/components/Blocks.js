import { Container } from "react-bootstrap";
import Card from "../ui/card/Card";

const Blocks = () => {
  return (
    <section className="p-5 bg-dark" id='boyfriends'>
      <Container>
        <h3 className="text-center text-white mb-5">Our service providers</h3>
        <div className="row g-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </section>
  );
};

export default Blocks;
