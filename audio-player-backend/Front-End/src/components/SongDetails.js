import React, {Component} from 'react';
import {Switch, Link, Route} from 'react-router-dom';


export default class SongDetails extends Component {
    render() {
        console.log(this.props.match.params.songId);
        let copy = Array.from(this.props.songs);
        let songDetailsArray = copy.filter((element)=>{
            return (element.name === this.props.match.params.songId);
        });
        console.log(songDetailsArray)
        let songDetails = !!songDetailsArray.length ? songDetailsArray[0] : {path: '', name:'', description:'', id:''}
        return (
            <div className="pt-5 animated fadeInLeft">
                <Link to="/" className="backarrow"><i class="fas fa-arrow-left"></i></Link>
                <h3 className="d-inline mr-5 details-h3">{songDetails.name}</h3>
                <button onClick={()=>{this.props.playSongById(songDetails.id)}}><i className="fas fa-play-circle"></i></button>
                <div className="shdo  mt-1">
                <p className="text-center">{songDetails.description}</p>
                </div>
            </div>
        )
    }
}