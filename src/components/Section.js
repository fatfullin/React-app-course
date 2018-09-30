import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.div`
    ${'' /* margin: 100px 0 0; */}
    background: url(${props => props.image});
    background-size: cover;
    height: 720px;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
 
    @media (max-width: 640px) {
        height: 820px;
    }
`

const SectionLogo = styled.img`
    align-self: end;
    width: 128px;
    margin: 0 auto;
`
const SectionTitleGroup = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 0 40px;
    grid-gap: 20px;
    grid-template-rows: auto 100%;

    @media (max-width: 720px) {
        grid-template-columns: 1fr;
    }
`
const SectionTitle = styled.h3`
    color: white;
    font-size: 60px;
    line-height: 1.2;
    margin: 0;

    @media (max-width: 720px) {
        font-size: 40px;
    }

`
const SectionText = styled.p`
    font-size: 18px !important;
`
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: 0px;
    transform: rotate(180deg);
`


const Section = props => (
  <SectionGroup image={props.image}>
    <WaveTop><Wave /></WaveTop>
    <SectionLogo src={props.logo} />
    <SectionTitleGroup>
        <SectionTitle>{props.title}</SectionTitle>
        <SectionText>{props.text}</SectionText>
    </SectionTitleGroup>
    <WaveBottom><Wave /></WaveBottom>
  </SectionGroup>
)

export default Section