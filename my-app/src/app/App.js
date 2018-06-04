import React from 'react';
import '../App.css';

import Header from "./partials/Header"
import Footer from "./partials/Footer"
import PostList from "./posts/postList"
import postData from "./data/data"

const App = ()=> {
    return (
      <React.Fragment>
      <Header/>
      <PostList ofPostsData = {postData}/>
      <Footer/>
      </React.Fragment>
    );
}

export default App;
