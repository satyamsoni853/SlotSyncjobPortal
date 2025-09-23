import React from 'react';
import './App.css';
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FindJobPage from './Pages/FindJobPage';
import FindTalentPage from './Pages/FindTalentPage';
import UploadJobPage from './Pages/UploadJobPage';
import AboutUsPage from './Pages/AboutUsPage';
import Header from './Header/Header';
import Dreamjob from './LandingPage/Dreamjob';
import Companies from './LandingPage/Companies';
import Footer from './Footer/Footer';

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
      <MantineProvider defaultColorScheme='dark' theme={theme}  >
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Find-Job" element={<FindJobPage />} />
          <Route path="/Find-Talent" element={<FindTalentPage />} />
          <Route path="/Upload-Job" element={<UploadJobPage />} />
          <Route path="/About-Us" element={<AboutUsPage />} />
          <Route path="*" element={<HomePage />} />
  
          
        </Routes>
        <Footer/>
        </BrowserRouter>
    </MantineProvider>
  );
}

export default App;