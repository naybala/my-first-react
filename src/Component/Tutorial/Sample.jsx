import React from "react";
import Img1 from "./../../asset/images/undraw_code_review_re_woeb.svg"
function Sample() {
    return (
        <>
            <section className="p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex  justify-content-between">
                        <div>
                            <h1><span className="text-dark"> Tutorial: Intro to React</span></h1>
                            <p className="my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, neque. Lorem
                                ipsum dolor sit amet consectetur adipisicing elit. Facere, maiores.
                            </p>
                        </div>
                        <img
                            className="img-fluid w-50 me-5 rounded-3"
                            src={Img1}
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </>
    )
}

export default Sample;