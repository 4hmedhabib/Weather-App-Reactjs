import { Link } from 'react-router-dom';
import './Loading.css';


const Loading = ({ErrorMsg}) => {
    return (
        <div className='text-center d-flex flex-column min-vh-100 align-items-center justify-content-center'>
            {ErrorMsg ? <p className="h1 mb-0 p-0">{ErrorMsg === 'Network Error' ? ErrorMsg : "City Name Spelling isn't correct, Please Try Again "}</p> : <p className="h1 mb-0 p-0">Loading</p>}
            <div className="lds-ellipsis ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="row mb-3">
                    <Link to='/s/show'  className="btn btn-lg btn-primary d-inline">Search City</Link>
                </div>
        </div>
    );
}

export default Loading;
