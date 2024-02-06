import Box from "../components/Box";
import Modal from "../components/Modal";
import SongDetail from "../components/SongDetail";
import useSongForm from "../hooks/useSongForm";
interface UpdateSongDetailProps {
  open: boolean;
  handleClose: () => void;
}
const UpdateSongDetailView = ({ open, handleClose }: UpdateSongDetailProps) => {
    const { onSubmit, handleSubmit, control, errors } = useSongForm();
  return (
    <Box>
      <Modal isOpen={open} onClose={handleClose}>
      <SongDetail
      title="Update Song Detail of Any Artis"
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      buttonLabel="Update Song"
      control={control}
      errors={errors}
    />
      </Modal>
    </Box>
  );
};
export default UpdateSongDetailView;
