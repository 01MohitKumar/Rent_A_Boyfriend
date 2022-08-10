import { IoArrowUpCircle } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center position-relative p-5">
      <div className="container">
        <p className="lead">
          Copyright &copy; 2022-23 Mohit Kumar
          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <IoArrowUpCircle className="h1 text-light" />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
