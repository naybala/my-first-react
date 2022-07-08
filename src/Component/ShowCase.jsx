import React from "react";
const imgurl = "https://patterns.dev/img/reactjs/react-logo@3x.svg";
function ShowCase() {

    return (
        <div>
            <section className="p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <img
                            className="img-fluid w-50 d-none d-sm-block me-5 rounded-3"
                            src={imgurl}
                            alt=""
                        />
                        <div>
                            <h1><span className="text-dark"> React Org Global </span></h1>
                            <p className="lead my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                            </p>
                            <a href="#learn">
                                <button
                                    className="btn btn-dark btn-lg"
                                    data-bs-toggle="modal"
                                    data-bs-target="#enroll"
                                >
                                    Learn More
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
}

export default ShowCase;