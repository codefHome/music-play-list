import Box from "./Box"
import Modal from "./Modal"

interface NotificationProps{
    open:boolean;
    message:string;
    handleClose: ()=>void;
}

const Notification = ({message,open,handleClose}:NotificationProps) =>{
    return(
        <Box>
        <Modal isOpen={open} onClose={handleClose}>
        <Box  variant="secondary">
         {message}
        </Box>
      </Modal>
        </Box>
    )
}
export default Notification