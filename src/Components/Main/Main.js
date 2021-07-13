import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Main.css';
import WeatherCard from './WeatherCard/WeatherCard';
import Map from './Map/Map';
import Loading from '../Loading/Loading';
import moment from 'moment'
import Axios from 'axios';



const Main = ({apiKey}) => {
    const {city} = useParams()
    const [data, setData] = useState(false);
    const [eMsg, setEMsg] = useState(false);
    const [cityName, setCityName] = useState('');
    const date = Date().toLocaleLowerCase()
    
    useEffect(()=> {
    setCityName(city.toLowerCase());
    setTimeout(()=> {
         Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
            .then(async(res)=> {
                await setData(res.data);
            })
            .catch(async(err) => {
               await setEMsg(err.message);
                if(err.message === 'Request failed with status code 404' ){
                   return setEMsg("City Name Spelling isn't correct ("  + cityName + "), Please Try Again ")
                }

                return;
            })
        },100);
    }, [city, apiKey, cityName]);


    return (
        <div className="container-lg my-3 px-4">
            {data  ? <div>
                <div className="row mb-3">
                    <Link to='/s/show'  className="btn btn-lg btn-primary d-inline">Search City</Link>
                </div>
                <div className="row text-center mb-3">
                    <h1 className="">{data.name}, {data.sys.country}</h1>
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
                            date={moment(date).format('LLLL')}
                            visibility={data.visibility}
                            />
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 g-2 p-3">
                        <Map coord={data.coord} />
                        {/* <Map coord={{lat: 2.0469, lon: 45.3182}} /> */}
                        </div>
                </div>
            </div>
            : <Loading ErrorMsg={eMsg} />
            }
            
        </div>
    );
}

export default Main;
