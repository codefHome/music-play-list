import { zodResolver } from "@hookform/resolvers/zod";
import CreateSongValidation, { CreateSongShema } from "../schema/songSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { Song } from "../interfaces/songTypes";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addSongStart } from "../store/slices/addSongSlice";
import { useEffect } from "react";
import { setOpen, updateSongStart } from "../store/slices/UpdateSongSlice";
import { useSearchParams } from "react-router-dom";


const useAddSongForm = () => {
  const dispatch=useAppDispatch()
  const {data} = useAppSelector((state) => state.singleSong)
  const {isEdit} = useAppSelector((state) => state.updateSong)
  const[searchParams]=useSearchParams()

    const onSubmit: SubmitHandler<CreateSongValidation> = async(
        data: Song,
      ) => {
        const updatedData={...data,_id: searchParams.get('id') ?? ''}
        if(isEdit){
          dispatch(updateSongStart(updatedData))
          dispatch(setOpen(false))
        }else{
    dispatch(addSongStart(data));
    
reset()
          
         
          
        }
      
      };
   const {
    control,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<CreateSongValidation>({
    mode: 'onChange',

    defaultValues: {
      title: isEdit ? data?.title : '',
      artist: isEdit ? data?.artist : '',
      album: isEdit ? data?.album : '',
      genre: isEdit ? data?.genre : '',
    },
    resolver: zodResolver(CreateSongShema),
  });

  useEffect(() =>{
    if(isEdit){
      reset(
        { title: data?.title ??  '',
        artist: data?.artist ??  '',
        album: data?.album ??  '',
        genre: data?.genre ??  '',}
      )
    }
  },[isEdit,data])
  return {
control,
onSubmit,
    errors,
    handleSubmit
    
  }
}

export default useAddSongForm;


