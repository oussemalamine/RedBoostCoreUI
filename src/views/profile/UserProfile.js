import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CAlert
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import UserProfileHeader from './UserProfileHeader';
import PersonalDetails from './PersonalDetails';

const UserProfile = () => {


  return (
    <>
      <CRow>
        <CCol>
        <UserProfileHeader />
        </CCol>
      </CRow>

      <CRow className='mb-3'>
        <CCol xs={12} md={6} className="mb-3 mb-md-0">
          <PersonalDetails/>
        </CCol>
        <CCol xs={12} md={6} className="mb-3 mb-md-0">
          <CCard>
            <CCardHeader>History</CCardHeader>
            <CCardBody>
              <CTable>
                <CTableBody>

                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UserProfile;
