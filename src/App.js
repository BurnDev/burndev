import React, { Component } from 'react';
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
                                <li><a href="index.html">Home</a></li>
                                <li><a href="generic.html">Generic</a></li>
                                <li><a href="elements.html">Elements</a></li>
                                <li><a href="#">Log In</a></li>
                                <li><a href="#">Sign Up</a></li>
                            </ul>
                            <a href="#" className="close">Close</a>
                        </div>
                    </nav>

                    <section id="banner">
                        <div className="inner">
                            <div className="logo"><span className="icon fa-diamond"></span></div>
                            <h2>This is BurnDev</h2>
                            <p>Where web and software development collide</p>
                        </div>
                    </section>

                    <section id="wrapper">
                        <section id="one" className="wrapper spotlight style1">
                            <div className="inner">
                                <a href="#" className="image">
                                    <div className="image-bg one"></div>
                                </a>
                                <div className="content">
                                    <h2 className="major">Magna arcu feugiat</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                    <a href="#" className="special">Learn more</a>
                                </div>
                            </div>
                        </section>

                        <section id="two" className="wrapper alt spotlight style2">
                            <div className="inner">
                                <a href="#" className="image"><div className="image-bg two"></div></a>
                                <div className="content">
                                    <h2 className="major">Tempus adipiscing</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                    <a href="#" className="special">Learn more</a>
                                </div>
                            </div>
                        </section>

                        <section id="three" className="wrapper spotlight style3">
                            <div className="inner">
                                <a href="#" className="image"><div className="image-bg three"></div></a>
                                <div className="content">
                                    <h2 className="major">Nullam dignissim</h2>
                                    <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
                                    <a href="#" className="special">Learn more</a>
                                </div>
                            </div>
                        </section>

                        <section id="four" className="wrapper alt style1">
                            <div className="inner">
                                <h2 className="major">Vitae phasellus</h2>
                                <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                                <section className="features">
                                    <article>
                                        <a href="#" className="image"><div className="image-bg four portfolio"></div></a>
                                        <h3 className="major">Sed feugiat lorem</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" className="special">Learn more</a>
                                    </article>
                                    <article>
                                        <a href="#" className="image"><div className="image-bg five portfolio"></div></a>
                                        <h3 className="major">Nisl placerat</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" className="special">Learn more</a>
                                    </article>
                                    <article>
                                        <a href="#" className="image"><div className="image-bg six portfolio"></div></a>
                                        <h3 className="major">Ante fermentum</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" className="special">Learn more</a>
                                    </article>
                                    <article>
                                        <a href="#" className="image"><div className="image-bg seven portfolio"></div></a>
                                        <h3 className="major">Fusce consequat</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.</p>
                                        <a href="#" className="special">Learn more</a>
                                    </article>
                                </section>
                                <ul className="actions">
                                    <li><a href="#" className="button">Browse All</a></li>
                                </ul>
                            </div>
                        </section>

                    </section>

                    <section id="footer">
                        <div className="inner">
                            <h2 className="major">Get in touch</h2>
                            <p>Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.</p>
                            <form method="post" action="#">
                                <div className="field">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" id="name" />
                                </div>
                                <div className="field">
                                    <label for="email">Email</label>
                                    <input type="email" name="email" id="email" />
                                </div>
                                <div className="field">
                                    <label for="message">Message</label>
                                    <textarea name="message" id="message" rows="4"></textarea>
                                </div>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </form>
                            <ul className="contact">
                                <li className="fa-home">
                                    BurnDev, LLC<br />
                                    1234 Somewhere Road Suite #2894<br />
                                    Nashville, TN 00000-0000
								</li>
                                <li className="fa-phone">(000) 000-0000</li>
                                <li className="fa-envelope"><a href="#">info@burndev.co</a></li>
                                <li className="fa-github"><a href="#">github.com/burndevllc</a></li>
                            </ul>
                            <ul className="copyright">
                                <li>&copy; BurnDev LLC All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default App;
