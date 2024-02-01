// import ContactForm from "./component/ContactForm";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import Hero from "./component/Hero";


const App = () => {


  // JSX conditional rendering Logical &&
  let status=true;


  return (
    <div>

   <h1>Login Status</h1>
   {status && <button>Logout Button</button>}

    </div>
  );


};

export default App;