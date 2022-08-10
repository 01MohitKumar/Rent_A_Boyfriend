import classes from "./App.module.css";
import Blocks from "./components/Blocks";
import City from "./components/City";
import NavigationBar from "./components/NavigationBar";
import Security from "./components/Security";
import Showcase from "./components/Showcase";
import Rules from './components/Rules'
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Questions from "./components/Questions";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Showcase />
      <City />
      <Blocks />
      <Security />
      <Rules />
      <ContactUs />
      <Questions />
      <Footer /> 
    </>
  );
};

export default App;

/*
Tired of watching your friends making plans with their boyfriends.
Don't worry we are here.
Rent a boyfriend at your local with reasonable price

*/
