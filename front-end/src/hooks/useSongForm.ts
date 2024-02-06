import { zodResolver } from "@hookform/resolvers/zod";
import CreateSongValidation, { CreateSongShema } from "../schema/songSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { Song } from "../interfaces/songTypes";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addSongStart, setIsAdded } from "../store/slices/addSongSlice";
import { useEffect } from "react";
import { setOpen, updateSongStart } from "../store/slices/UpdateSongSlice";
import { useSearchParams } from "react-router-dom";

const useAddSongForm = () => {
  const dispatch = useAppDispatch();
  const { data: editData } = useAppSelector((state) => state.singleSong);
  const { isEdit } = useAppSelector((state) => state.updateSong);
  const [searchParams] = useSearchParams();

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateSongValidation>({
    mode: "onChange",

    defaultValues: {
      title: isEdit ? editData?.title : "",
      artist: isEdit ? editData?.artist : "",
      album: isEdit ? editData?.album : "",
      genre: isEdit ? editData?.genre : "",
    },
    resolver: zodResolver(CreateSongShema),
  });
  const onSubmit: SubmitHandler<CreateSongValidation> = async (data: Song) => {
    const updatedData = {
      ...data,
      _id: searchParams.get("id") ?? "",
      limit: 7,
    };
    if (isEdit) {
      dispatch(updateSongStart(updatedData));
      dispatch(setOpen(false));
    } else {
      dispatch(addSongStart(data));
    reset()
    setTimeout(() => {
      dispatch(setIsAdded(null))
    }, 1000);
    }
  };

  useEffect(() => {
    if (isEdit) {
      reset({
        title: editData?.title ?? "",
        artist: editData?.artist ?? "",
        album: editData?.album ?? "",
        genre: editData?.genre ?? "",
      });
    }
  }, [isEdit, editData]);

  return {
    control,
    onSubmit,
    errors,
    handleSubmit,
    reset,
  };
};

export default useAddSongForm;
