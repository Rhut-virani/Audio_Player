import React, { Component } from 'react';
import './styles/App.css';
import './styles/devices.min.css';
import {Switch, Link, Route} from 'react-router-dom';
import axios from 'axios';
import Songs from '././components/Songs';
import SongsList from './components/SongsList';
import SongDetails from './components/SongDetails';
import Copyright from './components/Copyright';

let baseUrl = window.location.hostname.includes('localhost') ? ("http://localhost:8080") : '';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      deviceClass: "marvel-device landscape screen-container mt-5 " + localStorage.getItem('devicename'),
      currentSongId : 1,
      nowPlaying : false,
      currentTime: 0,
      duration:0,
      song: [
        {
          name: 'UpStep',        
          description: '',
          path: '',
          id : 1,
        }
      ],
    }
  }

  // getting data from the backend  
  componentDidMount(){
    // axios.get('http://localhost:8080/songdata')
    let url = baseUrl + '/songdata';
    axios.get(url)
          .then((result)=>{
            this.setState({
              song: result.data
            })
          })
          .catch((err)=>{
            console.log(err)
          })
      // assigning refs to a variable for easy access
      // using setinterval to get Time value from audiosong.currentTime every second
    setInterval(()=>{
      let audiosong = this.refs.myaudio ? this.refs.myaudio : {currentTime:0 , duration:0}; 
      this.setState({ 
      currentTime : Math.ceil(audiosong.currentTime),
      duration : Math.ceil(audiosong.duration),  
    })}, 1000); 
  }
  // making sure the playing state is kept on song change or 'page' change
  componentDidUpdate = ()=>{
    if(localStorage.getItem('devicename')){
      if(this.state.nowPlaying){
        this.refs.myaudio.play();
        }
    }
  }

  playButton=()=>{
    this.refs.myaudio.play();
    this.setState({
      nowPlaying : true
  });
  }

  pauseButton=()=>{
    this.refs.myaudio.pause();
    this.setState({
      nowPlaying : false
  });
  }

  // using if statement to go next and previous and also 
  // letting user loop through songs if they keep pressing last or first song

  nextButton=()=>{
    if(this.state.currentSongId < this.state.song.length){
    this.setState({
        currentSongId : (this.state.currentSongId + 1),
    });
    }
    else{
        this.setState({
            currentSongId : 1
        });
    }
  }

  previousButton=()=>{
    if(this.state.currentSongId > 1){
    this.setState({
        currentSongId : (this.state.currentSongId - 1)
    })}
    else{
        this.setState({
            currentSongId : 3
        });
      }
    }

  playSongById=(id)=>{
    this.setState({
        currentSongId : id,
        nowPlaying : true
    });
  }

  // converting time into a formate which shows minutes and seconds in proper way
  formatTime = (time) => {
    var minutes = Math.floor(time/60);
    var seconds = Math.ceil(time % 60);
    return ((minutes < 10 ? '0' : '') + minutes + ':' +
      (seconds < 10 ? '0' : '') + seconds);
  }
  selectHandler = () =>{
    let selection = this.refs.value.value;
    let dc = "marvel-device landscape screen-container mt-5 " + selection;
    this.setState({
      deviceClass : dc,
    });
    localStorage.setItem('devicename', selection)
  }
  changeDevice = () =>{
    localStorage.removeItem('devicename');
    this.setState({
      nowPlaying : false
  });
  }
  render() {
    if(!(localStorage.getItem('devicename'))){
    return(
      <div className="selection-form">
      <form class="form-inline  animated slideInDown">
        <select ref="value" class="custom-select custom-select-lg mb-3 shdo-f" onChange={this.selectHandler} id="inlineFormCustomSelectPref">
          <option selected>Choose Your prefered Mobile..</option>
          <option value="iphone-x">Iphone X</option>
          <option value="note8">Note 8</option>
          <option value="iphone8 gold">Iphone 8 Gold</option>
          <option value="iphone8 silver">Iphone 8 Silver</option>
          <option value="iphone8 black">Iphone 8 Black</option>
          <option value="iphone8plus gold">Iphone 8 Plus Gold</option>
          <option value="iphone8plus silver">Iphone 8 Plus Silver</option>
          <option value="iphone8plus black">Iphone 8 plus Black</option>     
        </select>
        </form>
      </div>
    )
    }
    else{
    // getting the song id to PLAY from the state by filtering
    let copy = Array.from(this.state.song);
    let currentSong = copy.filter((element)=>{
        return (element.id === this.state.currentSongId);
    });

    let song = !!currentSong.length ? currentSong[0] : {path: '', name:''}
    let currentT = this.formatTime(this.state.currentTime);

    // if user presses next and previous fast then due to async values were showing NaN
    // for a split second so using if statement to remove that bug
    let durationT = (this.formatTime(this.state.duration) === "NaN:NaN")? "00:00" : this.formatTime(this.state.duration);

    // writting an if statement to change class of play pause button
    // to show only one at a time
    let playOrPause = (this.state.nowPlaying? "fas fa-pause-circle animated flipInY" : "fas fa-play-circle animated flip" );

    //Now using if statement to change the clickhandler of the button to correspond with 
    // the current button state (pause or play)
    let buttonHandler= (this.state.nowPlaying? this.pauseButton : this.playButton);

    return (
    <div className="overlay">
      <div className="animated slideInUp">
      <div>
        <button className="device-change-button" onClick={this.changeDevice}>Change Device Selection</button>
      </div>
        {/* Code from the developer who made the open source Note 8 Device frame for */}
      <div className={this.state.deviceClass}>
        <div class="notch">
            <div class="camera"></div>
            <div class="speaker"></div>
        </div>
        <div className="inner"></div>
        <div className="overflow">
            <div className="shadow"></div>
        </div>
        <div className="speaker"></div>
        <div className="sensors"></div>
        <div className="more-sensors"></div>
        <div className="sleep"></div>
        <div className="volume"></div>
        <div className="camera"></div>
        <div className="screen screen-container">
        
        {/* Inserting the code for the app in the screen section of the Device frame */}
          <div className="App">
            <div className= "container scrollable">
              <Switch>
                  <Route exact path="/" render={()=><SongsList songs={this.state.song} playSongById={this.playSongById}/>}/>
                  <Route path='/:songId'render={(props)=><SongDetails songs={this.state.song} match={props.match} playSongById={this.playSongById}/>}/>
              </Switch>
            </div>
            
        {/* The Media Player part of the app */}
            <nav class="navbar navbar-dark">
        {/* Song header */}
              <div className="wd-30">
                <h4 className="mt-2">{song.name}</h4>
              </div>
              <audio src={song.path} ref='myaudio'>
                    Your browser does not support the <code>audio</code> element.
              </audio>
        {/* Button tags and icons */}
              <div className="wd-30">
                <button onClick={this.previousButton}><i className="fas fa-fast-backward"></i></button>
                <button onClick={buttonHandler}><i className= {playOrPause}></i></button>
                <button onClick={this.nextButton}><i className="fas fa-fast-forward"></i></button>
              </div>

              <div className="wd-30">
              <h4 className="mt-2"> {currentT} / {durationT} </h4>
              </div>

            </nav>
          </div>
        </div>
        <Link to="/"><div class="home"></div></Link>
        <div class="bottom-bar"></div>
      </div>
      </div>
      <Copyright />
    </div>
    );
  }
}
}
