// import ContactForm from "./component/ContactForm";
// import Footer from "./component/Footer";
// import Header from "./component/Header";
// import Hero from "./component/Hero";




const App = () => {


// Manneging Form submit 

const PostFormData=(event)=>{
  event.PreventDefault();

  
  alert('From Submitted')
}

  return (
    <div>
     <form onSubmit={PostFormData}>
      <input placeholder="name"/>
      <button type="submit">Submit</button>
     </form>
    </div>
  );


};

export default App;