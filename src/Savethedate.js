import React from 'react';
import './Savethedate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../src/image/noun-time-6768567.png";
import img2 from "../src/image/noun-chruch-5505991.png";
import img3 from "../src/image/noun-date-4017641.png";
import img4 from "../src/image/noun-hall-gate-3862038.png";
import vid1 from "../src/video/save the date.webm";
import sid1 from "../src/image/jj/side-1.png"
import sid2 from "../src/image/jj/side-2.png"
import sid3 from "../src/image/jj/side-3.png"
import sid4 from "../src/image/jj/side-4.png"
import sid5 from "../src/image/jj/side-5.png"
import sid6 from "../src/image/jj/side-6.png"
import sid7 from "../src/image/jj/side-7.png"
import logo from "../src/image/logo/Logo.png"
import savethedate from "../src/image/Wedding-amico.png"
const InvitationCard = () => {



    useEffect(() => {
        AOS.init();
    }, []);
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    const openMap = (url) => {
        window.open(url, '_blank');
    };

    const images = [

        <img src={sid1} alt="Image 5" key={0} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />, // Adjust the borderRadius value as needed
        <img src={sid2} alt="Image 6" key={1} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid3} alt="Image 7" key={2} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid4} alt="Image 8" key={3} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid5} alt="Image 7" key={4} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid6} alt="Image 8" key={5} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />,
        <img src={sid7} alt="Image 8" key={5} style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />

    ];

    return (
        <div className="card-container">
            <div className="banner" />

            <div className="image-slider">
                <Slider {...sliderSettings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            {image}
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Save the Date Video Section */}
            <div className="video-section" >
                <h3 className='tit-1'>So they are no longer two, but one. Therefore, what God has joined together, let no one separate.</h3>
                <h3 className='tit-2'>  Matthew 19:6</h3>
                <video width="100%" controls data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-duration="1000">
                    <source src={vid1} type="video/mp4" />

                    Your browser does not support the video tag.
                </video>



            </div>
            {/* Event Details Section */}
            <div className="event-details">
                <h4 className="event-heading">Saturday Event Info</h4>
                <div className="event-info">
                    {/* Event date */}
                    <div className="event-info-item" data-aos="zoom-out-right" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img3} alt="Event Date" />
                        <p className="event-date">June 8, Saturday</p>
                    </div>
                    {/* Event time */}
                    <div className="event-info-item" data-aos="zoom-out-left" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img1} alt="Event Time" />
                        <p className="event-time">6:00 PM to 9:00 PM</p>
                    </div>
                    {/* Event location - Hall */}
                    <div className="event-info-item" data-aos="zoom-out-left" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img4} alt="Hall" />
                        <p className="event-location">Galaxy Auditorium</p>
                        <button onClick={() => openMap('https://maps.app.goo.gl/JFgyKKfyh6HXo3EU6')} > {/* Set the duration to 2000 milliseconds (2 seconds) */}
                            Location
                        </button>
                    </div>
                </div>
            </div>
            <div className="event-details">
                <h4 className="event-heading">Sunday Event Info</h4>
                <div className="event-info">
                    {/* Event date */}
                    <div className="event-info-item" data-aos="zoom-out-right" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img3} alt="Event Date" />
                        <p className="event-date">June 9, Sunday</p>
                    </div>
                    {/* Event time */}
                    <div className="event-info-item" data-aos="zoom-out-left" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img1} alt="Event Time" />
                        <p className="event-time">10:30 AM to 3:00 PM</p>
                    </div>
                    {/* Event location - Church */}
                    <div className="event-info-item" data-aos="zoom-out-right" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img2} alt="Church" />
                        <p className="event-location">St. Paul The Hermit Church </p>
                        <button onClick={() => openMap('https://maps.app.goo.gl/xXhnKDyrhTHckQJi6')} > {/* Set the duration to 2000 milliseconds (2 seconds) */}
                            Location
                        </button>
                    </div>
                    {/* Event location - Hall */}
                    <div className="event-info-item" data-aos="zoom-out-left" data-aos-duration="1000"> {/* Set the duration to 2000 milliseconds (2 seconds) */}
                        <img className="event-img" src={img4} alt="Hall" />
                        <p className="event-location">A1 Auditorium</p>
                        <button onClick={() => openMap('https://maps.app.goo.gl/6S6U6FnEgtnD2ydR9')} > {/* Set the duration to 2000 milliseconds (2 seconds) */}
                            Location
                        </button>
                    </div>
                </div>
            </div>

            <div>

                <img src={savethedate} alt="Save the Date" className="save-the-date-image" />
            </div>
            <footer>

                <div class="footer-logo">
                    <img src={logo} alt="Logo" class="logo-image" />
                </div>

            </footer>
        </div>

    );
};

export default InvitationCard;
