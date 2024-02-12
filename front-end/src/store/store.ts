import  registerReducer  from './slices/registerSlice';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import fetchReducer from './slices/songSlices'; // Adjust the import path
import { watchFetchSongs } from './sagas/SongSaga';
import deleteReducer from './slices/deleteSlice'
import { WatchSongDelete } from './sagas/deleteSaga';
import addSongReducer from './slices/addSongSlice'
import watchAddSongSaga from './sagas/addSongSaga';
import updateSongReducer from './slices/UpdateSongSlice'
import watchUpdateSongSage from './sagas/updateSongSaga';
import singSongReducer from './slices/singleSongSlice';
import { watchFetchSingleSong } from './sagas/singleSongSaga';
import filterReducer from './slices/filterByGenreSlice'
import { watchFilterSaga } from './sagas/filterByGenreSaga';
import countSummaryReducer from './slices/countSummarySlice'
import { watchCountSummarySaga } from './sagas/countSummarySaga';
import { watchsongInGenreSaga } from './sagas/songInGenreSaga';
import songInGenreReducer from './slices/songInEachGenreSlice'
import songAndAlbumReducer from './slices/countSongAndAlbumOfArtistSlice'
import songInAlbumReducer from './slices/songInEachAlbumSlice'
import { watchSongAndAlbumeSaga } from './sagas/SongAndAlbumOfArtistSaga';
import { watchSongInAlbumSaga } from './sagas/songInEachAlbumSaga';
import watchRegisterSaga from './sagas/registerSaga';
import watchLoginSaga from './sagas/loginSaga';
import loginReducer from './slices/loginSlice';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: fetchReducer,
    delete:deleteReducer,
    addSong:addSongReducer,
    updateSong:updateSongReducer,
    singleSong:singSongReducer,
    filterSong:filterReducer,
    countSummary:countSummaryReducer,
    songInGenre:songInGenreReducer,
    sondAndAlbum:songAndAlbumReducer,
    songInAlbum:songInAlbumReducer,
    register:registerReducer,
    login:loginReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
 
});

sagaMiddleware.run(watchFetchSongs);
sagaMiddleware.run(WatchSongDelete);
sagaMiddleware.run(watchAddSongSaga);
sagaMiddleware.run(watchUpdateSongSage);
sagaMiddleware.run(watchFetchSingleSong);
sagaMiddleware.run(watchFilterSaga);
sagaMiddleware.run(watchCountSummarySaga);
sagaMiddleware.run(watchsongInGenreSaga);
sagaMiddleware.run(watchSongAndAlbumeSaga);
sagaMiddleware.run(watchSongInAlbumSaga);
sagaMiddleware.run(watchRegisterSaga);
sagaMiddleware.run(watchLoginSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
