"use client"
import { Box, Grid } from "@mui/material";
import Link from "next/link";

function Nav(){
    //const navItem = ["Products", "Color cosmetics", "Skin cosmetics", "Board", "About"];
    const navItem = [{
        title:"Products",
        path:"/products"
    },{
        title: "Color cosmetics",
        path:"/color"
    },{
        title: "Skin cosmetics",
        path:"/skin"
    },{
        title: "Board",
        path:"/board"
    },{
        title: "About",
        path:"/path"
    }];

    return(
        <nav id="header">
            <Grid container my={2}> {/* my: 위아래로 margin 설정 */}
                {navItem.map(function(item, i){
                    return(

                    <Grid item key={i} size={{xs:12, md:2}}>
                        <Link href={`${item.path}`}>
                            <Box bgcolor="primary.light" p={2}>{item.title}</Box>
                        </Link>
                    </Grid>
                    );
                })}
            </Grid>
        </nav>
    );
}
export default Nav;
//위 구문과 export default function Footer(){ return(); } 이 같다.