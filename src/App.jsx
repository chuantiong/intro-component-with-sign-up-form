import Attribution from './components/Attribution';

const App = () => {

  return (
    <>
      <main className="main container">
        <div className="hero">
          <h1 className="hero__title">Learn to code by watching others</h1>
          <p className="hero__description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <div className="pricing">
          <h4 className="pricing__text">
            <span className="bold">
              Try it free 7 days
            </span> then $20/mo. thereafter
            </h4>
        </div>
        <div className="free-trial">
          <form className="free-trial__form">
            <input className="free-trial__input" type="name" placeholder="First Name" />
            <input className="free-trial__input" type="name" placeholder="First Name" />
            <input className="free-trial__input" type="email" placeholder="First Name" />
            <input className="free-trial__input" type="password" placeholder="First Name" />
            <button className="free-trial__button" type='submit'>claim your free trial</button>
          </form>
          <h5 className="free-trial__agreeing-text">By clicking the button, you are agreeing to our <span className="free-trial__terms">Terms and Services</span></h5>
        </div>
      </main>
      <Attribution />
    </>
  )
}

export default App;
