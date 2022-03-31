import React, { Component } from 'react'
import ListOfImages from './ListOfImages'

export class Random_Images extends Component {
  render() {

    const images = [{
        image:"https://jpeg.org/images/jpegsystems-home.jpg",
        text:"Jagga Jasoos"
    },
    {
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/JPEG_example_flower.jpg",
        text:"Wonder Woman"
    },
    {
        image: "https://jpeg.org/images/jpeg-home.jpg",
        text:"RRR"
    }
]

    return (
      <div className='random_image'>
        <h1>Random_Images</h1>
           {images.map((e,i) =>
                    <ListOfImages
                    image={e.image}
                    text={e.text}
                    key={i}
                    />
                )}


      </div>
    )
  }
}

export default Random_Images