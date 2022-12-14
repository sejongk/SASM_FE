import React from 'react'
import styled from 'styled-components';

const RecommendText = styled.div`
    margin-top: 5%;
    display: flex;
    justify-content: center;
`
const RecommendList = styled.div`
    border-bottom:1px black solid;
    padding:3px;
    padding-left:10px;
    width:70%;
    margin:10px auto;
    display: flex;
`
const Title = styled.div`
    // float: left;
    cursor: pointer;
`
const Date = styled.div`
    margin-left: auto;
`
const goToRecommendStory = (id) => {
    window.location.href = `/story/${id}`
};

export default function Recommends(props) {
    const data = props.data.results;
    console.log('data', data);
    return (
        <div>
            <RecommendText>
                <div style={{ color: "#44ADF7" }}>{data[0].category}</div>
                <div>&nbsp;카테고리의 다른 글도 확인해보세요</div>
            </RecommendText>
            <br></br><br></br>
            {data.map((it) => (
                <RecommendList>
                    <Title onClick={(e) => { goToRecommendStory(it.id) }}>{it.title}</Title>
                    <Date>{it.created.slice(0, 10)}</Date>
                </RecommendList>
            ))}
            <br></br><br></br>
        </div>
    )
}