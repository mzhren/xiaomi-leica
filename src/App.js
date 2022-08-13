import './App.css';
import Download from './Download';
import Head from './Head';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';
import GlobalContext from './GlobalContext';
import { useContext } from 'react';

function App() {
  const { loading } = useContext(GlobalContext);
  return (
    <div id="App">
      <div className='max-w-3xl mx-auto p-5 outline-hidden'>
        <Head />
        <div className="-mx-5 my-5 md:mx-0 relative group">
          <Main />
          <Download />
        </div>
        <Footer />
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default App;
