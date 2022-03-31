import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header';
import Fav_Movie from './Fav_Movie';
import { Random_Images } from './Random_Images';
import { Today_Chores } from './Today_Chores';

export class Main extends Component {
  render() {
    return (
      <div>


<Header/>
     <Fav_Movie/>
     <Today_Chores/>
     <Random_Images/>
     <Footer/>
      </div>
    )
  }
}

export default Main