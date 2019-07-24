import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sylvie Be</h2>
                        <img
                            src="https://image.flaticon.com/icons/png/512/42/42877.png"
                            alt="avatar"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus.
                        </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '28px', fontFamily: 'Oswald' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (+49)151xxxxxxxx
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '28px', fontFamily: 'Oswald' }}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        (+49)151xxxxxxxx
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '28px', fontFamily: 'Oswald' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        someone@somewhere.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '28px', fontFamily: 'Oswald' }}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        my skype id
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact;
