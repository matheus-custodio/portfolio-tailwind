/* eslint-disable react/function-component-definition */
import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a>
        <span
          className="mx-2 cursor-pointer hover:border-b-4 hover:text-cyan-light dark:hover:text-cyan-dark"
          onClick={() => setActive(name)}
          onKeyPress={() => setActive(name)}
          role="button"
          tabIndex={-1}
        >
          {name}
        </span>
      </a>
    </Link>
  ) : null;
};

export default NavItem;
