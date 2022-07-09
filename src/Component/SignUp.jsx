import React from "react";
import './SignUp.css';
function SignUp() {
    return (
        <>
            <section class="signUpContainer text-light p-5">
                <div class="container">
                    <div class="d-md-flex justify-content-between align-items-center">
                        <h3 class="mb-3 mb-md-0">Sign Up For Our Newsletter</h3>

                        <div class="input-group news-input">
                            <input type="text" class="form-control" placeholder="Enter Email" />
                            <button class="btn btn-dark btn-lg" type="button">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp;