import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import resumePDF from '/resume.pdf';
import { useNavigate } from 'react-router-dom';
const ResumeSection = () => {

    return (
        <div className='relative hidden md:block'>
            <Document file={resumePDF} options={{ workerSrc: "pdf.worker.js" }}  >
                <Page pageNumber={1} className="w-[300px]" />
            </Document>
        </div>
    );
}

export default ResumeSection;
