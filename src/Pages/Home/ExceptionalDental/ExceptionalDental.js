import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imageTreatment from '../../../images/treatment.png';

const ExceptionalDental = () => {
    return (
        <div>
            <Container maxWidth="lg">
            <Grid container spacing={2} columns={16}>
                <Grid item xs={6}>
                    <img style={{height: '500px',width: '100%'}} src={imageTreatment} alt="" />
                </Grid>
                <Grid item xs={10} >
                <Typography sx={{mt:6,px: 10,fontWeight: 700}} variant="h3" component="div">
                    Exceptional Dental Care On your Turns
                </Typography>;
                    <Typography sx={{px:10}} variant="body1" gutterBottom>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                    </Typography>
                    <Button style={{ backgroundColor: '#5CE7ED' }} sx={{ml:10}} variant="contained">Contained</Button>
                </Grid>
            </Grid>
            </Container>
        </div>
    );
};

export default ExceptionalDental;