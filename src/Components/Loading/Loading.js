import './Loading.css';

const Loading = () => {
    return (
        <div className='d-flex flex-column min-vh-100 align-items-center justify-content-center'>
            <p className="h1 mb-0 p-0">Loading</p>
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
