import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";


const App = () => {
    const city=["Dhaka","London","Delhi","Kolkata"]
  return (
    <div>









    {/* <ol>
      {
        city.map((item,i)=>{

          return <li key={i.toString()}>{item}</li>

        })

      }
    </ol> */}















      {/* // IMMEDIATELY_INVOKED FUNCTION */}
    {/* {(()=>{

      if(marks>=80 && marks<100){
        return <h1>A+</h1>
      }
      else if(marks>=70 && marks<80){
        return <h1>A</h1>
      }
      else if(marks>=60 && marks<70){
        return <h1>A-</h1>
      }
      else if(marks>=50 && marks<60){
        return <h1>B</h1>
      }
      else if(marks>=40 && marks<50){
        return <h1>C</h1>
      }
      else{
        return <h1>F</h1>
      }
       

      })()} */}


      {/* // Inline if else */}
      {/* {  
        marks>90?
        <h1>Brilliant Result</h1>
        :
        <h1>Avarage Result</h1>
      } */}
    </div>
  );
};

export default App;