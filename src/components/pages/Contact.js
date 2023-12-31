import React from 'react';

export default function Contact() {

  return (
    <div className='contactPage'>
      <div><h1>Contact Us</h1></div>
      <div>
        <form target="_blank" action="https://formsubmit.co/kellinoelle@gmail.com" method="POST">
          <div className="form-group">
            <div className="form-row">
              <div className="col">
                <input type="text" name="name" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="col">
                <input type="email" name="email" className="form-control" placeholder="Email Address" required />
              </div>
            </div>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" className="form-control" name="message" rows="10" ></textarea>
          </div>
          <button type="submit" className="btn btn-lg btn-dark btn-block">Submit Form</button>
        </form>
      </div>
  </div>
  );
}
