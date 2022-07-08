import { Box, Grid, Skeleton } from '@mui/material';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions/index'
import ReactPlayer from 'react-player'





class StreamSearch extends Component {

    componentDidMount() {
        this.props.fetchStreams(24, process.env.REACT_APP_IRL_API, this.props.match.params.q)
    }

    renderStream = () => {
        if (this.props.streams) {
            return this.props.streams.map((stream) => {
                return (
                    <Grid item xs={12} lg={4} xl={3} key={stream.id.videoId} mb={10} >

                        <Box height='150%' className='PlayerEffect'>
                            <ReactPlayer

                                height="100%"
                                width='100%'
                                url={`https://www.youtube.com/watch?v=${stream.id.videoId}`}
                                controls={true}

                            />
                        </Box>

                    </Grid>
                )
            })
        }
        return <React.Fragment>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
            <Grid item xs={12} lg={6} xl={4}>
                <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
            </Grid>
        </React.Fragment>

    }
    render() {
        return (
            <Box flex={8} >
                <Box mt={12} pr={1}>
                    <Grid container spacing={1} >
                        {this.renderStream()}
                    </Grid>
                </Box>
            </Box>
        );
    }
}

const mapStateToProps = state => {
    const { streams } = state.streams
    return {
        streams
    }
}


export default connect(mapStateToProps, { fetchStreams })(StreamSearch);