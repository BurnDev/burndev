import React, { Component } from 'react';
import contact from './assets/js/mailer';
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
    // todo: move to constructor? 
    state = {
        name: '',
        email: '',
        message: ''
    };

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    handleSubmit(event) {
        // todo: insert validation here, clear user input, display success/error message
        event.preventDefault();
        contact(this.state);
    };

    handleInputChange = this.handleInputChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);

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
                                <li><a href="">Home</a></li>
                                <li><a href="#one">What We Do</a></li>
                                <li><a href="#two">Need Something Specific</a></li>
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
                                <div className="image">
                                    <div className="image-bg one"></div>
                                </div>
                                <div className="content">
                                    <h2 className="major">What We Do</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                    {/* <a href="#footer" className="special">Learn more</a> */}
                                </div>
                            </div>
                        </section>

                        <section id="two" className="wrapper alt spotlight style2">
                            <div className="inner">
                                <a href="#" className="image"><div className="image-bg two"></div></a>
                                <div className="content">
                                    <h2 className="major">Need Something Specific</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
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
                                        <a href="https://store.office.com/en-us/app.aspx?assetid=WA104381147&sourcecorrid=a4c534a9-d075-478b-8025-f5b14398e01d&searchapppos=0&ui=en-US&rs=en-US&ad=US&appredirect=false" target="_blank" className="special">Buy it!</a>
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
                            <form>
                                <div className="field">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleInputChange} />
                                </div>
                                <div className="field">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} />
                                </div>
                                <div className="field">
                                    <label for="message">Message</label>
                                    <textarea name="message" id="message" rows="4" value={this.state.message} onChange={this.handleInputChange}></textarea>
                                </div>
                                <ul className="actions">
                                    <li><button value="Send Message" onClick={this.handleSubmit}>Send Message</button></li>
                                </ul>
                            </form>
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
