import { Switch, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd';
import Navbar from '../../organismes/Navbar';
import Cryptocurrencies from '../Cryptocurrencies';
import Exchanges from '../Exchanges';
import News from '../News';
import Homepage from '../Homepage';
import CryptoDetails from '../CryptoDetails';
import Footer from '../../organismes/Footer';

import './App.css';
/// End of Import's
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/ryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <footer>
        <div className="footer" >
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
