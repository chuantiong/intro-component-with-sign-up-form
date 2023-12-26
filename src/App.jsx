import errorIcon from './assets/icon-error.svg';
import Attribution from './components/Attribution';

const App = () => {

  return (
    <>
      <main className="main container">
        <div className="hero">
          <h1 className="hero__title">Learn to code by watching others</h1>
          <p className="hero__description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <section className="free-trial">
          <div className="pricing">
            <h4 className="pricing__text">
              <span className="bold">
                Try it free 7 days
              </span> then $20/mo. thereafter
              </h4>
          </div>
          <div className="claim">
            <form className="claim__form">
              <div className="input">
                <div className="input__input-wrapper">
                  <input
                    className="input__input-field"
                    type="name"
                    placeholder="first Name"
                  />
                  <img className="input__error-icon" src={errorIcon} alt="" />
                </div>
                <span className="input__error">
                  First name cannot be empty
                </span>
              </div>
              <div className="input">
                <div className="input__input-wrapper">
                  <input
                    className="input__input-field"
                    type="name"
                    placeholder="last Name"
                  />
                  <img className="input__error-icon" src={errorIcon} alt="" />
                </div>
                <span className="input__error">Last name cannot be empty</span>
              </div>
              <div className="input">
                <div className="input__input-wrapper">
                  <input
                    className="input__input-field"
                    type="email"
                    placeholder="email address"
                  />
                <img className="input__error-icon" src={errorIcon} alt="" />
                </div>
                <span className="input__error">Looks like this is not an email</span>
              </div>
              <div className="input">
                <div className="input__input-wrapper">
                  <input
                    className="input__input-field"
                    type="password"
                    placeholder="password"
                  />
                <img className="input__error-icon" src={errorIcon} alt="" />
                </div>
                <span className="input__error">Password cannot be empty</span>
              </div>
              <button className="claim__button" type='submit'>claim your free trial</button>
            </form>
            <h5 className="claim__agreeing-text">By clicking the button, you are agreeing to our <span className="claim__terms">Terms and Services</span></h5>
          </div>
        </section>
      </main>
      <Attribution />
    </>
  )
};

export default App;
