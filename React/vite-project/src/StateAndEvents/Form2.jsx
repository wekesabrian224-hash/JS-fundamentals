/**
 * /*
create a form to take name email phone nu and pass 
have as ubmit button that console logs the values when the firm is submitted
after the form hava list to show the chbages


for all the inout fields use only one state variable
{inout,setinput}=usestate(<object>)
*/

import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameOnChange = (e) => {
    console.log("NAME IS", e.target.value);
    setName(e.target.value);
  };

  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("name is", name);
    console.log("email is", email);
    console.log("password is", password);
  };

  return;
}
