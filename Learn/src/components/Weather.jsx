const Weather = ({ temp }) => {
  if (temp < 15) {
    return <h1>It is cold outside</h1>;
  } else if (temp >= 15 && temp <= 25) {
    return <h1>It is normal outside</h1>;
  } else if (temp > 25) {
    return <h1>IT IS HOT AS SURAZ</h1>;
  }
};

export default Weather;
