import { environment } from "../environment/environment";

export const songEndpoint = {
  fetchAllSong: `${environment.urls.web}/getAllSongs`,
  deleteSong: `${environment.urls.web}/deleteSong`,
  addSongs:`${environment.urls.web}/addSong`,
  updateSong:`${environment.urls.web}/updateSong`,
  getSongById: `${environment.urls.web}/getSongById`,
  filterByGenre: `${environment.urls.web}/filterByGenre`,
  countCollection: `${environment.urls.web}/countCollection`,
  countSongInEachGenre: `${environment.urls.web}/songInEachGenre`,
  countSongAndAlbumOfArtist: `${environment.urls.web}/countSongAndAlbumForArtist`,
  countSongInEachAlbum: `${environment.urls.web}/songInEachAlbum`,
  register: `${environment.urls.web}/register`,
  login: `${environment.urls.web}/login`,
};
