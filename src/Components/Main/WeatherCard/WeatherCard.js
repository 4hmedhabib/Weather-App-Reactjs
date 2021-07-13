
const WeatherCard = (props) => {
    return (
        <div>
            {console.log(props.iconId)}
            <div className="card-header mb-3 text-center " id="border-radius">
                <h5 className="text-muted lead text-dark p-0 m-0">{props.date}</h5>
            </div>
            <div id="border-radius" className="card bg-primary  p-3 d-flex flex-wrap flex-row align-items-center justify-content-around">
                
                <div className="text-center mb-3">
                    <img className="w-50" src={props.iconId} alt="unknow"/>
                    <h4 className="h1 card-title">
                    {props.main}
                    </h4>
                    <h6 className="card-text lead">
                        {props.desc}
                    </h6>
                </div>
                <div className="text-center">
                    <h1 className="text-header fw-normal">
                        {props.city}, {props.country}
                    </h1>
                    <h1 className="card-title display-1 mb-0">{Math.floor(props.temp - 272.15 )}&deg;c</h1>
                    <span className="card-text  text-light ">Degree Celcius</span>
                </div>
            </div>
            <div className="text-center">
                <div className="card bg-light text-dark mt-2 p-3 d-flex flex-wrap flex-row justify-content-around" id="border-radius">
                    <div className="text-center">
                        <h3 className="text-muted h6">Wind</h3>
                        <p className="card-title h4 fw-bold">{Math.floor(props.windSpeed)} m/s</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-muted h6">Humidity</h3>
                        <p className="card-title h4 fw-bold">{props.humidity}%</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-muted h6">
                            Visibility
                        </h3>
                        <p className="card-title h4 fw-bold">{props.visibility / 1000} km</p>
                    </div>
                </div>
            </div>
     </div>
    );
}

export default WeatherCard;
