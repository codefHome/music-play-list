import { SubmitHandler } from "react-hook-form";
import Box from "./Box";
import Button from "./Button";
import InputField from "./InputField";
import Typography from "./Typography";
import { Song } from "../interfaces/songTypes";

interface SongDetailProps {
  title: string;
  onSubmit: SubmitHandler<Song>;
  handleSubmit: (
    onSubmit: SubmitHandler<Song>
  ) => (e: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
}

const SongDetail = ({
  title,
  errors,
  control,
  buttonLabel,
  handleSubmit,
  onSubmit,
}: SongDetailProps) => {
  return (
    <Box className="flex flex-col w-full justify-center items-center h-full gap-3">
      <Box
        className="flex flex-col bg-white w-full lg:w-2/5 p-4 justify-center "
        border="1px solid white"
        boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
      >
        <Typography
          color="blue"
          mt="-5px"
          mb="5px"
          fontSize="20px"
          fontWeight="bold"
          className="text-center"
        >
          {title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className="flex flex-col px-5 py-3 w-full gap-2">
            <InputField
              id="title"
              placeholder="please enter title"
              control={control}
              label="Title"
              errorMessage={errors?.title?.message}
              errors={errors.title}
            />

            <InputField
              id="artist"
              placeholder="please enter artist full Name"
              control={control}
              label="Artist"
              errorMessage={errors?.artist?.message}
              errors={errors.artist}
            />

            <InputField
              id="album"
              placeholder="please enter album name"
              control={control}
              label="Album"
              errorMessage={errors?.album?.message}
              errors={errors.album}
            />

            <InputField
              id="genre"
              placeholder="please enter genre"
              control={control}
              label="Genre"
              errorMessage={errors?.genre?.message}
              errors={errors.genre}
            />

            <InputField
              id="videoUrl"
              placeholder="https://www.youtube.com/watch?v=sldfjlsdkf"
              control={control}
              label="Video URL"
              errorMessage={errors?.videoUrl?.message}
              errors={errors.videoUrl}
            />

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={3}
            >
              <Button type="submit" variant="primary" color="black">
                {buttonLabel}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default SongDetail;
