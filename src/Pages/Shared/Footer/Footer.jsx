import { Container, Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
        <div style={{ height: '350px', width: '100%' }}>
            <Grid container alignItems={'center'} justifyContent={'center'}>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{ backgroundColor: '#1f2937', height: '272px', width: '100%' }}>
                    <Typography sx={{ color: 'white', textAlign: 'center', alignItems: 'center', marginTop: '20px' }}>CONTACT US</Typography>
                    <Typography sx={{ color: 'white', textAlign: 'center', alignItems: 'center', marginTop: '20px' }}>123 ABS Street, Uni 21, Bangladesh</Typography>
                    <Typography sx={{ color: 'white', textAlign: 'center', alignItems: 'center', marginTop: '20px' }}>+88 123456789</Typography>
                    <Typography sx={{ color: 'white', textAlign: 'center', alignItems: 'center', marginTop: '20px' }}>Mon - Fri: 08:00 - 22:00</Typography>
                    <Typography sx={{ color: 'white', textAlign: 'center', alignItems: 'center', marginTop: '20px' }}>Sat - Sun: 10:00 - 23:00</Typography>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{ backgroundColor: '#111827', height: '272px', width: '100%' }}>
                    <Typography sx={{ color: 'white', textAlign: 'center', alignItems: 'center', marginTop: '20px' }}>Follow US</Typography>
                    <Typography sx={{ color: 'white', textAlign: 'center', alignItems: 'center', marginTop: '20px' }}>Join us on social media</Typography>
                </Grid>
            </Grid>
            <div className="" style={{ height: '78px', backgroundColor: '#000',}}>
                <Typography variant="body2" sx={{ color: '#fff', textAlign: 'center' }}>Copyright © CulinaryCloud. All rights reserved.</Typography>
            </div>
        </div>
    );
};

export default Footer;