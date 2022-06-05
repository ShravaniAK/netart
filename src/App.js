// import logo from './logo.svg';
import "./App.css";
import FacebookIcon from '@material-ui/icons/Facebook';
import CallIcon from '@material-ui/icons/Call';
import LanguageIcon from '@material-ui/icons/Language';

function App() {
  return (
    <>
      <div className="container">
        <div className="logo">
          <img src="img/logo (4).png" alt="" />
        </div>
        <div className="content">
          <div className="left">
            <img src="img/1 (1).png" alt="" />
          </div>
          <div className="right">
            <h4>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </h4>
            <p>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy. C.R.I. is the highest
              contributor in the country for the projects of EESL (Energy
              Efficiency Services Limited) to replace the old inefficient pumps
              with 5 Star rated energy efficient smart pumps with IoT enabled
              control panel.{" "}
            </p>
            <img src="img/2.png" alt="" />
            <p>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <div className="content2">
          <p className="heading">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
          </p>
          <img src="img/3.png" alt="" />
          <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors 

</p>
<div className="redline"></div>
      </div>
      <div className="bottom">
        <h6>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
        <p>CHEMICALS & PROCESS <div className="red"></div> POWER WATER & WASTE  WATER <div className="red"></div> OILS & GAS PHARMA <div className="red"></div> SUGARS & DISTILLERIES <div className="red"></div> PAPER & PULP <div className="red"></div> MARINE & DEFENCE <div className="red"></div> METAL & MINING <div className="red"></div> FOOD & BEVERAGE <div className="red"></div></p>
        <p> PETROCHEMICAL & REFINERIES  <div className="red"></div> SOLAR <div className="red"></div>  BUILDING <div className="red"></div> HVAC <div className="red"></div>FIRE FIGHTING <div className="red"></div> AGRICULTURE & RESIDENTIAL</p>
      </div>
      <div className="footer">
        <div className="a1">
          <CallIcon/>
          toll free 1234 4456 6667
        </div>
        <div className="a1">
          <FacebookIcon/>
          www.facbook.com/cripumps
        </div>
        <div className="a1">
          <LanguageIcon/>
          www.crigroup.com
        </div>
        
      </div>
        </div>
    </>
  );
}

export default App;
