import { Box, Button, Card, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material';
import React from 'react';

import { Games, KeyboardVoice, MusicNote, SportsEsports, Palette } from '@mui/icons-material'


import csGo from '../assets/csGo.jpg'
import gta from '../assets/gta.jpg'
import lol from '../assets/league.jpg'
import mineCraft from '../assets/mineCraft.jpg'
import eft from '../assets/eft.jpg'
import Valorant from '../assets/Valorant.jpg'
import pubg from '../assets/pubg.jpg'
import rust from '../assets/Rust.jpg'
import frtnt from '../assets/fortnite.jpg'


const Categories = () => {
    return (
        <Box mt={2}>
            <Typography variant='h4' mb={1}>Browse <span style={{ color: 'purple' }}>Categories</span></Typography>
            <Stack direction='row' justifyContent='center' spacing={1} mb={2} pl={4} pr={4}>
                <Card className='pictureEffect'>
                    <CardMedia
                        className='images'
                        component="img"

                        height="240"
                        image={csGo}
                        alt={csGo}
                    />
                    <CardContent>
                        <Typography variant='h6'>CsGo</Typography>
                        <Typography paragraph>266k viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect'>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={gta}
                        alt={gta}
                    />
                    <CardContent>
                        <Typography variant='h6'>GTA</Typography>
                        <Typography paragraph>160k viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect'>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={lol}
                        alt={lol}
                    />
                    <CardContent>
                        <Typography variant='h6'>LOL</Typography>
                        <Typography paragraph>2m viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect' sx={{ display: { xs: 'none', xl: 'block' }, maxWidth: '280px' }}>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={frtnt}
                        alt={frtnt}
                    />
                    <CardContent>
                        <Typography variant='h6'>Fortnite</Typography>
                        <Typography paragraph>6m viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect' sx={{ display: { xs: 'none', xl: 'block' }, maxWidth: '280px' }}>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={mineCraft}
                        alt={mineCraft}
                    />
                    <CardContent>
                        <Typography variant='h6'>MineCraft</Typography>
                        <Typography paragraph>15m viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect' sx={{ display: { xs: 'none', xl: 'block' } }}>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={eft}
                        alt={eft}
                    />
                    <CardContent>
                        <Typography variant='h6'>EFT</Typography>
                        <Typography paragraph>1m viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect' sx={{ display: { xs: 'none', md: 'block' } }}>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={Valorant}
                        alt={Valorant}
                    />
                    <CardContent>
                        <Typography variant='h6'>Valorant</Typography>
                        <Typography paragraph>999k viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect'>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={pubg}
                        alt={pubg}
                    />
                    <CardContent>
                        <Typography variant='h6'>PUBG</Typography>
                        <Typography paragraph>160k viewers</Typography>

                    </CardContent>
                </Card>
                <Card className='pictureEffect' sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <CardMedia
                        className='images'
                        component="img"
                        height="240"
                        image={rust}
                        alt={rust}
                    />
                    <CardContent>
                        <Typography variant='h6'>RUST</Typography>
                        <Typography paragraph>549k viewers</Typography>
                    </CardContent>
                </Card>
            </Stack>
            <Divider />
            <Stack direction='row' justifyContent='space-evenly'
                spacing={2}
                mt={2}
                mb={2}
                pl={2}
                pr={2}
            >
                <Button fullWidth variant='contained' color='secondary' endIcon={<Games />}>GAMING
                </Button>
                <Button fullWidth variant='contained' color='secondary' endIcon={<KeyboardVoice />}>IRL</Button>
                <Button fullWidth variant='contained' color='secondary' endIcon={<MusicNote />}>Music</Button>
                <Button fullWidth variant='contained' color='secondary' endIcon={<SportsEsports />}>E-SPORTS</Button>
                <Button fullWidth variant='contained' color='secondary' endIcon={<Palette />}>Creative</Button>
            </Stack>
        </Box>
    );
};

export default Categories