import React, { FormEventHandler, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css'
import Layout from '../../Components/Layout/Layout';
const ContactUs = () => {
  const[fname,setfName] = useState("");
  const[email,setEmail] = useState("");
  const[text, setText] = useState("");
  const[confirmationText, setConfirmationText] = useState('');

  const sendEmail : FormEventHandler<HTMLFormElement>= (event) => {

    event.preventDefault();
    
    emailjs.sendForm('service_1dfy0ln', 'template_0479t3a', event.currentTarget, 'oN9pDSA5EKM4m_pa7')
      .then((result) => {
          console.log(result.text);
          setConfirmationText(`Thanks ${fname}! We will contact you at ${email}.`)       
          setfName("")
          setEmail("")
          setText("");
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Layout>
    <div>
      <h2 style={{marginTop:'5rem', textAlign:'center'}}>Contact us anytime</h2>
      <h2 style={{marginTop:'5rem', textAlign:'center'}}>{(confirmationText !== "" && confirmationText !==null) && <p>{confirmationText}</p>}</h2>
      
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={sendEmail}>
          <div className={styles.formInput}>
            <label className={styles.formLabel}>Name</label>
            <input type="text" name="user_name" value={fname} onChange={(event) => { setfName(event.target.value) }} required/>
          </div>

          <div className={styles.formInput}>
            <label className={styles.formLabel}>Email</label>
            <input type="email" name="user_email" value={email} onChange={(event) => { setEmail(event.target.value) }} required />
          </div>

          <div className={styles.formInput}>
            <label className={styles.formLabel}>Message</label>
            <textarea name="message" value={text}  onChange={(event) => { setText(event.target.value) }} required/>
          </div>
          
          <input type="submit" value="Send" style={{cursor:'pointer'}} />
        </form>
        
      </div>
    </div>
    </Layout>
  );
};
export default ContactUs;