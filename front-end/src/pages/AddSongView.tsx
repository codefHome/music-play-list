import Box from "../components/Box";
import SongDetail from "../components/SongDetail";
import useSongForm from "../hooks/useSongForm";

const AddSongView = () => {
  const { onSubmit, handleSubmit, control, errors } = useSongForm();

  return (
    <Box className="flex h-auto lg:h-full bg-[rgb(224,243,221)]">
      <SongDetail
        title="Add Song Detail of Any Artist"
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        buttonLabel="Add Song"
        control={control}
        errors={errors}
      />
    </Box>
  );
};

export default AddSongView;
