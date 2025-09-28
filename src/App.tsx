import React, { useEffect } from 'react';
import './App.css';
import { MantineProvider, createTheme, localStorageColorSchemeManager, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import FindJobPage from './Pages/FindJobPage';
import FindTalentPage from './Pages/FindTalentPage';
import UploadJobPage from './Pages/UploadJobPage';
import AboutUsPage from './Pages/AboutUsPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import JobDescriptionPage from './Pages/JobDescriptionPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import AuthPage from './Pages/AuthPage';
import ProfilePage from './Pages/ProfilePage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import Layout from './Layout';

const grayscalePalette = [
  '#ffffff',
  '#f0f0f0',
  '#e0e0e0',
  '#d0d0d0',
  '#c0c0c0',
  '#b0b0b0',
  '#a0a0a0',
  '#909090',
  '#808080',
  '#707070',
] as const;

const theme = createTheme({
  colors: {
    'mine-shaft': grayscalePalette,
    'faded-jade': grayscalePalette,
  },
});

const colorSchemeManager = localStorageColorSchemeManager({ key: 'slotsync-color-scheme' });

function ColorSchemeSync() {
  const { colorScheme } = useMantineColorScheme();
  useEffect(() => {
    if (colorScheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorScheme]);
  return null;
}

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark" colorSchemeManager={colorSchemeManager}>
      <ColorSchemeSync />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<AuthPage isLogin />} />
          <Route path="/Signup" element={<AuthPage isLogin={false} />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/*" element={<MainLayout />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

const MainLayout = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/Find-Job" element={<FindJobPage />} />
        <Route path="/Find-Talent" element={<FindTalentPage />} />
        <Route path="/Upload-Job" element={<UploadJobPage />} />
        <Route path="/About-Us" element={<AboutUsPage />} />
        <Route path="/Talent-Profile" element={<TalentProfilePage />} />
        <Route path="/Job-Description" element={<JobDescriptionPage />} />
        <Route path="/Apply-Job" element={<ApplyJobPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default App;
