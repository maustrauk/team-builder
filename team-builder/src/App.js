import React, {useState} from 'react';

import './App.css';

import MemberCards from './components/MemberCards';
import Form from './components/Form';

const defaultMemberList = [
  {
    id : "0",
    name : "Marek",
    email : "marek@mymail.com",
    role : "etc",
  },
  {
    id : "1",
    name : "Nest",
    email : "Nest@mymail.com",
    role : "etc",
  },
];

function App() {

  const [memebersList, setMemebersList] = useState(defaultMemberList);

  return (
    <div className="App">
      <Form />
      <MemberCards memebersList={memebersList}/>
    </div>
  );
}

export default App;
