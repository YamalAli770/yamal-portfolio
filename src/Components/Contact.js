import React from 'react'

const Contact = () => {
  return (
    <section className="contact" id="contact">
        <div className="contact-container">
            <h1 className="contact-header">contact</h1>
            <form action="" className="contact-form">
                <input type="text" name='name' id='name' placeholder='Name' />
                <input type="email" name="email" id="email" placeholder='Email' />
                <textarea name="msg" id="msg" cols="70" rows="10" placeholder='Message' />
            </form>
            <button type="submit" className='mail-submit'>Send</button>
        </div>
    </section>
  )
}

export default Contact