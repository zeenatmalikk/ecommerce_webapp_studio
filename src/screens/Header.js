import { Button, Grid, Typography } from '@material-ui/core'
import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import "./Header.css"
const Header = () => {
    return (
        <div style={{backgroundColor:"#031043", color:"white"}}>
            <Grid container>
                
                <Grid item md={2} style={{display:"flex"}}>
                    <Typography className="logo">
                        Studio
                    </Typography>
                    <PlayCircleFilledIcon style={{marginLeft:10, fontSize:40, marginTop:21}}/>

                </Grid>
              
                <Grid item md={10}  style={{display:"flex", marginBottom:"1%"}}>
<Typography className="nav">
    What we do?
</Typography>
<Typography className="nav">
    Results
</Typography>
<Typography className="nav">
    Blogs and reports
</Typography>
<Typography className="nav">
   Who we are?
</Typography>
<Typography className="nav">
   Contact
</Typography>
<Typography className="nav">
    889765454
</Typography>
<Button  className="nav1">
    Free website checkup
</Button>
                </Grid>

            </Grid>
        </div>
    )
}

export default Header
