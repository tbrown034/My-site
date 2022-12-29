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
   
    emailjs.sendForm('service_99v16fc', 'contact_form', form.current, 'oLVh7PnRrJc_IUIfK')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();


  };

  return (
    <>
    <h1>Contact</h1>
    <h3>Intersted in hiring me? Collaborating on a project? Just saying hey? Get in Touch!</h3>
    <div>
    <form id="contactForm" ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" />
      <br/>
      <label>Email or Phone:</label>
      <input type="email" name="user_email" />
      <br/>
      <label>Message:</label>
      <textarea rows="15" name="message" />
    </form>

    <Button form="contactForm" type="submit" value="send" onClick={toggleShowA} className="mb-2">
          Send 
        </Button>
        <Toast delay ="14000" show={showA} autohide="true" onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Success!</strong>
          </Toast.Header>
          <Toast.Body>Thanks for sending your message! I'll get back to you ASAP! - Trevor</Toast.Body>
        </Toast>

    </div>
    </>
  );
};
export default Contact;
