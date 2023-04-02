import logo from './Images/logo.png';
import logo2 from './Images/sofa.png';
import './App.css';

function App() {
  return (
    <body>
      <header className="">
        <div className="flex">
          <img src={logo} className="logo" alt="Logo"></img>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Ressources</li>
            <li>Pricing</li>
          </ul>

          <div className="buttons">
            <button className="logIn">Log in</button>
            <button className="signUp">Sign up</button>
          </div>
        </div>
      </header>
      <main>
        <div className="Fond">
          <div className="im1">
            <div className="intIm1">
              <div className="im1-1">
                <h1>Nice Decoration</h1>
              </div>

              <div className="im1-2">
                <img className="img2" src={logo2} alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="About">
          <h1>About the Compagny</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ipsam dolorem vero mollitia accusantium, corrupti inventore suscipit
            rem esse non aperiam placeat voluptate voluptatum culpa architecto.
            Molestiae laboriosam harum veritatis!
          </p>
        </div>
      </main>
    </body>
  );
}

export default App;
