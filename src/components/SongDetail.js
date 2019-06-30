import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSong }) => {
	// console.log(props);
	if (mySelectedSong) {
		return (
			<div className="ui segment">
				<div className="ui header">Details:</div>
				<div className="content">Title: {mySelectedSong.title}</div>
				<div className="content">
					Duration: {mySelectedSong.duration}
				</div>
			</div>
		);
	}
	return <div>Select a Song</div>;
};

const mapStateToProps = state => {
	return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
