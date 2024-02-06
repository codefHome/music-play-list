import { CardProps, } from "../interfaces/songTypes"
import Box from "./Box"
import SongSubCard from "./SongSubCard"



const SongCard = ({songDetail}:CardProps) =>{
    return(
        <Box  display='flex' justifyContent='center'>
            <Box variant="secondary">
<SongSubCard label="Title" value={songDetail?.title}/>
<SongSubCard label="Title" value={songDetail?.artist}/>
<SongSubCard label="Title" value={songDetail?.album}/>
<SongSubCard label="Title" value={songDetail?.genre}/>
        </Box>  
        </Box>
      
    )
}
export default SongCard