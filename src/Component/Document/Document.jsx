import React from "react";

function Document() {
    return (
        <section class="p-5" id="document">
            <div class="container">
                <div class="row text-center g-4">
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-laptop"></i>
                                </div>
                                <h3 class="card-title mb-3">Virtual</h3>
                                <p class="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas
                                    quidem possimus dolorum esse eligendi?
                                </p>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-secondary text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-person-square"></i>
                                </div>
                                <h3 class="card-title mb-3">Hybrid</h3>
                                <p class="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas
                                    quidem possimus dolorum esse eligendi?
                                </p>
                                <a href="#" class="btn btn-dark">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                <div class="h1 mb-3">
                                    <i class="bi bi-people"></i>
                                </div>
                                <h3 class="card-title mb-3">In Person</h3>
                                <p class="card-text">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas
                                    quidem possimus dolorum esse eligendi?
                                </p>
                                <a href="#" class="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
            <div class="container">
                <h2 class="text-center mb-4">Why React?Frequently Ask Question</h2>
                <div class="accordion accordion-flush" id="questions">

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-one"
                            >
                                Where exactly are you located?
                            </button>
                        </h2>
                        <div
                            id="question-one"
                            class="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga
                                animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus
                                modi explicabo accusantium consequatur, praesentium rem quisquam molestias
                                at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium
                                necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-two"
                            >
                                How much does it cost to attend?
                            </button>
                        </h2>
                        <div
                            id="question-two"
                            class="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga
                                animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus
                                modi explicabo accusantium consequatur, praesentium rem quisquam molestias
                                at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium
                                necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-three"
                            >
                                What do I need to Know?
                            </button>
                        </h2>
                        <div
                            id="question-three"
                            class="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga
                                animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus
                                modi explicabo accusantium consequatur, praesentium rem quisquam molestias
                                at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium
                                necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-four"
                            >
                                How Do I sign up?
                            </button>
                        </h2>
                        <div
                            id="question-four"
                            class="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga
                                animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus
                                modi explicabo accusantium consequatur, praesentium rem quisquam molestias
                                at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium
                                necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#question-five"
                            >
                                Do you help me find a job?
                            </button>
                        </h2>
                        <div
                            id="question-five"
                            class="accordion-collapse collapse"
                            data-bs-parent="#questions"
                        >
                            <div class="accordion-body">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae fuga
                                animi distinctio perspiciatis adipisci velit maiores totam tempora accusamus
                                modi explicabo accusantium consequatur, praesentium rem quisquam molestias
                                at quos vero. Officiis ad velit doloremque at. Dignissimos praesentium
                                necessitatibus natus corrupti cum consequatur aliquam! Minima molestias iure
                                quam distinctio velit.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Document;