
const Result1 = () => {
    return (
        <div>
            <div id="border-radius" className="card bg-primary  p-3 d-flex flex-row align-items-center justify-content-around">
                <div className="text-center">
                    <img className="w-100" src="https://openweathermap.org/img/w/10d.png" alt="unknow" />
                    <h4 className="h1 card-title">
                    Rain
                    </h4>
                    <h6 className="card-text lead">
                        Heavy Rain
                    </h6>
                </div>
                <div className="text-center">
                    <h1 className="text-header fw-normal">
                        Hargeisa, SO
                    </h1>
                    <h1 className="card-title display-1 mb-0">29&deg;</h1>
                    <span className="card-text  text-warning ">Degree Celcius</span>
                </div>
            </div>
     </div>
    );
}

export default Result1;
