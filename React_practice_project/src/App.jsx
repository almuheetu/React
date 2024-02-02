// import ContactForm from "./component/ContactForm";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import Hero from "./component/Hero";

import Hero from "./component/Hero";


const App = () => {


//  Passing props passing with object data 

const ItemObj={
  name:'Shihab',
  age:22,
  city:'Rajshahi'
}

  return (
    <div>
     <Hero item={ItemObj}/>

    </div>
  );


};

export default App;