import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CAvatar,
  CButton,
} from '@coreui/react';
import { cibBehance, cibLinkedinIn, cibStackoverflow } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import './profile.css';

const UserProfileHeader = () => {
  // Mock data
  const profileImage = "https://media.licdn.com/dms/image/D4D03AQFVsSk4rmah3A/profile-displayphoto-shrink_400_400/0/1702577117116?e=1718236800&v=beta&t=irWEFAf-fa66bV03_V8eLh8OWHRHe0peCp11l97qMkk";
  const name = "Oussama Lamine";
  const bio = "Passionate marketing professional with a strong background in digital marketing strategies and campaign management. Experienced in driving brand awareness and engagement through innovative marketing tactics. A creative thinker with a keen eye for detail and a drive for achieving results.";
  const linkedinUrl = "https://www.linkedin.com/in/oussema-lamine/";
  const websiteUrl = "https://www.behance.com/in/PixelPress/";
  const position = "Marketing Manager";

  return (
    <CCard className="text-center mb-3">
      <CCardHeader>Profile Header</CCardHeader>
      <CCardBody>
        <div className="d-flex justify-content-center">
          <CAvatar size="xl" status="success" src={profileImage} className="mx-auto d-block mb-3" />
        </div>
        <div className="text-center mb-3">
          <CButton color="primary">Upload</CButton>
        </div>
        <h4>{name}</h4>
        <div className="text-center">
          <CIcon icon={cibStackoverflow} /> <strong>{position}</strong>
        </div>
        <div className="m-4 text-center">
          <p className="mx-5" >{bio}</p>
        </div>
        <div className="d-flex justify-content-center mb-3 profile-links">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="me-3">
            <CIcon icon={cibLinkedinIn} /> {linkedinUrl}
          </a>
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <CIcon icon={cibBehance} /> {websiteUrl}
          </a>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default UserProfileHeader;
