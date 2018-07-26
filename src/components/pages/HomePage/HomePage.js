import React from 'react';
import {PageTemplate, Header} from '../../../components';
const HomePage = () => {
  return (
    <div>
      <PageTemplate 
        header={<Header/>}
        responsive
        >
        Home
      </PageTemplate>
    </div>
  )
}

export default HomePage;
