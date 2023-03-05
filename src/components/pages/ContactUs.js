import './ContactUs.css'
import ScrollIntoView from './ScrollToTop'
import img_connect from './images/contact-page-connect.jpg'
import img_connect2 from './images/contact-page-connect-2.jpg'
import image_icon from './images/image-icon.png'
import icon_fb from './images/icon-fb.png'
import icon_mail from './images/icon-mail.png'
import icon_phone from './images/icon-phone.png'

function ContactUs() {
  return (
    <ScrollIntoView>
      <body>
        <div className='hero-section contactus-section-bg'>
          <div className='hero-content'>
            <p className='title'>We'd love to hear from you</p>
            <p className='subtitle'>Send us your prayer request.</p>
            <div className='btn-row'>
              <button className='map-btn'>Email Us</button>
              <button className='live-btn'>Call Us</button>
            </div>
          </div>
        </div>

        <div className='contact-form-div'>
          <div className='contact-form-wrapper'>
            <div className='contact-form-image'>
              <img src={img_connect} />
            </div>
            <div className='contact-form'>
              <p className='title'>Reach out to us!</p>
              <form action=''  >
                <center>
                  <div>
                    <input className='form-inputs' type='text' placeholder="Full Name" required />
                  </div>
                  <div>
                    <input className='form-inputs' type='email' placeholder="Email" required />
                  </div>
                  <div>
                    <textarea className='form-inputs' type='text' placeholder="Your message here!" required />
                  </div>
                </center>
                <div className='form-btn'>
                  <input type='submit' value='Send Message' />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='other-ways-to-contact-us-bg'>
          <div className='other-ways-to-contact-us-container'>
            <div className='other-ways-to-contact-us-descriptions'>
              <p className='title'>Other ways to contact us!</p>
              <p className='description'>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
              <img src={img_connect2} />
            </div>
            <div className='icons-container'>
              <div className='icons-div'>
                <img src={icon_phone} />
                <div>
                  <p>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem</p>
                  <p>+1(403)-307-8375</p>
                </div>
              </div>
              <div className='icons-div'>
                <img src={icon_mail} />
                <div>
                  <p>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem</p>
                  <p>everydaychrist.info@gmail.com</p>
                </div>
              </div>
              <div className='icons-div'>
                <img src={icon_fb} />
                <p>
                  Stay in touch on our updates, announcements, news and more. Like our Facebook today!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div >
          <hr className='contact-hr' />
        </div>

        <div className='our-locations-bg'>
          <div className='our-locations-container'>
            <div className='our-locations-descriptions'>
              <p className='title'>Our locations</p>
              <p className='description'>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
              <div className='our-locations-img-container'>
                <div>
                  <p>Red Deer</p>
                  <img src={image_icon} />
                </div>
                <div>
                  <p>Drum Heller</p>
                  <img src={image_icon} />
                </div>
              </div>
            </div>
          </div>
        </div>


      </body>
    </ScrollIntoView>
  )
}
export default ContactUs