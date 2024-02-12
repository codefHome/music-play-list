import SongDetail from "../components/SongDetail";
import useSongForm from "../hooks/useSongForm";

const AddSongView = () => {
  const { onSubmit, handleSubmit, control, errors } = useSongForm();

  return (
    <SongDetail
      title="Add Song Detail of Any Artist"
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      buttonLabel="Add Song"
      control={control}
      errors={errors}
    />
  );
};

export default AddSongView;
