import { ReactNode } from "react";

export interface Song {
  title: string;
  artist: string;
  album: string;
  genre: string;
  videoUrl:string 

}

export interface InformationCardType extends Omit<Song,'videoUrl'>{}
export interface AddSongPayload extends Song {
  userId:string 
}
export interface FetchResponse extends Song {
  _id?: string | undefined;
  
}
export interface FetchResponse2  {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  limit:number;
}
export interface FetchResponse1  {
  payload:FetchResponse2
  page:number;
  limit:number;
}
export interface SongsState {
  data: FetchResponse[];
  totalPage: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}

export interface FetchSongState extends SongsState {
  singleSong: FetchResponse;
}
export interface SingleSongState extends Omit<SongsState, "data"> {
  data: FetchResponse;
}
export interface UpdateSongState {
  isEdit: boolean;
  loading: boolean;
  error: string | null;
  open: boolean;
}
export interface SuccessResopnse{
  data:{msg:string ,success:boolean }
}

export interface AddSongState {
  data: Song[];
  loading: boolean;
  error: string | null;
  successData: {msg:string | null,success:boolean | null}
  isAdded: boolean | null
  
}

export interface CardProps {
  title: string;
  artist: string;
  album: string;
  genre: string;
  icon:ReactNode
}
export interface SongCountType {
  album: string;
  titles: number;
}
export interface CountCollectionType {
  name: string;
  value: number;
}
export interface SongInGenre {
  count: number;
  genre: string;
}

export interface SongAndAlbumType {
  artist: string;
  title: number;
  album: number;
}
export interface CountSummaryState extends Omit<SongsState, "data"> {
  data: CountCollectionType[];
}
export interface SongInGenreState {
  data: SongInGenre[];
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}

export interface SongInGenrePagination {
  data: SongInGenre[];
  totalPages: number;
  currentPage: number;
}
export interface SongAndAlbumState  {
  data: SongAndAlbumType[];
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}
export interface SongAndAlbumPagination {
  data: SongAndAlbumType[];
  totalPages: number;
  currentPage: number;
}
export interface SongInAlbumState  {
  data: SongCountType[];
  totalPages: number;
  currentPage: number;
  loading: boolean;
  error: string | null;
}
export interface SongInAlbumPagination {
  data: SongCountType[];
  totalPages: number;
  currentPage: number;
}

export interface AllSongWithPagination {
  _id:string;
  title: string;
  artist: string;
  album: string;
  genre: string;
  videoUrl:string;
}

export interface FetchSongwithPagination {
  data: AllSongWithPagination[];
  totalPages: number;
  currentPage: number;
}

export interface PaginationType {
  page: number;
  limit: number;
}

export interface FetchSongwithPaginationState {
  songs: AllSongWithPagination[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
}

export interface FetchSongSuccesResponse {
data:FetchSongwithPagination
}
export interface SongInGenreSuccesResponse {
  data:SongInGenrePagination
  }
  export interface SongInAlbumSuccesResponse {
    data:SongInAlbumPagination
    }
    export interface SongAndAlbumSuccesResponse {
      data:SongAndAlbumPagination
      }
      export interface InputFieldProp {
        label: string;
        id: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        control: any;
        placeholder: string;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        errors:any;
        errorMessage:string;
      }

      export interface SideMenuProps{
        showMenu:boolean;
        handleClose: () => void;
      }

      export interface VisibleType{
        count:boolean;
        song:boolean;
        album:boolean;
        genre:boolean;
      }