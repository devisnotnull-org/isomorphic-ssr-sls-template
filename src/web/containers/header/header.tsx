import React, { FC, useState } from 'react';
import classnames from 'classnames';

import { Link } from '@components/link/link';
import { IHeaderProps } from './header.state';

import styles from './header.css';

export const HeaderView: FC<IHeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={classnames(styles['Header'])}>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={classnames(
          styles['MenuToggle'],
          menuOpen ? styles['MenuToggle--Open'] : styles['MenuToggle--Closed']
        )}
      >
        <span className={classnames(styles['MenuToggle--Line'])}></span>
        <span className={classnames(styles['MenuToggle--Line'])}></span>
        <span className={classnames(styles['MenuToggle--Line'])}></span>
      </div>

      <ul
        className={classnames(
          styles['Menu'],
          menuOpen ? styles['Menu--Open'] : styles['Menu--Closed']
        )}
      >
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link
            to={'https://github.com/devisnotnull'}
            onClick={() => setMenuOpen(false)}
          >
            Github
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link
            to={'https://uk.linkedin.com/in/alexbrown201'}
            onClick={() => setMenuOpen(false)}
          >
            Linkedin
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link
            to={'https://medium.com/@alexbrown201'}
            onClick={() => setMenuOpen(false)}
          >
            Medium
          </Link>
        </li>
        <li className={classnames(styles['Link'], styles['Link--left'])}>
          <Link
            to={'https://github.com/devisnotnull-org/isomorphic-ssr-sls-template'}
            onClick={() => setMenuOpen(false)}
          >
            Source code
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderView;
