import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID , process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          toast.success("Email Sent", {
            icon: '🙌🏻',
            pauseOnHover: false,
            style: {backgroundColor: '#FD7F20', color: 'white', fontSize: '1.5rem', fontFamily: 'Montserrat'}
          })
      }, (error) => {
          toast.error("Can't Send Email", {
            icon: '🙏🏻',
            pauseOnHover: false,
            style: {backgroundColor: '#FD7F20', color: 'white', fontSize: '1.5rem', fontFamily: 'Montserrat'}
          })
      });
      e.target.reset();
    };
  return (
    <section className="contact" id="contact">
        <div className="contact-container">
            <h1 className="contact-header">contact</h1>
            <ToastContainer autoClose={2000} />
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name='name' id='name' placeholder='Name' required />
                <input type="email" name="email" id="email" placeholder='Email' required />
                <input type="subject" name="subject" id="subject" placeholder='Subject' required />
                <textarea name="message" id="message" cols="70" rows="10" placeholder='Message' required />
                <input type="submit" className='mail-submit' value="Send" />
            </form>
        </div>
    </section>
  )
}

export default Contact