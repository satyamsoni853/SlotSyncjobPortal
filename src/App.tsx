import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, MantineProvider, Slider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { create } from 'domain';
import { Browser } from 'tabler-icons-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const theme = createTheme({
    colors: {
      'mine-shaft': [
        '#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0',
        '#b0b0b0', '#a0a0a0', '#909090', '#808080', '#707070'
      ],
      'faded-jade': [
        '#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0',
        '#b0b0b0', '#a0a0a0', '#909090', '#808080', '#707070'
      ],
    },
  });
  return (
      <MantineProvider theme={theme}  >
        <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
        </Routes>
        </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
