import { useState, useEffect } from 'react';
import './Main.css';
import WeatherCard from './WeatherCard/WeatherCard';
import Map from './Map/Map';
import Loading from '../Loading/Loading';
import Axios from 'axios';

const Main = ({apiKey}) => {
    const [data, setData] = useState(null)
    const [eMsg, setEMsg] = useState(false);
    const [cityName, setCityName] = useState('Borama')

    useEffect(()=> {
    setTimeout(()=> {
            Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then((res)=> {
               setData(res.data);
                console.log(res.data)
            })
            .catch((err) => {
                setEMsg(err.message);
                return;
            })
        },1000);
    }, [cityName]);
    

    return (
        <div className="container-lg my-3 px-4">
            {data !== null ? <div>
                <div className="row text-center mb-3">
                    <h1 className="">Hargeisa, SO</h1>
                </div>
                <div className="row align-items-start justify-content-around">
                        <div id="border-radius" className="col-lg-5 col-md-6 col-sm-12 bg-white card text-light g-2 p-3">
                            <WeatherCard 
                            city={data.name} 
                            country={data.sys.country} 
                            coord={data.coord} 
                            iconId={"https://openweathermap.org/img/w/" +data.weather[0].icon+'.png'}
                            main={data.weather[0].main} 
                            temp={data.main.temp}
                            desc={data.weather[0].description}
                            windSpeed={data.wind.speed} 
                            SeaLevel={data.main.sea_level} 
                            humidity={data.main.humidity} 
                            />
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 g-2 p-3">
                        <Map coord={data.coord} />
                        {/* <Map coord={{lat: 2.0469, lon: 45.3182}} /> */}
                        </div>
                </div>
            </div>
            : <Loading ErrorMsg={eMsg}/>
            }
            
        </div>
    );
}

export default Main;
