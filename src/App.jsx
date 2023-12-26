import FreeTrial from './components/FreeTrial';
import Attribution from './components/Attribution';

const App = () => {

  return (
    <>
      <main className="main container">
        <div className="hero">
          <h1 className="hero__title">Learn to code by watching others</h1>
          <p className="hero__description">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
        </div>
        <FreeTrial />
      </main>
      <Attribution />
    </>
  )
};

export default App;
