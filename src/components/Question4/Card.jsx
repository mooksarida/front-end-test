import React from "react";
import Button from './Button';
import Box from './Box';
import userImage from '../../assets/user.png';
import './Card.scss';

const Card = ({ information }) => {
    return (
        <div className="card-wrap">
            <div className="left-section">
                <img src={userImage} width="100" height="100" />
                <div className="info-wrap">
                    <div className="title">{information.name}</div>
                    <div className="sub-tile">{information.position}</div>
                </div>
                <div className="button-wrap">
                    <Button buttonMessage="Follow" />
                    <Button buttonMessage="Message" />
                </div>
            </div>
            <div className="right-section">
                <Box boxTitile="Posts" boxValue={information.posts} />
                <Box boxTitile="Follows" boxValue={information.follows} />
                <Box boxTitile="likes" boxValue={information.likes} />
            </div>
        </div>
    )
}

export default Card;