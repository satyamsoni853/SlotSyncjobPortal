import React, { useEffect } from 'react';
import './App.css';
import { MantineProvider, createTheme, localStorageColorSchemeManager, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './Store';
import AuthPage from './Pages/AuthPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import { AuthProvider } from './AuthContext';
import MainLayout from './MainLayout';
import ProtectedRoute from './ProtectedRoute';
                           
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
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      if (colorScheme === 'dark') {
        document.documentElement.classList.add('dark');
        (favicon as HTMLLinkElement).href = `${process.env.PUBLIC_URL}/favicon.svg`;
      } else {
        document.documentElement.classList.remove('dark');
        (favicon as HTMLLinkElement).href = `${process.env.PUBLIC_URL}/favicon-light.svg`;
      }
    }
  }, [colorScheme]);
  return null;
}

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
    <MantineProvider theme={theme} defaultColorScheme="dark" colorSchemeManager={colorSchemeManager}>
      <ColorSchemeSync />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<AuthPage isLogin />} />
            <Route path="/Signup" element={<AuthPage isLogin={false} />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/*" element={<MainLayout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </MantineProvider>
    </Provider>
  );
}

export default App;
