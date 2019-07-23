import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
    render() {
        return (
            <div className="landing-page">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            className="avatar-img"
                            src="https://image.flaticon.com/icons/png/512/42/42877.png"
                            alt="avatar"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="http://google.com" rel="noopener norefferer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://google.com" rel="noopener norefferer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* Freecodecamp */}
                                <a href="http://google.com" rel="noopener norefferer" target="_blank">
                                    <i className="fa fa-free-code-camp" aria-hidden="true" />
                                </a>

                                {/* Youtube */}
                                <a href="http://google.com" rel="noopener norefferer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>{' '}
                </Grid>
            </div>
        );
    }
}

export default Landingpage;
