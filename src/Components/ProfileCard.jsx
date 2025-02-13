import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/profilecard.css";
import defaultProfile from "../assets/user.png";

const ProfileCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, gravatarData } = location.state || {};

  console.log("form", formData);
  console.log("gra", gravatarData);

  const displayName = gravatarData?.displayName || formData?.fullName || "Anonymous User";
  const username = formData?.username || "No Username";
  const email = formData?.email || "No email provided";
  const phone = formData?.phone || "No phone number available";
  const jobTitle = gravatarData?.job_title || formData?.job_title || "Not Provided";
  const aboutMe = gravatarData?.aboutMe || formData?.bio || "No bio available.";
  const profileImage = gravatarData?.thumbnailUrl || defaultProfile;
  const profileUrl = gravatarData?.profileUrl;
  const locationInfo = gravatarData?.location || formData?.location || "Location not specified";
  const website = formData?.website || gravatarData?.website || "";

  if (!formData) {
    return <div className="no-data">No profile data found. Go back and submit the form.</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2 className="profile-title">Profile Details</h2>
        <img src={profileImage} alt="Profile" className="profile-image" />

        <div className="profile-details">
          <p><strong>Name:</strong> {displayName}</p>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Job Title:</strong> {jobTitle}</p>
          <p><strong>Location:</strong> {locationInfo}</p>
        </div>

        <div className="contact-details">
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
        </div>

        <p className="bio"><strong>About Me:</strong> {aboutMe}</p>

        {website && (
          <p>
            <strong>Website: </strong>
            <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
          </p>
        )}

        {profileUrl && (
          <p>
            <strong>Gravatar Profile: </strong>
            <a href={profileUrl} target="_blank" rel="noopener noreferrer">
              View Profile
            </a>
          </p>
        )}

        <button className="back-button" onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};

export default ProfileCard;
