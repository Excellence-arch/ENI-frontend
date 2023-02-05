import axios from "axios";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const url = `${process.env.REACT_APP_BASE_URL}/users`;

  const submitForm = (e) => {
    e.preventDefault();
    axios.post(url, {name, email}).then(res => {
      console.log(res);
    }).catch((err) => {
      setError(err)
    })
  }
  return (
    <>
    <form onSubmit={(e) => submitForm(e)}>
        <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} required className="w-100 form-control" placeholder="Name"/>
        <input type={'text'} value={email} onChange={(e) => setEmail(e.target.value)} className="w-100 form-control" placeholder="Email" />
        <input type="submit" value="Submit" />
    </form>
    </>
  )
}

export default App;