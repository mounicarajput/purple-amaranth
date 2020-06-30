import React from 'react';

export default class ContactSection extends React.Component {
    render() {
        return (
            <section className="section">
              <div className="container container--md">
                <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  </div>
                  <input type="hidden" name="form-name" value="contactForm" />
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Your email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <div className="form-select-wrap">
                      <select name="subject" id="subject">
                        <option value="">Please select</option>
                        <option value="Business Inquiries">Business Inquiries</option>
                        <option value="Sponsorship">Partnerships</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="5" placeholder="Your message" />
                  </div>
                  <div className="form-group form-checkbox">
                    <input type="checkbox" name="consent" id="consent" />
                    <label htmlFor="consent">I understand that this form is storing my submitted information so I can be
                      contacted.</label>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="button">Get In Touch</button>
                  </div>
                </form>
              </div>
            </section>
        );
    }
}
