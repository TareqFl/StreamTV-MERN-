import React from 'react';

import history from '../history';

import Reactplayer from 'react-player'
import {
    Grid, Box
    , Typography, Skeleton
} from '@mui/material'
import './syling/divEffect.css'



const Streams = props => {


    const renderStream = () => {
        if (props.streams) {
            const videos = props.streams.filter((video, i) => video !== null && i < props.number)

            return videos.map((stream) => {
                return (
                    <Grid item xs={12} sm={6} lg={4} key={stream.id.videoId} onClick={() => history.push(`/stream/${stream.id.videoId}`)} mb={10} >

                        <Box height='150%' className='PlayerEffect'>
                            <Reactplayer

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

        return (
            <React.Fragment>
                <Grid item lg={6} xl={4}>
                    <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
                </Grid>
                <Grid item lg={6} xl={4}>
                    <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
                </Grid>
                <Grid item lg={6} xl={4}>
                    <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
                </Grid>
                <Grid item lg={6} xl={4}>
                    <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
                </Grid>
                <Grid item lg={6} xl={4}>
                    <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
                </Grid>
                <Grid item lg={6} xl={4}>
                    <Skeleton className='PlayerEffect' variant="rectangular" width={530} height={200} animation={'wave'} />
                </Grid>
            </React.Fragment>

        )
    }



    return (
        <Box mt={1}>
            <Box mb={8}>
                <Typography variant='h4'>{props.title}</Typography>
                <Box>
                    <Grid spacing={1} container p={4} justifyContent={'center'}>
                        {renderStream()}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
};



export default Streams;



