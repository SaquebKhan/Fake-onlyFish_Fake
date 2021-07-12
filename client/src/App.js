import logo from './logo.svg';
import './App.css';

function App() {






  return (
    <div className="App">
      <header className="App-header">

        <h1>OnlyFish</h1>
        <form>
          <input type="text" placeholder="E-mail" className="email-input" />
        </form>
        <form>
          <input type="text" placeholder="Password" className="password-input" />
        </form>
        <button type="button">LOGIN</button>
        <p>Dont have an account yet?</p>
        <a href="#" className="sign-up">Sign up for OnlyFish.com</a>
      </header>
    </div>
  );
}

export default App;
