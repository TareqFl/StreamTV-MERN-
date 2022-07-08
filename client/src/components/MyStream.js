import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStreams, fetchMysTream } from '../actions'

import { Avatar, Box, Button, Container, Stack, Typography } from '@mui/material'
import ReactPlayer from 'react-player'
import Streams from './Streams'
import RenderModal from './Modal'




class MyStream extends Component {

    componentDidUpdate() {
        this.props.fetchMysTream(this.props.user.sub)
    }

    componentDidMount() {

        if (this.props.user) {
            this.props.fetchMysTream(this.props.user.sub)
        }

        this.props.fetchStreams(24, process.env.REACT_APP_STREAMS_API, 'Gaming')
    }



    state = {
        modal: false
    }


    fetchDB = async () => {
        this.setState({ modal: true })
    }


    renderProps = () => this.props.user ? this.props.user : '';

    handleClose = () => {
        this.setState({ modal: false })
    }

    render() {
        return (
            <Box flex={8} mt={12}>
                <Container>
                    <ReactPlayer
                        url='http://localhost:8000/live/1.flv'
                        width='100%'
                        height='100%'
                        controls={true}
                        pip
                        playing={true}
                    />
                    <Stack direction='column'>
                        <Box>
                            <Stack direction={'row'} spacing={1} alignItems={'center'} justifyContent={'space-between'}>
                                <Box>
                                    <Avatar src={this.props.user && this.props.user.picture} width={200} />
                                </Box>
                                <Box flex={8}>
                                    <Typography variant='h6'>{this.props.myStream && this.props.myStream.title}</Typography>
                                </Box>
                                <Box flex={1}>
                                    <Button onClick={this.fetchDB} variant='contained' size='small' sx={{ backgroundColor: 'purple', color: 'white' }} color='secondary'>Edit Stream</Button>
                                </Box>
                            </Stack>
                        </Box>
                        <Box mt={4}>
                            <Container>
                                <Typography variant='h6'>Description</Typography>
                                <Typography variant='h6'>{this.props.myStream && this.props.myStream.description}</Typography>
                            </Container>
                        </Box>
                    </Stack>

                </Container>
                <Box p={8} ml={this.props.stream ? '' : 10}>
                    <Streams streams={this.props.streams} title='Related Streams' number={6} />
                </Box>
                <RenderModal
                    open={this.state.modal}
                    handleClose={this.handleClose}
                    user={this.renderProps()}
                    on_Close={() => this.setState({ modal: false })}
                />
            </Box>
        )
    }
}

const mapStateToProps = state => {
    const { myStream, streams } = state.streams
    const { user } = state.auth

    return {
        streams,
        myStream,
        user

    }

}


export default connect(mapStateToProps, { fetchMysTream, fetchStreams })(MyStream)