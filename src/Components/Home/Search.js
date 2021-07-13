import {useEffect, useState} from 'react'
import { useHistory, useParams } from 'react-router-dom';

const Search = () => {
    const {query} = useParams();
    const [cityType, setCityType] = useState('');
    const [show, setShow] = useState(false) ;
    const history = useHistory();

    useEffect(()=>{
        if(query === 'show'){
            setShow(true)
        }
        return;
    }, [query])

    const handleShow = () => {
        setShow(!show)
    }

    const handleSumit = (e) => {
        e.preventDefault();
        console.log('Sumitted')
        setCityType('sumited')
        history.push(`/c/${cityType}`)
    }

    return (
        <div className="container-lg mb-3 p-5 px-4">
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="text-center">Weather Application</h1>
                <p className="text-center">Powered By: <a className='text-decoration-none' href="https://github.com/ahmedhabiib">Ahmed Habib</a></p>
            </div>
            <div className="col-md-6 offset-md-3 col-sm-12 mb-5">
                <div className="row">
                    <button className="btn btn-lg btn-primary d-block" onClick={handleShow}>Search City</button>
                </div>
            </div>
          {show ? 
            <div className="col-md-6 offset-md-3 col-sm-12">
                <div className="row">
                <form onSubmit={handleSumit} className="my-3">
                        <input 
                        id="border-radius"
                        className="form-control"
                        type="text"
                        placeholder="City Name..."
                        value={cityType}
                        onChange={(e)=> setCityType(e.target.value)}
                        /> 
                        <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                    </form>
                </div>
            </div>
            : '' }
        </div>
    );
}

export default Search;

