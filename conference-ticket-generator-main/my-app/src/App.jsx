import React, { useState } from 'react'
import Form from './components/Form'
import Ticket from './components/Ticket';

const App = () => {
  const [data, setData] = useState(
    {
      name: '',
      submitted: false,
      avatar: null,
      email: '',
      githubUsername: ''
    }
  );
  return (
    <>{
      data.submitted ?
        <Ticket data={data} /> :
        <Form data={data} setData={setData} />
    }</>
    // <Ticket data={data} />
    // <Form data={data} setData={setData} />
  )
}

export default App
