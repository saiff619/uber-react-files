import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <><nav>
          <div className="left">
              <img
                  src=" https://download.logo.wine/logo/Uber/Uber-White-Logo.wine.png"
                  alt="" />
              <p>Company</p>
              <p>Safety</p>
              <p>Help</p>
          </div>
          <div className="right">
              <p>EN</p>
              <i className="fa-solid fa-grip" />
              <p>Products</p>
              <p>Login</p>
              <button>Sign up</button>
          </div>
      </nav><div className="card">
              <div className="main">
                  <div className="icon">
                      <div className="car">
                          <i className="fa-solid fa-car" />
                          <p>Ride</p>
                      </div>
                      <div className="car">
                          <i className="fa-solid fa-wifi" />
                          <p>Drive</p>
                      </div>
                  </div>
                  <h1>Request a ride now</h1>
                  <input type="text" placeholder="Enter the pickup Location" />
                  <input type="text" placeholder="Enter Destination" />
                  <div className="btn">
                      <button className="fr">Request Now</button>
                      <button>Schedule For Later</button>
                  </div>
              </div>
          </div><div className="head">
              <h1>Ride with Uber</h1>
          </div><div className="ride">
              <div className="uber">
                  <div className="auto">
                      <img
                          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png"
                          alt="" />
                      <div>
                          <h2>Uber Moto</h2>
                          <p>Get affordable uber auto ride with no hangling.</p>
                      </div>
                  </div>
                  <div className="auto">
                      <img
                          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png"
                          alt="" />
                      <div>
                          <h2>Uber Moto</h2>
                          <p>Get affordable uber auto ride with no hangling.</p>
                      </div>
                  </div>
              </div>
              <div className="uber">
                  <div className="auto">
                      <img
                          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png"
                          alt="" />
                      <div>
                          <h2>Uber Moto</h2>
                          <p>Get affordable uber auto ride with no hangling.</p>
                      </div>
                  </div>
                  <div className="auto">
                      <img
                          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png"
                          alt="" />
                      <div>
                          <h2>Uber Moto</h2>
                          <p>Get affordable uber auto ride with no hangling.</p>
                      </div>
                  </div>
              </div>
          </div><div className="head">
              <h1> Focused on safety, wherever you go</h1>
          </div><div className="safe">
              <div className="img">
                  <img
                      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_499,h_333/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
                      alt="" />
                  <p>Our commitment to your safety</p>
              </div>
              <div className="img">
                  <img
                      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_499,h_333/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
                      alt="" />
                  <p>Setting 10,000+ cities in motion</p>
              </div>
          </div><div className="app">
              <h1>There’s more to love in the apps</h1>
              <div className="down">
                  <div className="imgs">
                      <img
                          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png"
                          alt="" />
                      <p>Downlode the Uber App</p>
                  </div>
                  <div className="imgs">
                      <img
                          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_84,h_84/v1618459257/assets/13/6bfdbd-cdb6-4221-92c1-cab1feaa39f3/original/Rider-App-logo.png"
                          alt="" />
                      <p>Downlode the Uber App</p>
                  </div>
              </div>
          </div><div className="footer">
              <div className="list">
                  <h2>Company</h2> <br />
                  <p>About us</p>
                  <br />
                  <p>Our offerings</p>
                  <br />
                  <p>Newsroom</p>
                  <br />
                  <p>Investors</p>
                  <br />
                  <p>Blog</p>
              </div>
              <div className="list">
                  <h2>Products</h2>
                  <br />
                  <p>Ride</p>
                  <br />
                  <p>Drive </p>
                  <br />
                  <p>Deliver </p>
                  <br />
                  <p>Eat</p>
                  <br />
                  <p>Uber for Business</p>
              </div>
              <div className="list">
                  <h2>Global citizenship</h2>
                  <br />
                  <p>Safety</p>
                  <br />
                  <p>Diversity and Inclusion</p>
              </div>
              <div className="list">
                  <h2>Travel </h2>
                  <br />
                  <p>Airports </p>
                  <br />
                  <p>Cities</p>
              </div>
          </div></>
        
      
  );
}

export default App;
