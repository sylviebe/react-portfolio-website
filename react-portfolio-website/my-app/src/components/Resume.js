import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://image.flaticon.com/icons/png/512/42/42877.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Sylvie Be</h2>
                        <h4 style={{ color: 'grey' }}>Web Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem.{' '}
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Randomstraße 122 in 1xxxx Berlin</p>
                        <h5>Phone</h5>
                        <p>0151 xxxx xxxx</p>
                        <h5>Email</h5>
                        <p>someone@somewhere.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education </h2>

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="Ironhack Berlin"
                            schoolDescription="Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante."
                        />

                        <Education
                            startYear={2007}
                            endYear={2012}
                            schoolName="Cologne University"
                            schoolDescription="Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante."
                        />
                        <hr style={{ borderTop: '3px solid #833fb2' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2015}
                            endYear={2019}
                            jobName="Last Job"
                            jobDescription="Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. "
                        />
                        <Experience
                            startYear={2017}
                            endYear={2017}
                            jobName="Good Job"
                            jobDescription="Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. "
                        />
                        <hr style={{ borderTop: '3px solid #833fb2' }} />
                        <h2>Skills</h2>
                        <Skills skill="Javascript" progress={60} />
                        <Skills skill="HTML" progress={60} />
                        <Skills skill="NodeJS" progress={40} />
                        <Skills skill="MongoDB" progress={50} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;
