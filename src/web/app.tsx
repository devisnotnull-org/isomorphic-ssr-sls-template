import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HeaderViewContainer from './containers/header/header';
import HomeViewContainer from './containers/home/home';
import NotFoundComponent from './containers/notFound/notFound';

import styles from './style/common.css';

interface StateProps {}
interface ActionProps {}
interface SelectorProps {}

type Props = StateProps & ActionProps & SelectorProps;

export const AppRouter: React.FC<Props> = () => {
  return (
    <>
      <Helmet>
        <title>Sample title</title>
        <meta name="description" content={"Description"} />
        <meta name="og:title" property="og:title" content={"Title"} />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Helmet>
      <HeaderViewContainer />
      <div className={styles['Container']}>
        <Switch>
          <Route exact path="/" component={HomeViewContainer} />
          <Route component={NotFoundComponent} />
        </Switch>
      </div>
    </>
  );
};
export default AppRouter;
