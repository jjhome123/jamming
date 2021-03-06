import './App.css';
import React from 'react';
import Playlist from '../Playlist/playlist';
import SearchBar from '../SearchBar/searchbar';
import SearchResults from '../SearchResults/searchresults';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
        {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
        {name: 'name3', artist: 'artist3', album: 'album3', id: 3}
      ],
      playlistName: 'playlist1',
      playlistTracks: [
        {name: 'name4', artist: 'artist4', album: 'album4', id: 1},
        {name: 'name5', artist: 'artist5', album: 'album5', id: 2},
        {name: 'name6', artist: 'artist6', album: 'album6', id: 3}
      ]
    }
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks= this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({
      playlistTracks: tracks
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>);
  }
}