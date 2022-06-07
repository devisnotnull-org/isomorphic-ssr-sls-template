import React, { FC } from 'react';

import { IHomeComponentProps } from './home.state';

import homeStyles from './home.css';

export const HomeView: FC<IHomeComponentProps> = () => {
  return (
    <>
      <div className={homeStyles['Content']}>
        <header>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png?20220125121207"} className={homeStyles['Image']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};

export default HomeView;
