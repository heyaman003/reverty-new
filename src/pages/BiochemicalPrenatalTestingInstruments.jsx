import React from 'react';
import { Link } from 'react-router-dom';

const BiochemicalPrenatalTestingInstruments = () => {
  return (
    <div className="stretched">
      

      <div id="" className="clearfix">
        <div id="logo">
          <a href="../index.html" className="standard-logo">
            <img src='../images/logo.png' alt="Revvity" />
          </a>
        </div>

        <div id="back">
          <a href="clinical-diagnostics-preeclampsia-testing.html" className="standard-back">
            <img src='../images/back.png' alt="Back" />
          </a>
        </div>

        <div id="home-banner">
          <video id="home-video" autoPlay muted loop playsInline src='../images/clips/prenatal-testing-instruments.webm'></video>
        </div>

        <section id="content">
          <div className="clearfix">
            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="biochemical_instruments_1 clearfix">
                <div className="entry-image">
                  <Link to="/biochemical-instruments-victor">
                    <img className="image_fade" src='../images/life-science-1.png' alt="Biochemical Instruments 1" style={{ opacity: 1 }} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="biochemical_instruments_2 clearfix">
                <div className="entry-image">
                  <Link to="/biochemical-instruments-delfia-xpress">
                    <img className="image_fade" src='../images/life-science-1.png' alt="Biochemical Instruments 2" style={{ opacity: 1 }} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 bottommargin">
              <div className="biochemical_instruments_3 clearfix">
                <div className="entry-image">
                  <Link to="/biochemical-instruments-autodelfia">
                    <img className="image_fade" src='../images/life-science-1.png' alt="Biochemical Instruments 3" style={{ opacity: 1 }} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ol className="breadcrumb">
          <li><a href="../index.html">Home</a></li>
          <li><a href="portfolio.html">Portfolio</a></li>
          <li><a href="clinical-diagnostics.html">Clinical & Diagnostics</a></li>
          <li><a href="clinical-diagnostics-biochemical-prenatal-testing.html">Biochemical Prenatal Testing</a></li>
          <li className="active">Instruments</li>
        </ol>
      </div>

      {/* External JavaScripts */}
      <script type="text/javascript" src="../js/jquery.js"></script>
      <script type="text/javascript" src="../js/functions.js"></script>
      <script type="text/javascript" src="../js/plugins.js"></script>
      <script type="text/javascript" src="../js/uppertab.js"></script>
    </div>
  );
};

export default BiochemicalPrenatalTestingInstruments;
