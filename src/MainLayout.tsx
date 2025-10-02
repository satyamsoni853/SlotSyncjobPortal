import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FindJobPage from './Pages/FindJobPage';
import FindTalentPage from './Pages/FindTalentPage';
import UploadJobPage from './Pages/UploadJobPage';
import AboutUsPage from './Pages/AboutUsPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import JobDescriptionPage from './Pages/JobDescriptionPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import ProfilePage from './Pages/ProfilePage';
import HomePage from './Pages/HomePage';
import Layout from './Layout';

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
  );
};

export default MainLayout;
