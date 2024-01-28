
import './App.css'
import ReusableForm from './Components/ReusableForm/ReusableForm'
// import Hookform from './Components/Hookform/Hookform'
// import Hookform from './Components/Hookform/Hookform'
// import RefForm from './Components/RefForm/RefForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSignUpSubmit = data =>{

    console.log(data)
   
}
const handleUpdateProfile = data =>{

  console.log(data)

}

  return (
    <>
      
      <h1>Forming</h1>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <Hookform></Hookform> */}
      {/* <Hookform></Hookform> */}

      <ReusableForm formTitle={'Sign up'} handleSubmit={handleSignUpSubmit}></ReusableForm>
      <ReusableForm formTitle={'Update it!!'} handleSubmit={handleUpdateProfile} submitBtnText='Update'></ReusableForm>
      
    </>
  )
}

export default App
