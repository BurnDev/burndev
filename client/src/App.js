import React, { Component } from 'react';
import Form from './form/Form.js';
// import logo from './logo.svg';
import './App.css';
import './assets/css/theme.css';
import './assets/js/main';
import './assets/js/util';

// <div className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h2>Welcome to React</h2>
// </div>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>

class App extends Component {
    render() {
        return (
            <div className="App">
                <div id="page-wrapper">

                    <header id="header" className="alt">
                        <h1><a href="index.html">BurnDev</a></h1>
                        <nav>
                            <a href="#menu">Menu</a>
                        </nav>
                    </header>

                    <nav id="menu">
                        <div className="inner">
                            <h2>Menu</h2>
                            <ul className="links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#one">We Make Work Easier</a></li>
                                <li><a href="#two">Our Process</a></li>
                                <li><a href="#three">We'll Customize An App For Your Needs </a></li>
                                <li><a href="#projects">Our Projects</a></li>
                                <li><a href="#footer">Contact Us</a></li>
                            </ul>
                            <a href="#" className="close">Close</a>
                        </div>
                    </nav>

                    <section id="banner">
                        <div className="inner">
                            {/* <div className="logo"><span className="icon fa-diamond"></span></div> */}
                            <div className="long-logo"></div>
                            <p>Providing modern productivity applications</p>
                        </div>
                    </section>

                    <section id="wrapper">
                        <section id="one" className="wrapper spotlight style1">
                            <div className="inner">
                                {/* <div className="image">
                                    <div className="image-bg one"></div>
                                </div> */}
                                <div className="content">
                                    <h2 className="major">We Make Work Easier</h2>
                                    <p>We develop apps that enhance the productivity of existing software. Our mission is to make your work easier by removing obstacles to getting stuff done. We want you to burn through what you <text style={{ fontWeight: "bold", fontStyle: "italic" }}> have to</text> do so you can get to what you <text style={{ fontWeight: "bold", fontStyle: "italic" }}> want to</text> do. </p>
                                    <p>We understand how frustrating it can be when products you use only deliver part of what you need to do your job. Our mission is to build apps that get you all the way there, enhancing productivity and efficiency through a clean and easy user experience.</p>
                                    {/* <a href="#footer" className="special">Learn more</a> */}
                                </div>
                            </div>
                        </section>

                        <section id="two" className="wrapper alt spotlight style2">
                            <div className="inner">
                                {/* <a href="#" className="image"><div className="image-bg two"></div></a> */}
                                <div className="content">
                                    <h2 className="major">Our Process</h2>
                                    <p>We are dedicated to building modern apps that make you more productive. We focus on the user throughout the development process.</p>
                                    <ul>
                                        <li><p><text style={{ fontWeight: "bold", fontStyle: "italic" }}>Concept:</text> Ideas for our apps come from moments of frustration - a task taking just a little too long, settling for a sub-optimal template, banging our heads against a wall trying to understand a complex Excel formula. We know we can be more productive. Instead of settling, we design apps, so we can burn through what we have to do and get to what we want to do.</p></li>
                                        <li><p><text style={{ fontWeight: "bold", fontStyle: "italic" }}>Development:</text> We approach app development by figuring out how we can make information more accessible, streamline the task, and navigate around obstacles. We specialize in add-ins for Microsoft Office, designing apps to blend seamlessly into the software you’re already familiar with.</p></li>
                                        <li><p><text style={{ fontWeight: "bold", fontStyle: "italic" }}>Support:</text> We actively maintain all products and provide technical support. Our goal is for you to be as productive as possible, so we work to incorporate your feedback to provide the best user experience possible. Have a specific issue? We want to work with you to develop a custom app for your needs</p></li>
                                    </ul>
                                    {/* <a href="#" className="special">Learn more</a> */}
                                </div>
                            </div>
                        </section>
                        <section id="three" className="wrapper spotlight style3">
                            <div className="inner">
                                {/* <a href="#" className="image"><div className="image-bg two"></div></a> */}
                                <div className="content">
                                    <h2 className="major">We’ll customize an app for your needs</h2>
                                    <p>Our approach to design and development rests on solving everyday problems at work. We want to work with you to understand what slows you down and build an app specific to the needs of you and your company. From custom add-ins and apps to modifying an existing project to fit your needs, Burn Dev is here for you. Contact us using the form below.</p>
                                    {/* <a href="#" className="special">Learn more</a> */}
                                </div>
                            </div>
                        </section>

                        <section id="projects" className="wrapper alt style1">
                            <div className="inner">
                                <h2 className="major">Our Projects</h2>
                                <p>As a company we are dedicated to building modern applications designed to improve productivity. Our goal is to help you get through the jobs you have to do so you are free to do the jobs you want to do.  Our applications are actively maintained and we are always interested in user feedback so we can provide the best user experience possible</p>
                                <section className="features">
                                    <article>
                                        <div className="image">
                                            <div className="image-bg formula-editor app-icon">
                                                <div className="image-overlay winner"></div>
                                            </div>
                                        </div>
                                        <h3 className="major">Formula Editor - Complex Formulas Simplified</h3>
                                        <p>This is Microsofts 2017 Hack Productivity best Office add-in winner.  The Formula Editor integrates a fully-fledged code editor into Microsoft Excel helping the user easily format and unwind complex formulas.</p>
                                        <a className="special">View the project page - Coming Soon!</a>
                                        <a href="https://store.office.com/en-us/app.aspx?assetid=WA104381147&sourcecorrid=a4c534a9-d075-478b-8025-f5b14398e01d&searchapppos=0&ui=en-US&rs=en-US&ad=US&appredirect=false" target="_blank" className="special">Try it!</a>
                                    </article>
                                </section>
                                {/* <ul className="actions">
                                    <li><a href="#" className="button">Browse All</a></li>
                                </ul> */}
                            </div>
                        </section>

                    </section>

                    <section id="footer">
                        <div className="inner">
                            <h2 className="major">Get in touch</h2>
                            <p>Questions, comments, concerns or feedback? We'd love to hear from you!</p>
                            <Form />
                            <ul className="contact">
                                <li className="fa-home">
                                    BurnDev, LLC<br />
                                    4 14th Street #127<br />
                                    Hoboken, NJ 07030
								</li>
                                <li className="fa-envelope"><a href="mailto:dev@burndev.co" target="_top">dev@burndev.co</a></li>
                                <li className="fa-github"><a href="https://github.com/BurnDev" target="_blank">github.com/burndevllc</a></li>
                            </ul>
                            <ul className="copyright">
                                <li>&copy; Burn Dev, LLC. All rights reserved.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
