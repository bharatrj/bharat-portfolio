import React from "react";

function About() {

    return (
        <React.Fragment>
            <section class="services-section">
                <h2>⚙️ Services Offered</h2>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="service-box m-3">
                            <i class="fas fa-code"></i><h3>Frontend Web Development</h3>
                            <ul>
                                <li>Reusable modular components</li>
                                <li>Cross-browser compatibility</li>
                                <li>SPAs with React</li>
                                <li>Clean maintainable code</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="service-box m-3">
                            <i class="fas fa-bolt"></i><h3>Performance Optimization</h3>
                            <ul>
                                <li>Core Web Vitals</li>
                                <li>Lazy loading & code splitting</li>
                                <li>Chrome DevTools diagnostics</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="service-box m-3">
                            <i class="fas fa-network-wired"></i><h3>API Integration & Architecture</h3>
                            <ul>
                                <li>RESTful API connectivity</li>
                                <li>Redux & Context API</li>
                                <li>Scalable architecture</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="service-box m-3">
                            <i class="fas fa-users-cog"></i><h3>Agile Team Leadership</h3>
                            <ul>
                                <li>Code reviews & mentorship</li>
                                <li>Agile Scrum methodology</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="service-box m-3">
                            <i class="fas fa-paint-brush"></i><h3>Pixel-Perfect UI</h3>
                            <ul>
                                <li>Design to code translation</li>
                                <li>Responsive layouts</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                        <div class="service-box m-3">
                            <i class="fas fa-cloud-upload-alt"></i><h3>CI/CD Deployment</h3>
                            <ul>
                                <li>GitHub Actions & AWS</li>
                                <li>Automated pipelines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default About;
