import React, { useState } from 'react';

const BiochemicalInstrumentsDelfiaXpress = () => {
  // State to manage active tab (default is 'overview')
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <div id="" className="clearfix">
        <div id="logo">
          <a href="../index.html" className="standard-logo">
            <img src="../images/logo.png" alt="revvity" />
          </a>
        </div>

        <div id="back">
          <a href="/biochemical-prenatal-testing-instruments" className="standard-back">
            <img src="../images/back.png" alt="back" />
          </a>
        </div>

        <div id="home-banner">
          <video
            id="home-video"
            autoPlay
            muted
            loop
            playsInline
            src="../images/clips/cell_analysis_bg.webm"
          ></video>
        </div>

        <section id="content">
          <div className="tab_bg"></div>
          <ul className="tabs uppertab">
            <a
              href="#tab1"
              onClick={() => setActiveTab('overview')}
              className={activeTab === 'overview' ? 'active' : ''}
            >
              Overview
            </a>
            <p className="tab_btm_margin">
              DELFIA® Xpress 6000-0010 random access platform Fast and reliable DELFIA Xpress
              represents an ideal solution for clinics wishing to implement an OSCAR (One Stop Clinic
              for Assesment of Risk) approach.
            </p>
            <a
              href="#tab2"
              onClick={() => setActiveTab('capabilities')}
              className={activeTab === 'capabilities' ? 'active' : ''}
            >
              Capabilities
            </a>
          </ul>

          {/* Conditionally render tab content based on the activeTab state */}
          {activeTab === 'overview' && (
            <div id="tab1" className="tab_content uppertabcontent">
              <h1>DELFIA® Xpress</h1>
              <img
                id="features"
                autoPlay
                muted
                controls
                loop
                playsInline
                src="../images/biochemical_delfiaxpress.png"
                alt="DELFIA Xpress"
              />
            </div>
          )}

          {activeTab === 'capabilities' && (
            <div id="tab2" className="tab_content uppertabcontent">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Full automation with rapid, easy-to-use software design
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Random access</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">First result in 30 min, 40 results per hour</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">Serum assays</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="applicationswithoutimage2">
                      <p className="applicationsp">
                        Supports connectivity with LifeCycle and 3rd party software
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        <ol className="breadcrumb">
          <li>
            <a href="../index.html">Home</a>
          </li>
          <li>
            <a href="portfolio.html">Portfolio</a>
          </li>
          <li>
            <a href="clinical-diagnostics.html">Clinical & Diagnostics</a>
          </li>
          <li>
            <a href="clinical-diagnostics-biochemical-prenatal-testing.html">
              Biochemical Prenatal Testing
            </a>
          </li>
          <li>
            <a href="/biochemical-prenatal-testing-instruments">Instruments</a>
          </li>
          <li className="active">DELFIA® Xpress</li>
        </ol>
      </div>

      
    </>
  );
};

export default BiochemicalInstrumentsDelfiaXpress;
