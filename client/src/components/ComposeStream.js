import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';



import { Box, Button, Container, InputAdornment, OutlinedInput, styled, TextareaAutosize, TextField, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';

const StyledForm = styled(Box)({
    borderRadius: '25px',
    padding: '20px',
    border: '1px solid ',
    width: '100%',
    boxShadow: '10px 10px 10px 10px'
})

class ComposeStream extends Component {

    renderInput = ({ input, label, meta }) => {
        return (
            <React.Fragment>
                <Box mb={8}>
                    <TextField {...input} variant='standard' label />
                </Box>
            </React.Fragment>
        )
    }

    renderSecondInput = ({ input, label, meta }) => {
        return (
            <React.Fragment>
                <TextareaAutosize
                    maxRows={2}
                    placeholder={label}
                    style={{ width: '100%' }}
                />
            </React.Fragment>
        )
    }
    render() {
        return (
            <Box flex={14} mt={10} pt={12} alignItems='center'>
                <Container>
                    <Box sx={{ maxWidth: '100%' }} alignSelf='center'>

                        <Typography variant='h3'>Compose a new Stream!</Typography>

                        <form>

                            <StyledForm>
                                <Box mb={8} >
                                    <Typography variant='h6'>Title</Typography>
                                    <Field name='title' component={this.renderInput} label='Enter a title' autoComplete='off' />
                                </Box>

                                <Box mt={8}>
                                    <Typography variant='h6'>Description</Typography>
                                    <Field name='description' component={this.renderSecondInput} label='Enter Description' autoComplete='off' />
                                </Box>

                                <Box mt={4} display='flex' flexDirection='row-reverse' justifyContent='space-between'>
                                    <Button variant='contained' size='large' endIcon={<Add />} color='secondary'>Submit</Button>
                                </Box>
                            </StyledForm>

                        </form>
                    </Box>
                </Container>
            </Box>
        );
    };
};



export default reduxForm({ form: 'Compose Stream' })(ComposeStream);