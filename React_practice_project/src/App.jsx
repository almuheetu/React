// import ContactForm from "./component/ContactForm";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import Hero from "./component/Hero";


const App = () => {


  // JSX conditional rendering Ternary operator
  let status=false;


  return (
    <div>

      {

        status?
        <button>Logout Button</button>
        :
        <button>Login button</button>

      }

    </div>
  );


};

export default App;