import React from 'react';
import {Switch, Link, Route} from 'react-router-dom';

export default class Songs extends React.Component {
    render() {
        let linkUrl = '/' + this.props.name;
        return (
            <li className="col-6 text-white bg-dark">
                <div className="col-12">
                <button onClick={()=>{this.props.playSongById(this.props.id)}}><i className="fas fa-play-circle"></i>
                </button>
                <Link to={linkUrl}><h3 className="d-inline">{this.props.name}</h3></Link>
                {/* <div className="card-body">
                <p className="card-text">{this.props.description}</p>
                </div> */}
                </div>
            </li>
        )
    }
}