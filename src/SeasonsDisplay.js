import './SeasonDisplay.css';
import React from 'react'
//helper
const seasonConfig = {
  summer : {
    text : 'lets hit the beach',
    iconName : 'sun'
  },
  winter : {
    text : 'burr its chilly',
    iconName : 'snowflake'
  }
};
//logic
const getSeason = (lat,month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer'; 
  }
};
//main comp
const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat ,new Date().getMonth());
  const {text , iconName} =seasonConfig[season]
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  )
}

export default SeasonsDisplay
