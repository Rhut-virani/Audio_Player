import React, {Component} from 'react';
import Songs from './Songs';


class SongsList extends Component {
    render() {

        let copy = Array.from(this.props.songs);
        let mp3jsx = copy.map((element, i)=>{
            return (<Songs name={element.name} 
                           description={element.description} 
                           id ={element.id}
                           playSongById={this.props.playSongById} />)
        })
        return (
            <ul className="row card-deck animated fadeInRight">
                {mp3jsx}
            </ul>
        )
    }
}

export default SongsList;