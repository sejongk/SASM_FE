import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeartImg from "../../assets/img/Filledlike.png";
import EmptyHeartImg from "../../assets/img/Like.png";

const Heart = styled.img`
    // css
    }
    width:30px;
    height:30px;
    
`;

const HeartButton = ({ like, onClick }) => {
  return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;
};

export default HeartButton;