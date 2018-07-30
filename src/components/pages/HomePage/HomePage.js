import React from 'react';
import { PageTemplate, PolyBackground, Block } from 'components';
import {HeaderContainer} from 'containers';

const HomePage = () => {
  return (
    <PageTemplate 
      header={<HeaderContainer/>}>
      <PolyBackground>
        <Block center shadow>
          <h1>
            Please try to exchange variable BitCoin
          </h1>
          <h2>
            It is based on real time date.
          </h2>
        </Block>
      </PolyBackground>
    </PageTemplate>
  );
};

export default HomePage;