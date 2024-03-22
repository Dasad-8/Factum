import React from "react"
import ContentLoader from "react-content-loader"

const FormLoader = (props) => (
<ContentLoader 
    speed={2}
    width={950}
    height={375}
    viewBox="0 0 950 375"
    backgroundColor="#dedede"
    foregroundColor="#a8a8a8"
    {...props}
  >
    <rect x="91" y="45" rx="0" ry="0" width="767" height="30" /> 
    <rect x="91" y="95" rx="0" ry="0" width="510" height="20" /> 
    <rect x="249" y="165" rx="5" ry="5" width="450" height="50" /> 
    <rect x="353" y="248" rx="5" ry="5" width="243" height="64" />
  </ContentLoader>
);

export default FormLoader;