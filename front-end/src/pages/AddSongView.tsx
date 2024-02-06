
import toast from "react-hot-toast";
import SongDetail from "../components/SongDetail";
import useSongForm from "../hooks/useSongForm";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setIsAdded } from "../store/slices/addSongSlice";




const AddSongView = () => {
  const { onSubmit, handleSubmit, control, errors } = useSongForm();

const {successData,isAdded} =useAppSelector(state => state.addsong)
const dispatch=useAppDispatch()
if(successData.success === true){
dispatch(setIsAdded(true))
}
if(successData.success === false){
  dispatch(setIsAdded(false))
  }
  if(isAdded === true){
    toast.success('Added successfully')
  }else if(isAdded === false){
    toast.error('Adding Failed')
  }


  return (
    <>
    <SongDetail
      title="Add Song Detail of Any Artist"
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      buttonLabel="Add Song"
      control={control}
      errors={errors}
    />
   
  </>
  );
};

export default AddSongView;
