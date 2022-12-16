import logo from './logo.svg';
import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login';
import Callback from './Callback';
import Lyrics from './Lyrics';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {

  const [code, changeCode] = useState(undefined)

  useEffect(() => {
    console.log(code)
  }, [code])

  //electron.sendCode('20 9871309273')

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login /> } />
          <Route path="/callback" element={<Callback changeCode={changeCode}/>} />
          <Route path="/login" element={<Lyrics code={code}/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
