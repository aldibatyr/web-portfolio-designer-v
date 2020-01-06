import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ModalComponent from '../components/Modal';


const Info = () => {

  const [show, setShow] = useState(false);

  return (
    <Container>
      <Row>
        <div className="heading">
          <h2>August 10th 1994</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-wrapper">
            <div className="text-card">
              <h1>Arrival</h1>
              <div className="divider"></div>
              <p>
                It was a sunny morning in Almaty, Kazakhstan. It was post USSR time and cruel 90's were upon us.
                At that time my parents just started living the life they imagined and worked hard to show their children the life that is possible.
              </p>
            </div>
          </div>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2000, 2003</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>Siblings</h1>
            <div className="divider"></div>
            <p>
              It was just a year until I would go to the elementary school. My brother came in to the world and here I am
              with the need to learn how to be a team player.
              </p>
            <p className="red">I guess people with siblings learn to be a part of a team early on.</p>
            <p>
              On April 2003 our family invited our sister to the world and me and my brother became "guardians".
              </p>
            <p className="red">Because of our sister I learned the power of choosing right words and handling difficult sitations.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2001-2011</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>School Years</h1>
            <div className="divider"></div>
            <p>
              September 2001. First day of school and what would be the beginning of a decade long journey. I was especially fascinated by Math, geometry, Kazakh history, English,  physics, and computer science.
              </p>
            <p>The decade was full of teenage stuff especially with riot-ish behavior, sleepless nights, and gathering best memories.</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>August 2011</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>Beautiful Disaster</h1>
            <div className="divider"></div>
            <p>
              First gig! Yay! I and my friends decided that the idea of a house party in a mountain resort is a great idea. Under the influence of the Project X movie, we decided that it is our turn to start an event creation agency, Well, it was fun but not that profitable and organized. We eventually failed and left with the debt that we could not handle at that time. There we all learned ins and outs of entrepreneurship and teamwork on a professional level. People who I started with are pretty famous vloggers nowadays. But I decided to pursue another path.
              </p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>July 2012</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>Wild Wild West</h1>
            <div className="divider"></div>
            <p>LAX. Dry air. Palm trees and endless summer. That was my first impression of living in Los Angeles. Shortly after, my 17 years old self, realized that movies are movies, and life is life.</p>
            <p>I came to LA with two goals. Get quality education, and meet new people. I got both.</p>
            <p className="red">Here I learned that independence is a powerful tool that can be as harmful as it is useful.</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2012-2015</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>LACC</h1>
            <div className="divider"></div>
            <p>If there is one thing about community colleges that I enjoyed is the ability to meet people from different backgrounds. Tuition is another benefit but as a foreign student, we rarely have to pay what residents pay for college; so, tuition was not the benefit in this case.</p>
            <p>I quickly realized that a liberal form of deciding what is important for you as a student plays a major role in academic success. Parties, drugs, and F***ing around was not an option given the amount I had to pay for tuition.</p>
            <p className='red'>Here I learned the power of money and the importance of time management.</p>
            <h1>Night Shifts</h1>
            <div className="divider"></div>
            <p>While others had it easy and their parents would send a generous amount of money to make living in Los Angeles. I somehow never asked for much from my parents. It always seemed weird to make a decision to fly overseas just to be needing support.</p>
            <p>I made living making hookahs in one of the hookah lounges that is closed nowadays. I wish I started my entry into the working-class different, but lack of proper documentation and school schedule forced me to make living this way.</p>
            <p className="red">Here I learned to save money.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>2015-2017</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>CSUN</h1>
            <div className="divider"></div>
            <p>Right after I graduated from LACC with a degree in Liberal Arts: Social and Behavioral Sciences, I was accepted to a Marketing Degree program at California State University, Northridge. These 2 years were like a roller coaster. Life hits when you are most vulnerable and let your guard down.  The political situation back home changed a bit and local currency plummeted 2 times. It made it harder to leave home after so much I have seen here. So once I graduated from CSUN I decided that my life should tie a knot somewhere on the land of free. So I got the papers and stayed.</p>
            <p className="red">I guess I learned that there are multiple solutions to the problems and not everything is as simple as it seems.</p>

            <h1>Sales Jobs</h1>
            <div className="divider"></div>
            <p>Given the fact that I had experience in customer service and I can talk properly, it was a no brainer to join a team of salesmen to sell services such as moving. What fun times these were. Unfortunately, I found out that there are not many opportunities in the industry besides opening your own company and help people to move.</p>
            <p className="red">That is not the life I have imagined! I thought to myself that there should be more to life than this.</p>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>Present</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>Mojo Hookah Lounge</h1>
            <div className="divider"></div>
            <p>On the side, I am still connected to a hookah industry. I changed the place where I worked and became the operations manager. We also started a YouTube channel to create a community of people who share the same passion.</p>
            <p className="red">It is available via this <a href="https://www.youtube.com/channel/UCtK5rxP5E-FMU9LFpT9S4Rg">link</a>.</p>
          </div>
          <div className="text-card">
            <h1>Choices</h1>
            <div className="divider"></div>
            <p>By that time, I was firm that I want to pursue my childhood passion and be in the field of technology. I started venturing into what is possible if you know the ins and outs of the software. Since most of the time that I spend with electronics nowadays somehow related to the web, it was obvious that web development is a way to go. Although I plan to expand my knowledge in the future to mobile applications as well, at a time when this idea incepted, web development was an obvious choice.</p>
            <p>So I found <a href="http://thinkful.com">Thinkful</a>.</p>
            <p className="red">Here I got hands-on experience.</p>
            <p>We learned technologies like HTML, CSS, JavaScript. We built full-stack applications using React, Express, PostgreSQL, and Node. I connected with senior web developers around the world and learned about various data structures and algorithms. I received mentorship from the best. We pair coded, coded in teams of 4, teams of 5, we struggled, we broke things, we fixed things. Most importantly we gained the necessary skills to enter the web development field.</p>
            <p>In other words, we got the taste of what it is going to be like working in the industry.</p>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="heading">
          <h2>So Why Me?</h2>
          <div className="underline"></div>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <div className="text-card">
            <h1>Background</h1>
            <div className="divider"></div>
            <p>I am 25 years old now. I am young but have seen a thing or two. I am relatable if you have ever followed your dreams. I have a world in front of me and it is for grabs and I feel it.</p>
            <p>I interact with people on a daily basis. This means that I would be able to become a part of a team at no time.</p>
            <p>Being from other culture helps me to look at things different. As much as I love to learn about other cultures, I believe that I can bring another point of view.</p>
            <h1>Personality</h1>
            <p>I think I described who I am and where it leads me clearly. But, as all things there are, words cannot transfer the whole picture. So let's talk.</p>
            <h1>Dedication</h1>
            <p>Having seen a lot of things, I am dedicated to perform at the best possible state. I once promised myself to make a living in a new environment and up to this day doing my best to fulfill this promise</p>
          </div>
        </Col>
        <Col xs={12} md={7}>
          <div className="text-card">
            <h1>Tech I know</h1>
            <Row>
              <Col xs={6}>
                <h2>Front End</h2>
                <ul>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>GSAP</li>
                  <li>ScrollMagic</li>
                </ul>
              </Col>
              <Col>
                <h2>Back End</h2>
                <ul>
                  <li>Node</li>
                  <li>Express</li>
                  <li>RESTful API creation</li>
                  <li>JWT authentication</li>
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Heroku</li>
                </ul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="Contact-button-wrapper">
          <button onClick={() => setShow(true)} className="Contact-button">
            <div className="Contact-button-text">
              <p><b>contact</b></p>
            </div>
            <div className="Contact-button-arrow"><span className="Arrow-body"></span><span className="Arrow-triangle"></span></div>
          </button>
        </div>
        <ModalComponent
          show={show}
          onHide={() => setShow(false)}
        />
      </Row>





    </Container>
  )
}

export default Info;
