import axios from "axios";
import { songEndpoint } from "./songEndpoint";
import {  FetchResponse2, Song } from "../interfaces/songTypes";
import { LoginType, RegisterPayload } from "../interfaces/authType";
axios.defaults.headers.common["Cache-Control"] = "no-cache";
export const getAllSongsAPI = async (page:number,limit:number) => {
  const response = await axios.get(`${songEndpoint.fetchAllSong}?page=${page}&limit=${limit}`);
  return response;
};
export const filterByGenreAPI = async (genre: string) => {
  const response = await axios.get(`${songEndpoint.filterByGenre}/${genre}`);
  return response;
};
export const deleteSongAPI = async (data:{id:string,limit:number}) => {
  const response = await axios.delete(`${songEndpoint.deleteSong}/${data.id}`);
  return response;
};

export const addSongAPI = async (data: Song) => {
  const response = await axios.post(`${songEndpoint.addSongs}`, data);
  return response.data;
};
export const updateSongAPI = async (data: FetchResponse2) => {
  const response = await axios.put(
    `${songEndpoint.updateSong}/${data?._id}`,
    data
  );
  return response;
};

export const getSongByIdAPI = async (_id: string) => {
  const response = await axios.get(`${songEndpoint.getSongById}/${_id}`);
  return response;
};

export const countCollectionAPI = async () => {
  const response = await axios.get(`${songEndpoint.countCollection}`);
  return response;
};
export const countSongInEachGenreAPI = async (page:number,limit:number) => {
  const response = await axios.get(`${songEndpoint.countSongInEachGenre}?page=${page}&limit=${limit}`);
  return response;
};
export const countSongAndAlbumOfArtistAPI = async (page:number,limit:number) => {
  const response = await axios.get(`${songEndpoint.countSongAndAlbumOfArtist}?page=${page}&limit=${limit}`);
  return response;
};
export const countSongInEachAlbumAPI = async (page:number,limit:number) => {
  const response = await axios.get(`${songEndpoint.countSongInEachAlbum}?page=${page}&limit=${limit}`);
  return response;
};
export const registerAPI = async (data:RegisterPayload) => {
  const response = await axios.post(`${songEndpoint.register}`,data)
  return response.data;
};
export const LoginAPI = async (data:LoginType) => {
  const response = await axios.post(`${songEndpoint.login}`,data);
  const{data:result,successData} = response.data
  return {data:result,successData:successData};
};
