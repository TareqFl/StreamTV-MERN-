import React, { Component } from 'react';
import api from '../APIs/authApi'
import history from '../history';
import { connect } from 'react-redux';
import { signIn, signOut, darkMode, lightMode, fetchStreams } from '../actions';
import { Link } from 'react-router-dom'

import RenderModal from './Modal';

import { Box, Toolbar, Typography, Button, AppBar, styled, Badge, Avatar, Menu, MenuItem, Switch, Stack } from '@mui/material';
import { DarkMode, LiveTv, Logout, Mail, Notifications } from '@mui/icons-material'
import axios from 'axios';



const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between'

})

const Admin = styled('div')({
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
})

const StyledNotifications = styled('div')(({ theme }) => ({
    display: 'none',
    gap: '16px',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
        display: 'flex'
    }
}))

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0,10px',
    borderRadius: theme.shape.borderRadius,
    width: '20%'
}))



class Header extends Component {

    //  modal and theme mode
    state = {
        value: false,
        modal: false,
        input: '',
        anchorEl: null
    }



    componentDidMount() {
        const getStatus = async () => {
            const response = await api.get('/auth/login/success')
            this.props.signIn(response.data)
        };
        getStatus()
    };

    // singout Click function
    onSignOutClick = () => {
        window.open("http://localhost:5000/auth/logout", "_self");
        this.props.signOut()
    };

    //handle menu and anchor el
    handleClick = e => {
        this.setState({ value: true, anchorEl: e.target })
    }
    // render notification once the user is signed in
    renderAdmin = () => {

        if (this.props.isSignedIn) {
            return (<React.Fragment>
                <Admin>
                    <StyledNotifications>
                        <Badge badgeContent={4} color='error'>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={4} color='error'>
                            <Notifications />
                        </Badge>
                        <Avatar
                            src={`${this.props.user && this.props.user.picture}`}
                            onClick={this.handleClick} />
                    </StyledNotifications>
                </Admin>
                <Badge badgeContent={4} sx={{ display: { xs: 'block', md: 'none' } }} color='error' onClick={e => this.setState({ value: true })}>
                    <Avatar
                        src={`${this.props.user && this.props.user.picture}`}
                        onClick={this.handleClick} />
                </Badge>
            </React.Fragment>

            )
        }

        return <Button
            onClick={e => history.push('/login')}
            variant="text"
            sx={{ color: 'white' }}
        >Login</Button>
    };


    // pp = this.props.user && this.props.user.photos[0].value

    // user has saved stream? => stream page :  render modal and save stream
    fetchDB = async () => {
        const response = await axios.post('http://localhost:5000/streamer', { googleId: this.props.user.sub })

        this.props.user.sub === response.data.googleId ? history.push('/user/stream/mystream') : this.setState({ modal: true })
    }


    //render menu once the user is signed in and clicked on avatar
    renderMenu = () => {

        if (this.props.isSignedIn) {
            return (

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={this.state.anchorEl}
                    open={this.state.value}
                    onClose={() => this.setState({ value: false })}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}>
                    <MenuItem>
                        <Box display='flex' gap='8px'>
                            <Avatar src={this.props.user && this.props.user.picture} />
                            <Typography variant='h6' fontWeight={100}>{this.props.user.name}</Typography>
                        </Box></MenuItem>
                    <MenuItem><Button variant='text' onClick={this.fetchDB}>My Stream</Button></MenuItem>
                    <MenuItem><Button endIcon={<Logout fontSize='large' />} variant='text' onClick={() => this.onSignOutClick()}>Logout</Button></MenuItem>
                    <MenuItem> <Switch defaultChecked onChange={() => this.renderTheme()} /><DarkMode /></MenuItem>

                </Menu>
            )
        }
    }

    // render darkmode or light mode theme
    renderTheme = () => {
        if (this.props.mode === 'dark') {
            this.props.lightMode()
        }
        if (this.props.mode === 'light') {
            this.props.darkMode()
        }
    }

    //modal handling
    handleClose = () => {
        this.setState({ modal: false })
    }

    // passing user props into the modal 
    renderProps = () => this.props.user ? this.props.user : '';



    //handle submit for searchBar
    handleSubmit = e => {
        e.preventDefault()


        this.props.fetchStreams(20, process.env.IRL_API, this.state.input)


        history.push(`/stream/search/${this.state.input}`)
    }


    render() {

        return (
            <>
                <AppBar color='secondary' sx={{ boxShadow: '0 0 20px 0 purple' }} >
                    <StyledToolbar>
                        <Box>
                            <Link to='/' style={{ textDecoration: 'none', color: 'white' }} ><Typography variant='h4' sx={{ display: { xs: 'none', xl: 'block' } }}>Stream{this.props.mode === 'dark' ? (<span style={{ color: 'purple' }}>TV</span>) : 'TV'}</Typography></Link>
                            <Link to={'/'} style={{ textDecoration: 'noen' }}> <LiveTv fontSize='large' sx={{ display: { xs: 'block', xl: 'none' } }} color='secondary' /></Link>
                        </Box>

                        <Search>
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={e => this.setState({ input: e.target.value })} name='search' placeholder='Search...' style={{ color: 'gray', width: '100%' }} value={this.state.input} />
                            </form>
                        </Search>
                        {this.renderAdmin()}
                    </StyledToolbar>
                    {this.renderMenu()}
                    <RenderModal
                        open={this.state.modal}
                        handleClose={this.handleClose}
                        user={this.renderProps()}
                        on_Close={() => this.setState({ modal: false })}
                    />
                </AppBar>
                <Stack direction='row' justifyContent='space-between' spacing={1}>
                    {this.props.children}
                </Stack>
            </>
        )
    };
};


const mapStateToProps = state => {
    const { user, isSignedIn } = state.auth
    const { mode } = state.theme
    return {
        user,
        isSignedIn,
        mode
    }
}

export default connect(mapStateToProps, { signIn, signOut, darkMode, lightMode, fetchStreams })(Header);