import {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Search = () => {
    const [cityType, setCityType] = useState('');
    const [show, setShow] = useState(false)
    const history = useHistory();


    const handleShow = () => {
        setShow(!show)
    }

    const handleSumit = (e) => {
        e.preventDefault();
        console.log('Sumitted')
        setCityType('sumited')
        history.push(`/${cityType}`)
    }

    return (
        <div className="container-lg mb-3 p-5 px-4">
            <div className="col-md-6 offset-md-3 text-center">
                <h1 className="text-center">Weather Application</h1>
                <p className="text-center">Powered By: <a className='text-decoration-none' href="https://github.com/ahmedhabiib">Ahmed Habib</a></p>
            </div>
            <div className="col-4 offset-4 mb-5">
                <div className="row">
                    <button className="btn btn-lg btn-primary d-inline" onClick={handleShow}>Search</button>
                </div>
            </div>
          {show ? 
            <div className="col-md-6 offset-md-3 col-sm-8">
                <div className="row">
                <form onSubmit={handleSumit} classNameName="my-3">
                        <input 
                        id="border-radius"
                        className="input-group ps-2 py-2 border-1 border-dark text-decoration-none"
                        type="text"
                        placeholder="Search City..."
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

