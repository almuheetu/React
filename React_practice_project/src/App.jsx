// import ContactForm from "./component/ContactForm";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import Hero from "./component/Hero";


const App = () => {


  // JSX conditional rendering IIF
  let status=false;


  return (
    <div>

   <h1>Login Status</h1>
   {(()=>{

    if(status==true){
      return <button>Logout Button</button>
    }
    else {
      return <button>Login Button</button>
    }

   })()}

    </div>
  );


};

export default App;