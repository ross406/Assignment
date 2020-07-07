import React from 'react';

function Footer() {
  return (
    <div>
      <footer class="bg-dark text-white mt-5 p-4 text-center">
        <div style={{ marginTop: '6rem' }} className="container">
          <div className="row">
            <div className="col">
              <img
                style={{ maxWidth: '250px', marginBottom: '2rem' }}
                src={require('../../assets/brotherhood-global-foundationns.png')}
              />{' '}
              <p>
                All of the operational models are based on constantly escalating
                happy smiles through healthy teamwork and our rigorous effort
                towards service to our society.
              </p>
            </div>
            <div className="col">
              <h2>Navigation</h2>
              <div className="row ml-4 mt-4">
                <div className="ml-4 col">
                  <div className="row mt-4">
                    <a href="!#">Home</a>
                  </div>
                  <div className="row mt-4">
                    <a href="!#">Blog</a>{' '}
                  </div>
                  <div className="row mt-4">
                    <a href="!#">Contact</a>{' '}
                  </div>
                </div>
                <div className="col">
                  <div className="row mt-4 mt-4">
                    <a href="!#">About Us</a>
                  </div>
                  <div className="row mt-4">
                    <a href="!#">Call Now</a>{' '}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <h2>Address</h2>
              <h6
                className="mt-4"
                style={{ marginLeft: '2rem', textAlign: 'left' }}
              >
                Plot . 2902/ 4941 Nageswar tangi Bhubaneswar Pin . 751002
                Khordha , odisha phone:-7205919818 email:-
                info@brotherhoodgft.org
              </h6>
            </div>
          </div>
        </div>
      </footer>
      <footer class="bg-light text-dark p-4 ">
        @ 2020 Brotherhood. All Right Reserved.
      </footer>
    </div>
  );
}
export default Footer;
