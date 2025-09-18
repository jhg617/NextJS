'use client';
import Link from "next/link";
import { Box, Grid } from "@mui/material";

function Nav(){
    const navItem = [{
        title:"Home",
        path:"/Home"
    },{
        title: "Members",
        path: "/Members"
    }, {
        title: "Board",
        path: "/Board"
    }, {
        title: "Login",
        path: "/Login"
    }, {
        title: "SignUp",
        path: "/SignUp"
    }];

    return(
        <nav id="header">
            <Grid container my={2}>
                {navItem.map(function(item, i){
                    return(
                        <Grid item key={i} size={{xs:12, md:3}}>
                            <Link href={`${item.path}`}>
                                <Box bgcolor="primary.light" p={2}>{item}</Box>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </nav>
    );
}
export default Nav;