import logo from './logo.svg';
import './App.css';
import myImage from './Assest/velocity_home.png';
import myImage2 from './Assest/velocity_home.png';
import robot from './Assest/robot.png'
import hands from './Assest/hands.png'

function App() {
  return (
    <div className="App">

      <header style={{ marginBottom: '-20px' }}>
        <nav style={{ backgroundColor: 'white', padding: '20px', textAlign: 'center', marginBottom: '-10px' }}>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'inline', marginRight: '20px' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2em' }}>Home</a></li>
            <li style={{ display: 'inline', marginRight: '20px' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2em' }}>About</a></li>
            <li style={{ display: 'inline', marginRight: '20px' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2em' }}>Services</a></li>
            <li style={{ display: 'inline', marginRight: '20px' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2em' }}>Industries</a></li>
            <li style={{ display: 'inline' }}><a href="#" style={{ textDecoration: 'none', color: 'black', fontSize: '1.2em' }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      <header style={{ marginTop: '-20px' }}>
        <div style={{
          backgroundImage: `url(${myImage})`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <h1>Transforming Connectivity</h1>
          <p style={{ color: 'white' }}>Your Technology Service Partner</p>
          <p style={{ backgroundColor: '', padding: '20px', marginBottom: '0', color: 'white' }}>
            Lorem ipsum is simply dummy text of the printing and typesetting industry.
            Lorem ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book
          </p>
          <a href="#" className="cta">Get Started</a>
        </div>
      </header>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Companies of all sizes trust us to find technical growth and innovation</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>What We Do</h1>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Get cutting edge technology to expand your business <br />to the best solution to next generation technology to expertise growth</p>
      </div>

      <main style={{ backgroundColor: 'white' }}>
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
            <div class="service" style={{ marginRight: '20px', marginBottom: '20px', flexBasis: '30%', width: '30%', height: '200px' }}>
              <h2>Enterprise Development</h2>
              <p>Our expert team of AI and UX designers can create custom AI solutions for your business.</p>
            </div>
            <div class="service" style={{ marginRight: '20px', marginBottom: '20px', flexBasis: '30%', width: '30%' }}>
              <h2>RF planning</h2>
              <p>We develop high-quality mobile apps for businesses of all sizes.</p>
            </div>
            <div class="service" style={{ marginBottom: '20px', flexBasis: '30%', width: '30%' }}>
              <h2>IP Operations</h2>
              <p>Our cloud services are designed to handle the largest of data loads.</p>
            </div>
          </div>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
            <div class="service" style={{ marginRight: '20px', marginBottom: '20px', flexBasis: '30%', width: '30%', height: '200px' }}>
              <h2>UI/UX Design</h2>
              <p>Our expert team of AI and UX designers can create custom AI solutions for your business.</p>
            </div>
            <div class="service" style={{ marginRight: '20px', marginBottom: '20px', flexBasis: '30%', width: '30%' }}>
              <h2> Mobile App Development</h2>
              <p>We develop high-quality mobile apps for businesses of all sizes.</p>
            </div>
            <div class="service" style={{ marginBottom: '20px', flexBasis: '30%', width: '30%' }}>
              <h2>Ecommerce</h2>
              <p>Our cloud services are designed to handle the largest of data loads.</p>
            </div>
          </div>
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}>
            <div class="service" style={{ marginRight: '20px', marginBottom: '20px', flexBasis: '30%', width: '30%', height: '200px' }}>
              <h2>Content Management</h2>
              <p>Our expert team of AI and UX designers can create custom AI solutions for your business.</p>
            </div>
            <div class="service" style={{ marginRight: '20px', marginBottom: '20px', flexBasis: '30%', width: '30%' }}>
              <h2>Recruitment Process Outsourcing</h2>
              <p>We develop high-quality mobile apps for businesses of all sizes.</p>
            </div>
            <div class="service" style={{ marginBottom: '20px', flexBasis: '30%', width: '30%' }}>
              <h2>Cloud Services</h2>
              <p>Our cloud services are designed to handle the largest of data loads.</p>
            </div>
          </div>
        </section>

        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#001a39' }}>
          <div style={{ borderRadius: '5px', padding: '2vw', width: '50vw', position: 'relative' }}>
            <h1 style={{ textAlign: 'center' }}>Technologies</h1>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc' }}>
              <h2 style={{ cursor: 'pointer' }}>Artificial Intelligence</h2>
              <div style={{ display: 'none', padding: '1vw' }}>
                <p>Content related to Artificial Intelligence goes here...</p>
              </div>
            </div>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc' }}>
              <h2 style={{ cursor: 'pointer' }}>Machine Learning</h2>
              <div style={{ display: 'none', padding: '1vw' }}>
                <p>Content related to Machine Learning goes here...</p>
              </div>
            </div>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc' }}>
              <h2 style={{ cursor: 'pointer' }}>Natural Language Processing</h2>
              <div style={{ display: 'none', padding: '1vw' }}>
                <p>Content related to Natural Language Processing goes here...</p>
              </div>
            </div>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc' }}>
              <h2 style={{ cursor: 'pointer' }}>Data Analytics</h2>
              <div style={{ display: 'none', padding: '1vw' }}>
                <p>Content related to Data Analytics goes here...</p>
              </div>
            </div>
            <img src={robot} alt="robot" style={{ position: 'absolute', top: '60%', right: '5%', transform: 'translateY(-50%)', height: '300px' }} />
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', border: '0.1vw solid #ccc', borderRadius: '5px', padding: '2vw', width: '50vw', position: 'relative' }}>
            <h1 style={{ textAlign: 'center' }}>Industury We Serve</h1>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc', textAlign: 'right' }}>
              <h2 style={{ cursor: 'pointer' }}>Communication</h2>
              <div style={{ display: 'none', padding: '1vw', textAlign: 'left' }}>
                <p>Content related to Artificial Intelligence goes here...</p>
              </div>
            </div>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc', textAlign: 'right' }}>
              <h2 style={{ cursor: 'pointer' }}>BFSI</h2>
              <div style={{ display: 'none', padding: '1vw', textAlign: 'left' }}>
                <p>Content related to Machine Learning goes here...</p>
              </div>
            </div>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc', textAlign: 'right' }}>
              <h2 style={{ cursor: 'pointer' }}>Ecommerce</h2>
              <div style={{ display: 'none', padding: '1vw', textAlign: 'left' }}>
                <p>Content related to Natural Language Processing goes here...</p>
              </div>
            </div>
            <div style={{ marginBottom: '1vw', borderBottom: '0.1vw solid #ccc', textAlign: 'right' }}>
              <h2 style={{ cursor: 'pointer' }}>Technology</h2>
              <div style={{ display: 'none', padding: '1vw', textAlign: 'left' }}>
                <p>Content related to Data Analytics goes here...</p>
              </div>
            </div>

            <img src={hands} alt="hands" style={{ position: 'absolute', top: '65%', left: '5%', transform: 'translateY(-50%)', height: '300px' }} />
          </div>
        </div>

      </main>
      <section>
        <div class="content">
          <h1>Client Reviews</h1>

          <div class="review">
            <h2>John Doe</h2>
            <p>Our solutions are simple to use and very effective. I've been using them for over a year and they're still working flawlessly.</p>
          </div>
          <div class="review">
            <h2>Jane Doe</h2>
            <p>I love the fact that I can use our solutions with a lot of data and they still work flawlessly. Highly recommended.</p>
          </div>
          <div class="review">
            <h2>Samuel Johnson</h2>
            <p>I've been using our solutions for a while and they still work flawlessly. I'm very happy with my results.</p>
          </div>

        </div>
      </section>

      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', paddingLeft: '20px' }}>
          <div class="contact">
            <h2>Let's Get Started</h2>
            <p>Drop a message and we'll take care of the rest.</p>
          </div>
        </div>
        <div style={{ width: '50%', border: '2px solid #ccc', borderRadius: '5px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '40px' }}>
          <form style={{ padding: '20px' }}>
            <input type="text" placeholder="Full Name" style={{ marginBottom: '10px', padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="email" placeholder="Email Address" style={{ marginBottom: '10px', padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }} />
            <textarea placeholder="Message" style={{ marginBottom: '10px', padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Submit</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
