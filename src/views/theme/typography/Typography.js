
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'
import Calendar from './Calendar';
import React from 'react';

const Typography = () => {




  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          Headings
          <DocsLink href="https://coreui.io/docs/content/typography/" />
        </CCardHeader>
        <CCardBody>
        <div>
      <h1>My Calendar App</h1>
      <Calendar />
    </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Typography
