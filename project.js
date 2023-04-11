import React from 'react'
import './style.css'

const Project = () => {
    return (
       <div>
  <div>
    <header className="header">
      <img className="logo" src="image/logo.png" alt />
      <div className="container">
        <nav className="navbar flex1">
          <ul className="nav-menu">
            <li> <a href="#home">Home</a> </li>
            <li> <a href="#about">About</a> </li>
            <li> <a href="#room">Room</a> </li>
            <li> <a href="#services">Services</a> </li>
            <li> <a href="#shop">Shop</a> </li>
            <li> <a href="#gallary">Gallary</a> </li>
            <li> <a href="#blog">Blog</a> </li>
            <li> <a href="#contact">Contact</a> </li>
            <li> <a href="#login">Login</a> </li>
          </ul>
          <div className="hamburger">
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </nav>
      </div>
    </header>
  </div>
  <section>
  <div className="container">
    <h2>Make Memories</h2>
    <p>Discover the place where you have fun &amp; enjoy a lot</p>
    <img className="home" src="image/home.png" alt />
    </div>
  </section>
  <div>
  
  {/* book.js  */}
 < Book/>
 </div> 

  <section className="about" id="about">
    <div className="container">
      <div className="heading">
        <h5>EXPLORE</h5>
        <h2>We are cool to give you pleasure
        </h2>
      </div>
      <div className="content flex  top">
        <div className="left">
          <h3>As much as comfort want to get from us everything
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="flex1">
            <span>Check Availability</span>
            <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
        <div className="right">
          <img src="image/a.png" alt />
        </div>
      </div>
    </div>
  </section>
  <section className="wrapper">
    <div className="item">
      <div className="heading">
        <h5>THE CITY VIEW</h5>
        <h3>A charming view of the city</h3>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p> Duis
        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </section>
  <section className="wrapper2">
    <div className="container">
      <div className="heading mtop">
        <h5>FACILITIES</h5>
        <h2>Giving entirely awesome </h2>
      </div>
    </div>
  </section>
  <section className="room wrapper2 top" id="room">
    <div className="container">
      <div className="heading">
        <h5>OUR ROOMS</h5>
        <h2>Fascinating rooms &amp; suites </h2>
      </div>
      <div className="content flex mtop">
        <div className="left grid2">
          <div className="box">
            <i className="fas fa-desktop" />
            <p>Free Cost</p>
            <h3>No booking fee</h3>
          </div>
          <div className="box">
            <i className="fas fa-dollar-sign" />
            <p>Free Cost</p>
            <h3>Best rate guarantee</h3>
          </div>
          <div className="box">
            <i className="fab fa-resolving" />
            <p>Free Cost</p>
            <h3>Reservations 24/7</h3>
          </div>
          <div className="box">
            <i className="fal fa-alarm-clock" />
            <p>Free Cost</p>
            <h3>High-speed Wi-Fi</h3>
          </div>
          <div className="box">
            <i className="fas fa-mug-hot" />
            <p>Free Cost</p>
            <h3>Free breakfast</h3>
          </div>
          <div className="box">
            <i className="fas fa-user-tie" />
            <p>Free Cost</p>
            <h3>One person free</h3>
          </div>
        </div>
        <div className="right">
          <img src="/image/room.jpg" alt />
        </div>
      </div>
    </div>
  </section>
  <section className="timer about wrapper">
    <div className="background"> </div>
    <div className="container">
      <div className="heading">
        <h5>LAST MINUTE!</h5>
        <h2> <span>Incredible!</span> Are you coming today</h2>
      </div>
      <div id="time" className="flex1 mtop"> </div>
    </div>
  </section>
  <section className="offer mtop" id="services">
    <div className="container">
      <div className="heading">
        <h5>EXCLUSIVE OFFERS </h5>
        <h3>You can get an exclusive offer </h3>
      </div>
      <div className="content grid2 mtop">
        <div className="box flex">
          <div className="left">
            <img src="/image/o1.jpg" alt />
          </div>
          <div className="right">
            <h4>Deluxe Room</h4>
            <div className="rate flex">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>From $50.6/night</h5>
            <button className="flex1">
              <span>Check Availability</span>
              <i className="fas fa-arrow-circle-right" />
            </button>
          </div>
        </div>
        <div className="box flex">
          <div className="left">
            <img src="image/o2.jpg" alt />
          </div>
          <div className="right">
            <h4>Deluxe Room</h4>
            <div className="rate flex">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>From $50.6/night</h5>
            <button className="flex1">
              <span>Check Availability</span>
              <i className="fas fa-arrow-circle-right" />
            </button>
          </div>
        </div>
        <div className="box flex">
          <div className="left">
            <img src="image/o3.jpg" alt />
          </div>
          <div className="right">
            <h4>Deluxe Room</h4>
            <div className="rate flex">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>From $50.6/night</h5>
            <button className="flex1">
              <span>Check Availability</span>
              <i className="fas fa-arrow-circle-right" />
            </button>
          </div>
        </div>
        <div className="box flex">
          <div className="left">
            <img src="image/o4.jpg" alt />
          </div>
          <div className="right">
            <h4>Deluxe Room</h4>
            <div className="rate flex">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>From $50.6/night</h5>
            <button className="flex1">
              <span>Check Availability</span>
              <i className="fas fa-arrow-circle-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="area top">
    <div className="container">
      <div className="heading">
        <h5>RESTAURANT</h5>
        <h3>The area we cover under ecorik</h3>
      </div>
      <div className="content flex mtop">
        <div className="left">
          <img src="image/aera.jpg" alt />
        </div>
        <div className="right">
          <ul>
            <li>Restaurant </li>
            <li>Swimming pool </li>
            <li>Conference room</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button className="flex1">
            <span>Check Availability</span>
            <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="offer2 about wrapper timer top" id="shop">
    <div className="container">
      <div className="heading">
        <h5>EXCLUSIVE OFFERS </h5>
        <h3>You can get an exclusive offer </h3>
      </div>
      <div className="content grid  top">
        <div className="box">
          <h5>UP TO 30% OFF</h5>
          <h3>Swimming for man</h3>
          <span>4.5 <label>(432 Reviews)</label> </span>
          <p>Swimming doller dolor sit aet odu tur adiing elitse</p>
          <div className="flex">
            <i className="fal fa-alarm-clock"> Duration: 2Hours</i>
            <i className="far fa-dot-circle"> 18+ years</i>
          </div>
          <button className="flex1">
            <span>Check Availability</span>
            <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
        <div className="box">
          <h5>UP TO 30% OFF</h5>
          <h3>Swimming for man</h3>
          <span>4.5 <label>(432 Reviews)</label> </span>
          <p>Swimming doller dolor sit aet odu tur adiing elitse</p>
          <div className="flex">
            <i className="fal fa-alarm-clock"> Duration: 2Hours</i>
            <i className="far fa-dot-circle"> 18+ years</i>
          </div>
          <button className="flex1">
            <span>Check Availability</span>
            <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
        <div className="box">
          <h5>UP TO 30% OFF</h5>
          <h3>Swimming for man</h3>
          <span>4.5 <label>(432 Reviews)</label> </span>
          <p>Swimming doller dolor sit aet odu tur adiing elitse</p>
          <div className="flex">
            <i className="fal fa-alarm-clock"> Duration: 2Hours</i>
            <i className="far fa-dot-circle"> 18+ years</i>
          </div>
          <button className="flex1">
            <span>Check Availability</span>
            <i className="fas fa-arrow-circle-right" />
          </button>
        </div>
      </div>
    </div>
    </section>
    
  <section className="gallary top" id="gallary">
    <div className="owl-carousel owl-theme">
      <div className="row">
        <div className="column">
          <img src="image/g1.jpg" alt />
          <img src="image/g3.jpg" alt />
          <img src="image/g4.jpg" alt />
          <img src="image/g5.jpg" alt />
          <img src="image/g2.jpg" alt />
          <img src="image/g3.jpg" alt />
        <div className="overlay">
          </div>
          </div>
          </div>
          </div>
      </section>
  <section className="blog top" id="blog">
    <div className="container">
      <div className="heading">
        <h5>OUR BLOG</h5>
        <h3>News &amp; articles updates</h3>
      </div>
      <div className="content grid mtop">
        <div className="box">
          <div className="img">
            <img src="image/b1.jpg" alt />
          </div>
          <div className="text">
            <div className="flex">
              <i className="far fa-user"> <label>Admin</label> </i>
              <i className="far fa-comments"> <label>Comment</label> </i>
            </div>
            <h3>Celebrating Decade Years Of Hotel In 2020</h3>
            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Read More <i className="far fa-long-arrow-alt-right" /> </a>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/b2.jpg" alt />
          </div>
          <div className="text">
            <div className="flex">
              <i className="far fa-user"> <label>Admin</label> </i>
              <i className="far fa-comments"> <label>Comment</label> </i>
            </div>
            <h3>Celebrating Decade Years Of Hotel In 2020</h3>
            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Read More <i className="far fa-long-arrow-alt-right" /> </a>
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="image/b3.jpg" alt />
          </div>
          <div className="text">
            <div className="flex">
              <i className="far fa-user"> <label>Admin</label> </i>
              <i className="far fa-comments"> <label>Comment</label> </i>
            </div>
            <h3>Celebrating Decade Years Of Hotel In 2020</h3>
            <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#">Read More <i className="far fa-long-arrow-alt-right" /> </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="map top">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14131.036667732067!2d85.32395955!3d27.69383745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1638187678048!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" />
  </section>
  <footer>
    <h3>feeback</h3>
    <div className="container top">
      <div className="content grid  top">
        <div className="box">
        <form action="/action_page.php">
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
      <label htmlFor="pnumber">Phone Number</label>
      <input type="text" id="pnumber" name="phone number" placeholder="Phone Number.." />
      <label htmlFor="country">Country</label>
      <select id="country" name="country">
        <option value="India">India</option>
        <option value="australia">Australia</option>
        <option value="canada">Canada</option>
        <option value="usa">USA</option>
        <option value="india">India</option>
        <option value="south africa">South Africa</option>
        <option value="russia">Russia</option>
        <option value="pakistan">Pakistan</option>
        <option value="bangladesh">Bangladesh</option>
        <option value="zimbawe">Zimbawe</option>
      </select>
      <label htmlFor="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.." style={{height: 200}} defaultValue={""} />
      <a href="feeback 2.html"><input type="submit" className="button" defaultValue="Submit" /></a>
    </form>
    </div>
        <div className="box">
          <h2>Quick Links</h2>
          <ul>
            <li><i className="fas fa-angle-double-right" />Big Data</li>
            <li><i className="fas fa-angle-double-right" />Wellness</li>
            <li><i className="fas fa-angle-double-right" />Spa Gallery</li>
            <li><i className="fas fa-angle-double-right" />Reservation</li>
            <li><i className="fas fa-angle-double-right" />FAQ</li>
            <li><i className="fas fa-angle-double-right" />Contact</li>
          </ul>
        </div>
        <div className="box">
          <h2>Services</h2>
          <ul>
            <li><i className="fas fa-angle-double-right" />Restaurant</li>
            <li><i className="fas fa-angle-double-right" />Swimming Pool</li>
            <li><i className="fas fa-angle-double-right" />Wellness &amp; Spa</li>
            <li><i className="fas fa-angle-double-right" />Conference Room</li>
            <li><i className="fas fa-angle-double-right" />Events</li>
            <li><i className="fas fa-angle-double-right" />Adult Room</li>
          </ul>
        </div>
        <div className="box">
          <h2>Services</h2>
          <div className="icon flex">
            <div className="i">
              <i className="fas fa-map-marker-alt" />
            </div>
            <div className="text">
              <h3>Address</h3>
              <p>205 Fida Walinton, Tongo Street Front The USA</p>
            </div>
          </div>
          <div className="icon flex">
            <div className="i">
              <i className="fas fa-phone" />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+1 7843291047</p>
            </div>
          </div>
          <div className="icon flex">
            <div className="i">
              <i className="far fa-envelope" />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>tint@gmail.com</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>
 )
}

export default Project