import  Form  from "./components/Form";

function App() {
  const handleFormSubmit=(data) =>{
    console.log("Form submitted", data)

   }

  return (
   <div>
    <h1>Form Testing</h1>
    <Form onSubmit={handleFormSubmit} />
   </div>
  )
}

export default App
