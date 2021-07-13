

const About = () => {
    return (
        <div className="row">
          <div className="col-10 offset-1 col-md-4 offset-md-4 col-sm-8 offset-sm-2 p-3 bg-light text-center border-top border-4 border-primary rounded shadow mb-3">
                <img src="https://res.cloudinary.com/sosloper/image/upload/v1626185867/Edited_Photo_2_3_kn6ybd.jpg" alt="Ahmed Habib" className="img-fluid rounded-circle mb-1" id="img-profile" />
                <h3 className="card-title mb-0  mt-2 text-dark">Ahmed Habib</h3>
                <p className="card-body mt-0 py-3">Obviously I'm Software Developer with over 2 Years Of Experience. Expreinced with all stages of the development cycle for dynamic and Web App Projects.</p>
          </div>
          <div className="col-10 offset-1 col-md-4 offset-md-4 col-sm-8 offset-sm-2 p-3 bg-light text-center border-bottom border-4 border-secondary rounded shadow d-flex justify-content-center align-items-center">
                <div className="d-flex">
                <h1><a className="ms-4" target="_blank" href="https://www.github.com/ahmedhabiib/"><i className="bi bi-github  text-dark"></i></a></h1>
                <h1><a className="ms-4" target="_blank"  href="https://www.instagram.com/ahmed_hab3ib/"><i className="bi bi-instagram text-dark"></i></a></h1>
                <h1><a className="ms-4" target="_blank"  href="https://www.facebook.com/Ahm3dhabib/"><i className="bi bi-facebook text-dark"></i></a></h1>
                </div>
               
          </div>
        </div>
    );
}

export default About;
