import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";


const App = () => {

  const status=false;

  // Conditional Rendaring

  if(status==true){
    return (
      <div>
        <h1>Login Status</h1>
        <button>Logout</button>
      </div>
    );
  }
  else{
    return (
      <div>
        <h1>Login Status</h1>
        <button>Login</button>
      </div>
    )
  }

};

export default App;