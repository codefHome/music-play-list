import { DeleteIcon } from "../assets/DeleteIcon";
import { EditIcon } from "../assets/EditIcon";
import Box from "./Box";

import Span from "./Span";

interface DeleteAndEditProps {
  handleEdit: (id: string) => void;
  handleOpen: (title: string, id: string) => void;
  id: string;

  title: string;
}
const DeleteAndEdit = ({
  handleEdit,
  id,

  handleOpen,
  title,
}: DeleteAndEditProps) => {
  return (
    <Box>
      <Box
        display="flex"
        variant="gap"
        justifyContent="center"
        alignItems="center"
      >
        <Span onClick={() => handleEdit(id)}>
          <EditIcon />
        </Span>
        <Span onClick={() => handleOpen(title, id)}>
          <DeleteIcon />
        </Span>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default DeleteAndEdit;
