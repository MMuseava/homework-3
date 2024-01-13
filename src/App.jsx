import React, { useState } from 'react';
import ImageCard from './components/imageCard/ImageCard.jsx';
import summer from '../src/assets/images/summer.jpeg';
import winter from '../src/assets/images/winter.jpeg';
import spring from '../src/assets/images/spring.jpeg';
import fall from '../src/assets/images/fall.jpeg';
import videoWinter from "../src/assets/videos/winter1.mp4"
import './App.css';
import CustomButton from './components/customButton/CustomButton.jsx';

function App() {
  const images = [
    { src: winter, alt: 'winter' },
    { src: spring, alt: 'spring' },
    { src: summer, alt: 'summer' },
    { src: fall, alt: 'fall' },
  ];

	const [info, setInfo] = useState('');
	

  const ClickDay = () => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];

    const today = new Date().getDay();
    const dayInfo = `Today is ${days[today]}`;
    setInfo(dayInfo);
  };

  const ClickMonth = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const currentMonth = new Date().getMonth();
    const monthInfo = `The current month is ${months[currentMonth]}`;
    setInfo(monthInfo);
  };

  const ClickSeason = () => {
    const currentMonth = new Date().getMonth();
    const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    const season = Math.floor((currentMonth % 12) / 3);
    const seasonInfo = `The current season is ${seasons[season]}`;
    setInfo(seasonInfo);
  };

  return (
    <div className="App">
      <div className="image-card-container">
        {images.map((image, index) => (
          <ImageCard key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      <div className="button">
        <CustomButton text="Day" onClickHandler={ClickDay} />
        <CustomButton text="Month" onClickHandler={ClickMonth} />
        <CustomButton text="Season" onClickHandler={ClickSeason} />
      </div>
      {info && (
        <>
				  <p className="info-display">{info}</p>
				  <div className='video'>
          <video  className="info-video" controls>
            <source width={"400px"} src={videoWinter} type="video/mp4" />
          
					  </video>
					  </div>
        </>
      )}
    </div>
  );
}

export default App;
