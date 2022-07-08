import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams, fetchIrlStreams } from '../actions';


import Streams from './Streams'
import Categories from './Categories'
import ReactPlayer from 'react-player';
import { Carousel } from "react-bootstrap";

import {
    Box,
    Divider,
    Skeleton
} from '@mui/material';


class HomePage extends Component {

    //fetch youtube api streams

    componentDidMount() {

        this.props.fetchStreams(24, process.env.REACT_APP_STREAMS_API, 'Gaming')
        this.props.fetchIrlStreams(24, process.env.REACT_APP_IRL_API, 'IRL')
    }

    // if state exists render carousel logic
    renderCarousel = () => {
        if (this.props.streams.streams) {
            const { streams } = this.props.streams
            const array_st = streams.filter((s, i) => {
                return i < 5
            })
            return array_st.map(stream => {
                return (
                    <Carousel.Item key={stream.id.videoId}>
                        <ReactPlayer style={{ marginLeft: 'auto', marginRight: 'auto' }}
                            url={`https://www.youtube.com/embed/${stream.id.videoId}`}
                            allowFullScreen
                            controls={true}
                            pip={true}
                        />
                    </Carousel.Item>

                )
            })
        }
        return (
            <Carousel.Item>
                <Skeleton variant="rectangular" width={700} height={350} animation={'wave'} sx={{ marginLeft: 'auto', marginRight: 'auto' }} />
            </Carousel.Item>
        )
    }




    render() {
        return (
            <Box flex={8} mt={12}>
                <Box sx={{ display: { sx: 'none', sm: 'block' } }} mt='5%' p={4}>
                    <>
                        <Carousel fade indicators={false} pause='hover' variant={`${this.props.mode === 'dark' ? 'light' : 'dark'}`} controls={false}>
                            {this.renderCarousel()}
                        </Carousel>
                    </>
                </Box>
                <Box>
                    <Streams streams={this.props.streams.streams} title='Live Games' number={6} />
                </Box>
                <Divider />
                <Categories />
                <Divider />
                <Box>
                    <Streams streams={this.props.streams.irlStreams} title='Live IRL' number={6} />
                </Box>
            </Box>
        );
    };
};

const mapStateToProps = state => {
    const { mode } = state.theme

    return {
        streams: state.streams,
        mode
    }
}

export default connect(mapStateToProps, { fetchStreams, fetchIrlStreams })(HomePage);


