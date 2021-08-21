const cityDetailsLoader = async (cityList) => {
  const search = cityList.join(",");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/city/list-details?q=${search}`
  ).then((r) => r.json());

  return response.map((city) => ({
    temp: city.main.temp,
    city: city.name,
    sunrise: city.sys.sunrise,
    sunset: city.sys.sunset,
  }));
};

export default cityDetailsLoader;
