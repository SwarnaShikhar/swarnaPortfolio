import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>swarnashikhar2002@gmail.com</h5>
            <a href="mailto:swarnashikhar2002@gmail.com">Send a message</a>
          </article>
        </div>
        <form
          action='https://formspree.io/f/xgebkoeb'
          method='POST'>
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"git 
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
