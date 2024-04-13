import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilContact, cilSpreadsheet, cilCode, cilInstitution } from '@coreui/icons';


const PersonalDetails = () => {

    // Mock data until you fix data from the database
    const personalDetails = [
      { icon: cilContact, label: 'N°CIN', value: '1234567890' },
      { icon: cilSpreadsheet, label: 'Matricule fiscale', value: '1234567890' },
      { icon: cilCode, label: 'Position', value: '1234567890' },
      { icon: cilInstitution, label: 'Departement', value: '1234567890' },
      { icon: cilSpreadsheet, label: 'Birthday', value: '1234567890' },
      { icon: cilSpreadsheet, label: 'Password', value: '1234567890' },
      { icon: cilSpreadsheet, label: 'Upload CV', value: '1234567890' },

      // Add more rows as needed
    ];


  return (
    <>

    <CCard>
      <CCardHeader>Personal Details</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableBody>
                  {personalDetails.map((detail, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell>
                        <CIcon icon={detail.icon} /> {detail.label}:
                      </CTableHeaderCell>
                      <CTableDataCell>{detail.value}</CTableDataCell>
                    </CTableRow>
                  ))}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>

    </>
  );
};

export default PersonalDetails;
