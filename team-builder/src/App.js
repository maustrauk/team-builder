import React, {useState} from 'react';

import './App.css';

import MemberCards from './components/MemberCards';
import Form from './components/Form';

const defaultMemberList = [
  {
    name : "Marek",
    email : "marek@mymail.com",
    role : "etc",
  },
  {
    name : "Nest",
    email : "Nest@mymail.com",
    role : "etc",
  },
];

const defaultFormValues = {
  name : "",
  email : "",
  role : "",
};

function App() {

  const [memebersList, setMemebersList] = useState(defaultMemberList);
  const [formValues, setFormValue] = useState(defaultFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValue({
      ...formValues,
      [inputName]: inputValue,
    });
  };

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

    setMemebersList([...memebersList, newMember]);
  }

  return (
    <div className="App">
      <MemberCards memebersList={memebersList}/>
      <Form values={formValues} update={updateForm} submit ={submitForm}/>
      {console.log("Members:",memebersList)}
    </div>
  );
}

export default App;
