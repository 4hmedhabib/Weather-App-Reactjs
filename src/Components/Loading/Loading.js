import './Loading.css';

const Loading = ({ErrorMsg}) => {
    return (
        <div className='text-center d-flex flex-column min-vh-100 align-items-center justify-content-center'>
            {ErrorMsg ? <p className="h1 mb-0 p-0">{ErrorMsg}</p> : <p className="h1 mb-0 p-0">Loading</p>}
            <div className="lds-ellipsis ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;
