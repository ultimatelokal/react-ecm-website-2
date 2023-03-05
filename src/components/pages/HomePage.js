import './HomePage.css'
import ScrollIntoView from './ScrollToTop'
import image_icon from './images/image-icon.png'
import img_connect from './images/connect-with-us.jpg'

function HomePage() {
  return (
    <ScrollIntoView>
      <body>
        <div className='hero-section hero-section-bg'>
          <div className='hero-content'>
            <p className='title'>Discover God</p>
            <p className='subtitle'>Join our online service, or visit us in our Church.</p>
            <div className='btn-row'>
              <button className='map-btn'>View Map</button>
              <button className='live-btn'>Watch Live</button>
            </div>
          </div>
        </div>
        <div className='welcome-div'>
          <div className='welcome-div-wrapper'>
            <p className='title'>WELCOME  </p>

            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
        <div className='secondary-page'>
          <div className='wrapper'>
            <div className='second-page-content'>
              <img src={image_icon}></img>
              <div className='second-page-content-details-wrapper'>
                <p className='title'> Come and Join us</p>
                <p className='description'>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
              </div>
            </div>
          </div>
          <div className='hr-div'>

            <hr />
          </div>
          <div className='wrapper2'>
            <div className='second-page-content'>
              <div className='second-page-content-details-wrapper'>
                <p className='title'> Churches Locations</p>
                <p className='description'>Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
                  <br /><br />• Drumheller <br /> • Red Deer</p>
              </div>
              <img className='image-wrapper2' src={image_icon}></img>
            </div>
          </div>
        </div>

        <div className='contact-form-div'>
          <div className='contact-form-wrapper'>
            <div className='contact-form-image'>
              <img src={img_connect} />
            </div>
            <div className='contact-form'>
              <p className='title'>Connect with us!</p>
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
      </body>
    </ScrollIntoView>
  )
}
export default HomePage