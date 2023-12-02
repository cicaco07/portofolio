import React from 'react'

const Button = () => {
  const handleDownload = () => {
    const pdfUrl = '/pdf/User Manual.pdf'; 

    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'myDownloadedFile.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} className="btn btn-secondary rounded-full text-lg">
      Download CV
    </button>
  );
}

export default Button

