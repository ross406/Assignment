import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './Landing.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Landing() {
  return (
    <div>
      <Parallax bgImage={require('../../assets/parallax.jpg')}>
        Blur transition from min to max
        <div style={{ height: '500px' }} />
      </Parallax>
      <div
        style={{ marginTop: '-3rem' }}
        class="row row-eq-height justify-content-center mx-5"
      >
        <div class="col-lg-4 mb-4">
          <div class="card">
            <div className="row">
              <div className="col ">
                <img
                  style={{
                    maxWidth: '75px',
                    marginLeft: '4rem',
                    marginTop: '3rem',
                    marginBottom: '3rem',
                  }}
                  src={require('../../assets/1.png')}
                />
              </div>
              <div className="col">
                <div class="card-body">
                  <h5 class="card-title">MISSION</h5>
                  <p class="card-text">To eradicate hunger and poverty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="card">
            <div className="row">
              <div className="col ">
                <img
                  style={{
                    maxWidth: '75px',
                    marginLeft: '4rem',
                    marginTop: '3rem',
                    marginBottom: '3rem',
                  }}
                  src={require('../../assets/2.png')}
                />
              </div>
              <div className="col">
                <div class="card-body">
                  <h5 class="card-title">VISION</h5>
                  <p class="card-text">
                    A world full of people devoid of miseries and pain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-4 mb-4">
          <div class="card">
            <div className="row">
              <div className="col ">
                <img
                  style={{
                    maxWidth: '75px',
                    marginLeft: '4rem',
                    marginTop: '3rem',
                    marginBottom: '3rem',
                  }}
                  src={require('../../assets/3.png')}
                />
              </div>
              <div className="col">
                <div class="card-body">
                  <h5 class="card-title">MOTO</h5>
                  <p class="card-text">We rise by lifting others.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          style={{ marginTop: '6rem' }}
          className="container text-center col-md-6 offset-md-3"
        >
          <h2 style={{ fontSize: '3rem' }}>Motive</h2>
          <h6
            style={{ fontSize: '1rem', marginTop: '4rem' }}
            className="container"
          >
            The only way to do great work is to love what you do & the most
            important thing within our team is to work wholeheartedly. A single
            act of kindness is like a drop of water on a dessert affecting more
            than the original need. The smallest act of kindness is worth more
            than the grandest intention. And our team inspired by Utkal Mani
            Gopabandhu Das.
          </h6>
        </div>
      </div>
      <div>
        <img
          style={{ marginBottom: '5rem', marginTop: '6rem', maxWidth: '100%' }}
          src={require('../../assets/img.png')}
        />
      </div>
      <div className="container">
        <div
          style={{ marginTop: '6rem' }}
          className="container text-center col-md-6 offset-md-3"
        >
          <h2 style={{ fontSize: '3rem' }}>A small Help</h2>
          <h6
            style={{ fontSize: '1rem', marginTop: '4rem' }}
            className="container"
          >
            Brotherhood global foundation Trust has created a revolution among
            youngsters, which not only based on ethics but also added value and
            believing in our culture and tradition also.
          </h6>
        </div>

        <div style={{ marginTop: '3rem' }} className="container">
          <div className="row">
            <div class="card col" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
            <div class="card col mx-3" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
            <div class="card col" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
            <div class="card col mx-3" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '2rem' }} className="container">
          <div className="row">
            <div class="card col" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
            <div class="card col mx-3" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
            <div class="card col" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
            <div class="card col mx-3" style={{ width: '18rem' }}>
              <img
                class="card-img-top"
                src={require('../../assets/blog1.jpeg')}
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">COVID-19 Relief Services</h5>
                <p class="card-text">In Bhubaneswar at Forest Park.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: '6rem' }}
        className="container text-center col-md-6 offset-md-3"
      >
        <h2 style={{ fontSize: '3rem' }}>Our Team</h2>
        <h6
          style={{ fontSize: '1rem', marginTop: '4rem' }}
          className="container"
        >
          We make a difference in the lives of people during a very traumatic
          time in their life.
        </h6>
      </div>
      <div style={{ maxWidth: '40%', marginTop: '6rem' }} className="container">
        <Carousel>
          <div>
            <img src={require('../../assets/team1.jpg')} />
            <p className="legend">Sanjit Senapati :- Managing Trusty</p>
          </div>
          <div>
            <img src={require('../../assets/team2.jpg')} />
            <p className="legend">Satyajit Senapati :- Founder</p>
          </div>
          <div>
            <img src={require('../../assets/team3.jpg')} />
            <p className="legend">Sujit Senapati :- Trusty</p>
          </div>
        </Carousel>
      </div>
      <div
        style={{
          backgroundColor: 'red',
          marginTop: '8rem',
          paddingTop: '6rem',
        }}
        className="align-self-center"
      >
        <div className="container">
          <div class="row">
            <div class="col-sm ml-5 text-center mb-3">
              <img
                style={{
                  marginBottom: '3rem',
                  textAlign: 'center',
                  maxWidth: '5rem',
                }}
                src={require('../../assets/11.png')}
              />{' '}
              <h4>Ration Kits Distributed</h4>
              <h1>5900</h1>
            </div>
            <div class="col-sm ml-5 text-center">
              <img
                style={{
                  marginBottom: '3rem',
                  textAlign: 'center',
                  maxWidth: '5rem',
                }}
                src={require('../../assets/22.png')}
              />
              <h4>Cash Help Extended</h4>
              <h1>Rs 240654</h1>
            </div>
            <div class="col-sm ml-5 text-center">
              <img
                style={{
                  marginBottom: '3rem',
                  textAlign: 'center',
                  maxWidth: '5rem',
                }}
                src={require('../../assets/33.png')}
              />
              <h4>People Provided Help</h4>
              <h1>3565</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: '6rem' }}
        className="container text-center col-md-6 offset-md-3"
      >
        <h2 style={{ fontSize: '3rem' }}>A Helping Hand</h2>
        <h6
          style={{ fontSize: '1rem', marginTop: '4rem' }}
          className="container"
        >
          Making a difference by extending a helping hand for a social cause is
          like prestidigitating the magic of highest prestige.
        </h6>
      </div>
      <div style={{ marginTop: '3rem' }} className="container">
        <div className="row">
          <div class="card col" style={{ width: '18rem' }}>
            <img
              class="card-img-top"
              src={require('../../assets/blog1.jpeg')}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">A helping hand</h5>
              <p class="card-text">In Bhubaneswar at Forest Park.</p>
            </div>
          </div>
          <div class="card col mx-3" style={{ width: '18rem' }}>
            <img
              class="card-img-top"
              src={require('../../assets/blog1.jpeg')}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">COVID-19 Relief Services</h5>
              <p class="card-text">In Bhubaneswar at Forest Park.</p>
            </div>
          </div>
          <div class="card col" style={{ width: '18rem' }}>
            <img
              class="card-img-top"
              src={require('../../assets/blog1.jpeg')}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">COVID-19 Relief Services</h5>
              <p class="card-text">In Bhubaneswar at Forest Park.</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ marginTop: '6rem' }}
        className="container text-center col-md-6 offset-md-3"
      >
        <h2 style={{ fontSize: '3rem' }}>Major Works</h2>
        <h6
          style={{ fontSize: '1rem', marginTop: '4rem' }}
          className="container"
        >
          Our major work based on Child Education, Child health, Save Girl
          Child, Girl Education, Women health care and education, Employment,
          Training, poor rehabilitation, Food & Nutrition, plantation, Serving
          old orphan people, public awareness etc.
        </h6>
      </div>
    </div>
  );
}
export default Landing;
