import React from 'react';
import { Helmet } from 'react-helmet';

function HelmetComponent(props) {
  return (    
    <Helmet>
      <title>{ props.title } | PERSPECT CLOUD</title>
    </Helmet>
  );
}

export default HelmetComponent;