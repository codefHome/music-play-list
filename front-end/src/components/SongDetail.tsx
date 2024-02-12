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
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      p={1}
      justifyContent="center"
      alignItems="center"
      height="90%"
    >
      <Box variant="secondary" height="max-content">
        <Typography
          color="blue"
          mt="-5px"
          mb="5px"
          fontSize="20px"
          fontWeight="bold"
        >
          {title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column">
            <Box display="flex" flexDirection="column">
              <InputField
                id="title"
                placeholder="please enter title"
                control={control}
                label="Title"
              />
              {!!errors.title && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                >
                  {errors?.title?.message}
                </Typography>
              )}
            </Box>
            <Box display="flex" flexDirection="column">
              <InputField
                id="artist"
                placeholder="please enter artist full Name"
                control={control}
                label="Artist"
              />
              {!!errors.artist && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                >
                  {errors?.artist?.message}
                </Typography>
              )}
            </Box>
            <Box display="flex" flexDirection="column">
              <InputField
                id="album"
                placeholder="please enter album name"
                control={control}
                label="Album"
              />
              {!!errors.album && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                >
                  {errors?.album?.message}
                </Typography>
              )}
            </Box>
            <Box display="flex" flexDirection="column">
              <InputField
                id="genre"
                placeholder="please enter genre"
                control={control}
                label="Genre"
              />
              {!!errors.genre && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                >
                  {errors?.genre?.message}
                </Typography>
              )}
            </Box>
            <Box display="flex" flexDirection="column">
              <InputField
                id="videoUrl"
                placeholder="please enter video Url"
                control={control}
                label="Video URL"
              />
              {!!errors.videoUrl && (
                <Typography
                  marginTop="-5px"
                  color="red"
                  textAlign="center"
                  fontSize="12px"
                >
                  {errors?.videoUrl?.message}
                </Typography>
              )}
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={3}
            >
              <Button type="submit" variant="primary" color="black">
                {buttonLabel}{" "}
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default SongDetail;
