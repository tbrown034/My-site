import React, { useRef }  from 'react';
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';


 const Contact = () => {
  const form = useRef();
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

  const sendEmail = (e) => {
    console.log('handleSubmit ran');
    e.preventDefault();
    e.target.reset();


  };

  return (
    <>
    <h1>Contact</h1>
    <h3>Intersted in hiring me? Collaborating on a project? Just saying hey? Get in Touch!</h3>
    <div>
    <form id="contactForm" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
    </form>

    <Button form="contactForm" type="submit" value="send" onClick={toggleShowA} className="mb-2">
          Send 
        </Button>
        <Toast show={showA} autohide="true" onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success!</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Thanks for sending your message! I'll get back to you ASAP!</Toast.Body>
        </Toast>

    </div>
    </>
  );
};
export default Contact;
