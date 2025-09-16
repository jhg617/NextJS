"use client"
import { Box, Grid } from "@mui/material";

function Nav(){
    const navItem = ["Products", "Color cosmetics", "Skin cosmetics", "About"];
    return(
        <nav id="header">
            <Grid container my={2}> {/* my: 위아래로 margin 설정 */}
                {navItem.map(function(item, i){
                    return(
                    <Grid item key={i} size={{xs:12, md:3}}>
                        <Box bgcolor="primary.light" p={2}>{item}</Box> {/* p : padding */}
                    </Grid>
                    )
                })}
            </Grid>
        </nav>
    );
}
export default Nav;
//위 구문과 export default function Footer(){ return(); } 이 같다.