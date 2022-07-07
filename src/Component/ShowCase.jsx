import React from "react";

function ShowCase() {
    return (
        <div>
            <section className="p-5 p-lg-0 pt-lg-5 text-center text-sm-start" data-aos="fade-down">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-between">
                        <img
                            className="img-fluid w-50 d-none d-sm-block"
                            src="../asset/images/myProfile.png"
                            alt=""
                        />
                        <div>
                            <h1><span className="text-dark"> Amaz-fit Global </span></h1>
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
                                    Discover More
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