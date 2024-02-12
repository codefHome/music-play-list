import { all } from "redux-saga/effects";
import { watchFetchSongs } from "./SongSaga";
import { WatchSongDelete } from "./deleteSaga";
import watchAddSongSaga from "./addSongSaga";
import watchUpdateSongSage from "./updateSongSaga";
import { watchFetchSingleSong } from "./singleSongSaga";
import { watchFilterSaga } from "./filterByGenreSaga";
import { watchCountSummarySaga } from "./countSummarySaga";
import { watchsongInGenreSaga } from "./songInGenreSaga";
import { watchSongAndAlbumeSaga } from "./SongAndAlbumOfArtistSaga";
import { watchSongInAlbumSaga } from "./songInEachAlbumSaga";
import watchRegisterSaga from "./registerSaga";
import watchLoginSaga from "./loginSaga";

export default function* rootSaga() {
  yield all([
    watchFetchSongs(),
    WatchSongDelete(),
    watchAddSongSaga(),
    watchUpdateSongSage(),
    watchFetchSingleSong(),
    watchFilterSaga(),
    watchCountSummarySaga(),
    watchsongInGenreSaga(),
    watchSongAndAlbumeSaga(),
    watchSongInAlbumSaga(),
    watchRegisterSaga(),
    watchLoginSaga(),
  ]);
}
