import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMysTream } from '../actions'
import history from '../history'

import { Avatar, Box, Typography, CircularProgress, Stack } from '@mui/material';
import { Circle } from '@mui/icons-material';



class SideBar extends Component {



    componentDidMount() {
        if (this.props.user) {
            this.props.fetchMysTream(this.props.user.sub)
        }

    }

    //render live Streamers

    renderStreamers = () => {

        if (this.props.streams) {
            const streams = this.props.streams
            const array_st = streams.filter((s, i) => {
                return i < 5
            })
            return array_st.map((streamers, i) => {
                return (
                    <Box key={i} mt={2} >
                        <Stack direction='row' justifyContent='space-between'>
                            <Box>
                                <Stack direction='row' justifyContent='space-evenly' spacing={1}>
                                    <Avatar
                                        alt='userAvatar'
                                        src={streamers.snippet.thumbnails.default.url}
                                    />
                                    <Typography variant='p' mr={4} fontSize={11} alignSelf='center' sx={{ display: { xs: 'none', lg: 'block' } }}>{streamers.snippet.channelTitle}</Typography>
                                </Stack>
                            </Box>
                            <Box>
                                <Stack direction='row' justifyContent='space-between'>
                                    <Circle fontSize='small' color='error' sx={{ display: { xs: 'none', md: 'block' } }} />
                                    <Typography marginLeft={1} sx={{ display: { xs: 'none', md: 'block' } }}>{streamers.snippet.liveBroadcastContent}</Typography>
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>
                )
            })

        }
        return (<Box mt={2}>
            <CircularProgress />
        </Box>)
    }

    // render user stream

    renderAdmin = () => {
        if (this.props.user) {
            return this.props.myStream && (
                <Box mt={2} onClick={() => history.push('/user/stream/mystream')}>
                    <Typography variant='h6'>Hottest Streams</Typography>
                    <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
                        <Box>
                            <Stack direction='row' justifyContent='space-evenly' spacing={1} alignItems={'center'} >
                                <Avatar
                                    alt='userAvatar'
                                    src={this.props.user.picture}
                                />
                                <Typography variant='p' mr={4} fontSize={11} alignSelf='center' sx={{ display: { xs: 'none', lg: 'block' } }}>{this.props.myStream.title}</Typography>
                            </Stack>
                        </Box>
                        <Box>
                            <Stack direction='row' justifyContent='space-between' alignItems={'center'}>
                                <Circle fontSize='small' color='error' sx={{ display: { xs: 'none', md: 'block' } }} />
                                <Typography marginLeft={1} sx={{ display: { xs: 'none', md: 'block' } }}>Live</Typography>
                            </Stack>
                        </Box>
                    </Stack>
                </Box>
            )
        } else {
            return (<></>)
        }
    }

    render() {

        return (
            <>
                {window.location.pathname === '/user/stream/mystream' ? <></> : (<Box flex={1} mt={8}>
                    <Box mt='6%' height='100vh'>
                        <Typography variant='h6' sx={{ display: { xs: 'none', lg: 'block' } }}>Popular Channels</Typography>
                        {this.renderStreamers()}
                        {this.renderAdmin()}
                    </Box>
                </Box>)}
            </>



        );
    };
};

const mapStateToProps = state => {
    const { streams, myStream } = state.streams

    const { user } = state.auth

    return {
        user,
        streams,
        myStream
    }
}

export default connect(mapStateToProps, { fetchMysTream })(SideBar);


