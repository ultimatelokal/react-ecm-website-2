import ScrollIntoView from './ScrollToTop'
import './AboutUs.css'
import image_about_us from './images/about-us.jpg'
import image_bible from './images/bible-verse.jpg'
import image_logo from './images/ECM-logo.gif'
import image_mission_vision from './images/mission-vission.jpg'
function AboutUs() {
  return (

    <ScrollIntoView>
      <div className='about-us-bg'>
        <div className='about-us-container'>
          <div className='about-us-logo'>
            <img src={image_logo} />
          </div>
          <div className='about-us-description'>
            <p className='title'>ABOUT US</p>
            <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              <br /><br />
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>

      <div className='about-us-img-container'>
        <img src={image_about_us} />
      </div>

      <div className='mission-vision-container'>
        {/* <div className='mission-vision-img'>
          <img src={image_mission_vision} />
        </div> */}
        <div className='mission-vision-description'>
          <p className='title'>
            Mission
          </p>
          <p className='description'>
            We are mandated by God through His Word in John 4:34-38, by the enabling power of the Holy Spirit to be workers in gathering the great harvest of souls worldwide.
          </p>
          <p className='title'>
            Vision
          </p>
          <p className='description'>
            We are commissioned by God through the power of the Holy Spirit to reach out the lost, gather and empower families, and individuals by establishing living Home Cell Groups in every community.
          </p>
        </div>
      </div>

      <div className='bible-verse-container'>
        <div className='bible-verse-description'>
          <div className='quote-sign'>“</div>
          <p className='description'>
            For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.
          </p>
          <div className='bible-verse-source'>John 3:16</div>
          <div className='quote-sign quote-sign-2'>”</div>
        </div>
        <div className='bible-verse-img'>
          <img src={image_bible} />
        </div>
      </div>
    </ScrollIntoView>

  )
}

export default AboutUs