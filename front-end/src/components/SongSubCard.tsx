import Box from "./Box"
import Typography from "./Typography"

interface SongCardProps{
    label:string;
    value:string;
}
const SongSubCard = ({value,label}:SongCardProps) =>{
    return(
       
 <Box variant="default" height='40px'>
            
            <Typography variant="normal">{label}:</Typography>
            <Typography variant="heading2">{value}</Typography>
            
                    </Box>
    
       
    )
}
export default SongSubCard