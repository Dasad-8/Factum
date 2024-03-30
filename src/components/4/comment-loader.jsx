import React from 'react';
import ContentLoader from 'react-content-loader';

const CommentLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={396}
    height={332}
    viewBox="0 0 396 332"
    backgroundColor="#dbdbdb"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="198" cy="16" r="41" /> 
    <rect x="50" y="91" rx="0" ry="0" width="135" height="22" /> 
    <rect x="50" y="128" rx="0" ry="0" width="295" height="22" /> 
    <rect x="50" y="160" rx="0" ry="0" width="295" height="110" />
  </ContentLoader>
)

export default CommentLoader;
