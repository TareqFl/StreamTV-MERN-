import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';



import Header from './components/Header';
import Login from './components/auth/Login';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import MyStream from './components/MyStream';
import StreamSearch from './components/StreamSearch';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';



const App = props => {

    const darkTheme = createTheme({
        palette: {
            mode: props.mode
        }
    })


    return (
        <ThemeProvider theme={darkTheme}>
            <Router history={history}>
                <CssBaseline />
                <Header>
                    <SideBar />
                    <Switch>
                        <Route exact path={'/'} component={HomePage} />
                        <Route exact path={'/login'} component={Login} />
                        <Route exact path={'/user/stream/mystream'} component={MyStream} />
                        <Route exact path={'/stream/search/:q'} component={StreamSearch} />
                    </Switch>
                </Header>
            </Router>
        </ThemeProvider>
    );
};

const mapStateToProps = state => {
    return {
        mode: state.theme.mode
    }
}

export default connect(mapStateToProps)(App);