import React from "react"
import ContentLoader from "react-content-loader"

const CatalogueLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={334}
    height={551}
    viewBox="0 0 334 551"
    backgroundColor="#f7f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="0" rx="0" ry="0" width="333" height="14" /> 
    <rect x="7" y="0" rx="0" ry="0" width="333" height="14" /> 
    <rect x="325" y="0" rx="0" ry="0" width="14" height="550" /> 
    <rect x="5" y="0" rx="0" ry="0" width="14" height="550" /> 
    <rect x="3" y="544" rx="0" ry="0" width="333" height="14" /> 
    <rect x="27" y="50" rx="0" ry="0" width="283" height="188" /> 
    <rect x="116" y="270" rx="0" ry="0" width="100" height="23" /> 
    <rect x="47" y="0" rx="0" ry="0" width="70" height="15" /> 
    <rect x="35" y="308" rx="0" ry="0" width="272" height="17" /> 
    <rect x="29" y="355" rx="0" ry="0" width="283" height="60" /> 
    <rect x="30" y="441" rx="0" ry="0" width="283" height="13" /> 
    <rect x="86" y="475" rx="0" ry="0" width="45" height="45" /> 
    <rect x="203" y="473" rx="0" ry="0" width="45" height="45" />
  </ContentLoader>
);

export default CatalogueLoader