import ScrollIntoView from './ScrollToTop'
import './Events.css'
import image_event1 from './images/event-1.jpg'
import image_event2 from './images/event-2.jpg'
import image_event3 from './images/event-3.jpg'
import icon_pin from './images/icon-pin.png'
import icon_time from './images/icon-clock.png'

function Events() {
  return (
    <ScrollIntoView>
      <div className='hero-section events-section-bg'>
        <div className='hero-content'>
          <p className='title'>Church Events</p>
          <p className='subtitle'>Join our Church Events. Be part of our family that represent Jesus Christ.</p>
          <div className='btn-row'>
            <button className='map-btn'>Upcoming Events</button>
            <button className='live-btn'>Event Gallery</button>
          </div>
        </div>
      </div>

      <div className='upcoming-events-bg'>
        <div className='upcoming-events-container'>
          <div className='upcoming-events-description'>
            <p className='title'>UPCOMING EVENTS</p>
          </div>
        </div>
      </div>

      <div className='upcoming-eventslist-bg'>
        <div className='upcoming-events-wrapper'>

          <div className='upcoming-eventslist-wrapper'>
            <div className='upcoming-eventslist-container'>
              <div className="upcoming-thumbnail">
                <img src={image_event1} />
                <div className="event-date-box">
                  <div className="date-box-day">5</div>
                  <div className="date-box-month">March</div>
                  <div className="date-box-year">2023</div>
                </div>
              </div>
              <div className='upcoming-details-bg'>
                <div className="upcoming-details">
                  <p className="title">Your Event Here</p>
                </div>
                <div className="address">
                  <div className="d-block">
                    <img src={icon_pin} />
                    <p>Your Location</p>
                  </div>
                  <div className="d-block">
                    <img src={icon_time} />
                    <p>00:00 AM - 00:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='upcoming-eventslist-wrapper'>
            <div className='upcoming-eventslist-container'>
              <div className="upcoming-thumbnail">
                <img src={image_event2} />
                <div className="event-date-box">
                  <div className="date-box-day">5</div>
                  <div className="date-box-month">March</div>
                  <div className="date-box-year">2023</div>
                </div>
              </div>
              <div className='upcoming-details-bg'>
                <div className="upcoming-details">
                  <p className="title">Your Event Here</p>
                </div>
                <div className="address">
                  <div className="d-block">
                    <img src={icon_pin} />
                    <p>Your Location</p>
                  </div>
                  <div className="d-block">
                    <img src={icon_time} />
                    <p>00:00 AM - 00:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className='upcoming-eventslist-wrapper'>
            <div className='upcoming-eventslist-container'>
              <div className="upcoming-thumbnail">
                <img src={image_event3} />
                <div className="event-date-box">
                  <div className="date-box-day">5</div>
                  <div className="date-box-month">March</div>
                  <div className="date-box-year">2023</div>
                </div>
              </div>
              <div className='upcoming-details-bg'>
                <div className="upcoming-details">
                  <p className="title">Your Event Here</p>
                </div>
                <div className="address">
                  <div className="d-block">
                    <img src={icon_pin} />
                    <p>Your Location</p>
                  </div>
                  <div className="d-block">
                    <img src={icon_time} />
                    <p>00:00 AM - 00:00 PM</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* <div className='events-gallery-bg'>
        <div className='events-gallery-container'>
          <div className='events-gallery-description'>
            <p className='title'>Church Events</p>
            <p className='subtitle'>Join our Church Events. Be part of our family that represent Jesus Christ.</p>
          </div>
          <div className='events-gallery-img'>

          </div>
        </div>
      </div> */}

    </ScrollIntoView>
  )
}

export default Events
