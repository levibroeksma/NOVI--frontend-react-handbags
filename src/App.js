import React from 'react';
import './App.css';
import Button from './Button';
import Product from './Product';
import Tile from './Tile';
import bagOne from './assets/bag_1.png';
import bagTwo from './assets/bag_2.png';
import bagThree from './assets/bag_3.png';
import bagFour from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <Button
                title={"to the collection"}
            />
            <Button
                title={"shop all bags"}
            />
            <Button
                title={"pre-orders"}
                disabled={true}
            />
        </nav>
        <main>
            <Product
                tag={"Best seller"}
                image={bagOne}
                title={"The handy bag"}
                price={"€400,-"}
            />
            <Product
                tag={"Best seller"}
                image={bagTwo}
                title={"The stylish bag"}
                price={"€250,-"}
            />
            <Product
                tag={"New collection"}
                image={bagThree}
                title={"The simple bag"}
                price={"€300,-"}
            />
            <Product
                tag={"New collection"}
                image={bagFour}
                title={"The trendy bag"}
                price={"€150,-"}
            />
        </main>
        <footer>
            <Tile
                title={"The brand"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt doloremque doloribus esse est eum fugit ipsa ipsam iste magnam nemo nihil obcaecati, omnis optio possimus quas qui repellat reprehenderit sed similique tenetur veniam veritatis vero. Beatae consequuntur, dolorem eius eligendi eum, natus omnis porro quae quia quos reiciendis sequi!"}
            />
            <Tile
                image={brand}
                imgTitle={"Brand"}
            />
            <Tile
                image={ourStory}
                imgTitle={"Our story"}
            />
            <Tile
                title={"Our story"}
                text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt doloremque doloribus esse est eum fugit ipsa ipsam iste magnam nemo nihil obcaecati, omnis optio possimus quas qui repellat reprehenderit sed similique tenetur veniam veritatis vero. Beatae consequuntur, dolorem eius eligendi eum, natus omnis porro quae quia quos reiciendis sequi!"}
            />
        </footer>
      </>
  );
}

export default App;



