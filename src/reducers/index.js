import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "Kashmir", duration: "8:37" },
		{ title: "Michele", duration: "5:30" },
		{ title: "Hotel California", duration: "4:55" },
		{ title: "Like A Rolling Stone", duration: "3:27" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
