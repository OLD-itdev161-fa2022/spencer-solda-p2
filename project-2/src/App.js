import React, {useState} from 'react';

function App() {
  return <div>
    {/*The Beatles Below*/}

    <Folder name="The Beatles">

      <Folder name="Sgt. Pepper's Lonely Hearts Club Band">
        <File name="Album Cover.jpg"/>
        <File name="Credits.txt"/>
          <Folder name="Side 1">
            <File name="1 - Sgt Pepper's Lonely Hearts Club Band.mp3"/>
            <File name="2 - With a Little Help from My Friends.mp3"/>
            <File name="3 - Lucy in the Sky with Diamonds.mp3"/>
            <File name="4 - Getting Better.mp3"/>
            <File name="5 - Fixing a Hole.mp3"/>
            <File name="6 - She's Leaving Home.mp3"/>
            <File name="7 - Being for the Benefit of Mr Kite.mp3"/>
          </Folder>
          <Folder name="Side 2">
            <File name="1 - Within You Without You.mp3"/>
            <File name="2 - When I'm Sixty-Four.mp3"/>
            <File name="3 - Lovely Rita.mp3"/>
            <File name="4 - Good Morning Good Morning.mp3"/>
            <File name="5 - Sgt Pepper's Lonely Hearts Club Band (Reprise).mp3"/>
            <File name="6 - A Day in the Life.mp3"/>
          </Folder>
      </Folder>

      <Folder name="Abbey Road">
        <File name="Album Cover.jpg"/>
        <File name="Credits.txt"/>

        <Folder name="Side 1">
          <File name="1 - Come Together.mp3"/>
          <File name="2 - Something.mp3"/>
          <File name="3 - Maxwell's Silver Hammer.mp3"/>
          <File name="4 - Oh! Darling.mp3"/>
          <File name="5 - Octopus's Garden.mp3"/>
          <File name="6 - I Want You (She's So Heavy).mp3"/>
        </Folder>
        <Folder name="Side 2">
            <File name="1 - Here Comes the Sun.mp3"/>
            <File name="2 - Because.mp3"/>
            <File name="3 - You Never Give Me Your Money.mp3"/>
            <File name="4 - Sun King.mp3"/>
            <File name="5 - Mean Mr Mustard.mp3"/>
            <File name="6 - Polythene Pam.mp3"/>
            <File name="7 - She Came In Through the Bathroom Window.mp3"/>
            <File name="8 - Golden Slumbers.mp3"/>
            <File name="9 - Carry That Weight.mp3"/>
            <File name="10 - The End.mp3"/>
            <File name="11 - Her Majesty.mp3"/>
          </Folder>
      </Folder>
    </Folder>

    {/*The Doors Below*/}

    <Folder name="The Doors">
      <Folder name="Morrison Hotel">
        <File name="Album Cover.jpg"/>
        <File name="Credits.txt"/>
        
        <Folder name="Side 1">
          <File name="1 - Roadhouse Blues.mp3"/>
          <File name="2 - Waiting for the Sun.mp3"/>
          <File name="3 - You Make Me Real.mp3"/>
          <File name="4 - Peace Frog.mp3"/>
          <File name="5 - Blue Sunday.mp3"/>
          <File name="6 - Ship of Fools.mp3"/>
        </Folder>
        <Folder name="Side 2">
          <File name="1 - Land Ho!.mp3"/>
          <File name="2 - The Spy.mp3"/>
          <File name="3 - Queen of the Highway.mp3"/>
          <File name="4 - Indian Summer.mp3"/>
          <File name="5 - Maggie M'Gill.mp3"/>
        </Folder>
      </Folder>

      <Folder name="L.A. Woman">
        <File name="Album Cover.jpg"/>
        <File name="Credits.txt"/>

        <Folder name="Side 1">
          <File name="1 - The Changeling.mp3"/>
          <File name="2 - Love Her Madly.mp3"/>
          <File name="3 - Been Down So Long.mp3"/>
          <File name="4 - Cars Hiss by My Window.mp3"/>
          <File name="5 - LA Woman.mp3"/>
        </Folder>
        <Folder name="Side 2">
          <File name="1 - L'America.mp3"/>
          <File name="2 - Hyacinth House.mp3"/>
          <File name="3 - Crawling King Snake.mp3"/>
          <File name="4 - The WASP.mp3"/>
          <File name="5 - Riders on the Storm.mp3"/>
        </Folder>

      </Folder>
    
    </Folder>


    {/*Pink Floyd Below*/}

    <Folder name="Pink Floyd">
    
      <Folder name="The Dark Side of the Moon">
        <File name="Album Cover.jpg"/>
        <File name="Credits.txt"/>

        <File name="1 - Speak to Me.mp3"/>
        <File name="2 - Breathe.mp3"/>
        <File name="3 - On the Run.mp3"/>
        <File name="4 - Time.mp3"/>
        <File name="5 - The Great Gig in the Sky.mp3"/>
        <File name="6 - Money.mp3"/>
        <File name="7 - Us and Them.mp3"/>
        <File name="8 - Any Colour You Like.mp3"/>
        <File name="9 - Brain Damage.mp3"/>
        <File name="10 - Eclipse.mp3"/>
      </Folder>

      <Folder name="The Wall">
        <File name="Album Cover.jpg"/>
        <File name="Credits.txt"/>

        <Folder name="Side 1">
          <File name="1 - In the Flesh?.mp3"/>
          <File name="2 - The Thin Ice.mp3"/>
          <File name="3 - Another Brick in the Wall, Part 1.mp3"/>
          <File name="4 - The Happiest Days of Our Lives.mp3"/>
          <File name="5 - Another Brick in the Wall, Part 2.mp3"/>
          <File name="6 - Mother.mp3"/>
        </Folder>
        <Folder name="Side 2">
          <File name="1 - Goodbye Blue Sky.mp3"/>
          <File name="2 - Empty Spaces.mp3"/>
          <File name="3 - Young Lust.mp3"/>
          <File name="4 - One of My Turns.mp3"/>
          <File name="5 - Don't Leave Me Now.mp3"/>
          <File name="6 - Another Brick in the Wall, Part 3.mp3"/>
          <File name="7 - Goodbye Cruel World.mp3"/>
        </Folder>
        <Folder name="Side 3">
          <File name="1 - Hey You.mp3"/>
          <File name="2 - Is There Anybody Out There?.mp3"/>
          <File name="3 - Nobody Home.mp3"/>
          <File name="4 - Vera.mp3"/>
          <File name="5 - Bring the Boys Back Home.mp3"/>
          <File name="6 - Comfortably Numb.mp3"/>
        </Folder>
        <Folder name="Side 4">
          <File name="1 - The Show Must Go On.mp3"/>
          <File name="2 - In the Flesh.mp3"/>
          <File name="3 - Run Like Hell.mp3"/>
          <File name="4 - Waiting for the Worms.mp3"/>
          <File name="5 - Stop.mp3"/>
          <File name="6 - The Trial.mp3"/>
          <File name="7 - Outside the Wall.mp3"/>
        </Folder>
      </Folder>
    </Folder>

    



    
  </div>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const direction = isOpen ? 'down' : 'right';


  return <div>
    <span onClick={() => setIsOpen(!isOpen)}>
    <i className="yellow folder icon"></i>
    <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{marginLeft: '17px'}}>
      {isOpen ? children : null}
    </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp3:'headphones',
    jpg:'file image',
    txt:'sticky note outline'

    
  };

  return <div>
  <i className={`${fileIcons[fileExtension]} icon`}></i>
    {name}
  </div>
}

export default App;
