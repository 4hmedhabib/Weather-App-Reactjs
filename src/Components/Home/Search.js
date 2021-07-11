
const Search = () => {

    

    return (
        <div className="container-lg 
        my-3 p-5 px-4">
           {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary col-lg-6" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Search
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <label for="exampleDataList" class="form-label">Datalist example</label>
                    <form>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search City...">
                        <datalist id="datalistOptions">
                            <option value="Hargeisa">
                            <option value="Berbera">
                            <option value="Burao">
                            <option value="Laascaanood">
                            <option value="Ceerigaabo">
                        </datalist>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Search;
