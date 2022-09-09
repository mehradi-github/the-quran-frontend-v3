import { FC, Fragment } from "react";
import { MoreVert as MoreVertIcon,Favorite as FavoriteIcon, Share as ShareIcon } from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import { getFontFamilyPage, VerseModel } from "../chapter/chapter.api";
// import { blue, cyan } from "@mui/material/colors";


const Verse:FC<VerseModel> = ({verseKey, text, translation,pageNumber})=>{
  const fontFamilyVerse=getFontFamilyPage(pageNumber);
    return(
        <Card sx={{  my:2 }}>
      <CardHeader
        avatar={
          <Avatar variant="signed" >
           <Typography variant='verseNumber' fontSize={15}>{verseKey}</Typography> 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
       
      />
      
      <CardContent sx={{px:8,py:0,direction:'rtl'}}>
        {/* <Typography  variant={getTypographyVariant(pageNumber)} gutterBottom sx={{textAlign:'end',my:2}} > */}
        <Typography paragraph={true} variant="verse" fontFamily={`${fontFamilyVerse}`} fontSize={40}>
        {text}
         </Typography>
        <Typography paragraph={true} variant="verse" fontFamily={'uthmani'} fontSize="18">
        {translation}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
    );
}
export default Verse;