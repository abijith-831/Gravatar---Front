import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Form from './Components/Form';
import { SnackbarProvider, useSnackbar } from 'notistack';
import ProfileCard from './Components/ProfileCard';
import axios from 'axios';

const fetchGravatarData = async (email) => {
  try {
    const response = await axios.get(`http://localhost:4000/gravatar/${email}`);
    console.log('Gravatar Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching Gravatar data:', error.message);
    return null;
  }
};

const Home = () => {
  const [profileData, setProfileData] = useState(null);
  const [gravatarData, setGravatarData] = useState(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (formData) => {
    const gravatarData = await fetchGravatarData(formData.email);
    setProfileData(formData);
    setGravatarData(gravatarData);

    if (gravatarData) {
      enqueueSnackbar('Gravatar data found successfully!', { variant: 'success' });
    } else {
      enqueueSnackbar('No Gravatar data found, using form data instead.', { variant: 'warning' });
    }

    navigate('/profile', { state: { formData, gravatarData } });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

const App = () => {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfileCard />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
