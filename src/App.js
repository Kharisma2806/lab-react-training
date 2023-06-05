import logo from './logo.svg';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import { useState } from 'react';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import profiles from './data/berlin.json';
import FaceBook from './components/FaceBook';
import SignupPage from './components/SignupPage';
import RgbColorPicker from './components/RgbColorPicker';

const idArray = [
  {lastName: 'Doe',
  firstName: 'John',
  gender: 'male',
  height: 178,
  birth: '1992-07-14',
  picture: "https://randomuser.me/api/portraits/men/44.jpg",
},
{
  lastName:'Delores',
  firstName: 'Obrien',
  gender: 'female',
  height: 172,
  birth: '1988-05-11',
  picture: "https://randomuser.me/api/portraits/women/44.jpg",
},
];

function App() {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);

  return (
    <div className="App">

      <h1>IdCard</h1>
      {idArray.map((idCard) => {
        return <IdCard idCard={idCard} />;
      })}


  <h1>Greetings</h1>
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="es">Luca</Greetings>

<h1>Random</h1>
<Random min={1} max={6}/>
<Random min={1} max={100}/>

<div className="box-colors-container">
<h1>BoxColor</h1>
<BoxColor r={255} g={0} b={0} />
<BoxColor r={128} g={255} b={0} />
</div>

<h1>CreditCard</h1>
<div className="credit-cards-container">

<CreditCard
  type="Visa"
  number="0123456789018845"
  expirationMonth={3}
  expirationYear={2021}
  bank="BNP"
  owner="Maxence Bouret"
  bgColor="#11aa99"
  color="white" 
/>
    
<CreditCard
  type="Master Card"
  number="0123456789010995"
  expirationMonth={3}
  expirationYear={2021}
  bank="N26"
  owner="Maxence Bouret"
  bgColor="#eeeeee"
  color="#222222"
/>
    
<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Commerzbank"
  owner="John Smith"
  bgColor="#ddbb55"
  color="white" 
/>
</div>

<h1>Rating</h1>
<Rating>0</Rating>
<Rating>1.49</Rating>
<Rating>1.5</Rating>
<Rating>3</Rating>
<Rating>4</Rating>
<Rating>5</Rating>

<h1>Driver Cards</h1>
<DriverCard
  name="Travis Kalanick"
  rating={4.2}
  img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
  car={{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"
  }}
/>

<DriverCard
  name="Dara Khosrowshahi"
  rating={4.9}
  img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
  car={{
    model: "Audi A3",
    licensePlate: "BE33ER"
  }}
/>

<div className="like-button">
<LikeButton likes={likes1} setLikes={setLikes1} />
      <LikeButton likes={likes2} setLikes={setLikes2} />
      </div>

<div className="maxence-pic">
<ClickablePicture
  img="maxence.png"
  imgClicked="maxence-glasses.png"
/>
</div>
<br />
 <Dice />
<br />
<br />
<div>
 <Carousel
  images={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
</div>
<NumbersTable limit={12} />
<br />
 <FaceBook profiles={profiles} />
 <SignupPage />
     <RgbColorPicker />
    </div>
  );
}

export default App;
