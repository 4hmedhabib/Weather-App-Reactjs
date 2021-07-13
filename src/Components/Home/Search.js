import {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Search = ({city}) => {
    const [cityType, setCityType] = useState('');
    const history = useHistory()

    const handleSumit = (e) => {
        e.preventDefault();
        console.log('Sumitted')
        setCityType('sumited')
        history.push(`/${cityType}`)
    }

    console.log('=====', city)
    
    return (
        <div className="container-lg my-3 p-5 px-4">
           {/* <!-- Button trigger modal --> */}
           <button type="button" className="btn btn-primary col-lg-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Search
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="staticBackdrop" >
            <div className="modal-dialog"> 
                <div className="modal-content">
                <div className="modal-header bg-primary text-light">
                    <h5 className="modal-title" id="staticBackdropLabel">City Search</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div className="modal-body py-2">
                    <form onSubmit={handleSumit} className="my-3">
                        <input 
                        id="border-radius"
                        className="input-group ps-2 py-2 border-1 border-dark text-decoration-none"
                        type="text"
                        placeholder="Search City..."
                        value={cityType}
                        onChange={(e)=> setCityType(e.target.value)}
                        />
                    </form>
                </div>
                
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Search;
