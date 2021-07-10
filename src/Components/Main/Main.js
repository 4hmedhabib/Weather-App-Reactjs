import { useState } from 'react';
import './Main.css';
import Result1 from './Result/Result1';
import Result2 from './Result/Result2';
import Map from './Map/Map';
import Loading from '../Loading/Loading';
import Axios from 'axios';

const Main = ({apiKey, geoResult}) => {
  
    return (
        <div className="container-lg my-3 px-4">
            {isLoading && <Loading />}
            {console.log(geoData)}
            <div className="row text-center mb-3">
                <h1 className="">Hargeisa, SO</h1>
            </div>
            <div className="row align-items-start justify-content-around">
                    <div id="border-radius" className="col-lg-5 col-md-6 col-sm-12 bg-white card text-light g-2 p-3">
                        <Result1/>
                        <Result2 />
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 g-2 p-3">
                    <Map />
                    </div>
            </div>
        </div>
    );
}

export default Main;
