import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background-color: #F1F3F5;
    padding: 50px 0;
    display: grid;
    grid-gap: 30px;
`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
`
const Button = styled.button`
    background: linear-gradient(102.24deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    font-size: 24px;
    font-weight: 600;
    color: white;
    padding: 16px 60px;
    justify-self: center;
    transition: .3s cubic-bezier(.2, .8, .2, 1);

    &:hover {
        box-shadow: 0 20px 40px rgba(0,0,0, 0.15);
        transform: translateY(-2px);
    }

`
const LinkGroup = styled.div`
     width: 500px;
     margin: 30px auto;
     display: grid;
     grid-template-columns: repeat(2, 1fr);
     grid-gap: 10px;
     justify-items: center;

     a {
         transition: .15s;
     }

    a:hover {
        color: #022C89;
    }

`
const Copyright = styled.div`
    width: 500px;
    margin: 50px auto;
    color: #486791;
    font-size: 16px;
    text-align: center;

`


const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>
        Create app flows and components. Express their properties and data linkage visually.
        </Text>
        <Button>Tweet</Button>
        <LinkGroup>
            {data.allContentfulLink.edges.map(edge => (
             <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
        
    </FooterGroup>
)

export default Footer 