import React from 'react';
import '../App.css';

import Header from './partials/Header';
import Footer from './partials/Footer';
import CardList from './card/CardList';


const App = ()=>  {
    return (
      <React.Fragment>
      <Header title={"React app list"}/>
      <CardList/>
      <Footer />
    </React.Fragment>
    );
}

export default App;
