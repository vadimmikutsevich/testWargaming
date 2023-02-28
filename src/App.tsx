import React, { Fragment } from 'react';
import GlobalStyles from './styles/globalStyles';

import MainLayout from './modules/MainLayout';

function App() {
  return (
      <Fragment>
        <MainLayout />

        <GlobalStyles />
      </Fragment>
  );
}

export default App;