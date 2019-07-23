import React, { Component } from 'react';

import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardText,
    CardActions,
    CardMenu,
    Button,
    IconButton
} from 'react-mdl';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        /*  React Projects */
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={1} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background:
                                    'url(https://entwickler.de/wp-content/uploads/2016/03/react-900x450.jpg) center / cover'
                            }}
                        >
                            React Project #1
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa.{' '}
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu stlye={{ color: '#fff' }}>
                            <IconButton name="share" style={{ color: '#fff' }} />
                        </CardMenu>
                    </Card>
                    <Card shadow={1} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background:
                                    'url(https://entwickler.de/wp-content/uploads/2016/03/react-900x450.jpg) center / cover'
                            }}
                        >
                            React Project #2
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa.{' '}
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu stlye={{ color: '#fff' }}>
                            <IconButton name="share" style={{ color: '#fff' }} />
                        </CardMenu>
                    </Card>
                    <Card shadow={1} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle
                            style={{
                                color: '#fff',
                                height: '176px',
                                background:
                                    'url(https://entwickler.de/wp-content/uploads/2016/03/react-900x450.jpg) center / cover'
                            }}
                        >
                            React Project #3
                        </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa.{' '}
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu stlye={{ color: '#fff' }}>
                            <IconButton name="share" style={{ color: '#fff' }} />
                        </CardMenu>
                    </Card>
                </div>
            );

            /* Angular Projects */
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Angular</h1>
                </div>
            );
            /* VueJS Projects */
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is VueJS</h1>
                </div>
            );
            /* MongoDB Projects */
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                    <h1>This is MongoDB</h1>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={tabId => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
export default Project;
