/* eslint-disable react/function-component-definition */
import React, { FunctionComponent } from 'react';
import { Category } from '../type';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className =
    'capitalize cursor-pointer hover:text-cyan-light dark:hover:text-cyan-dark';
  if (active === value) className += ' text-cyan-light dark:text-cyan-dark';

  return (
    <li
      className={className}
      onClick={() => handlerFilterCategory(value)}
      onKeyPress={() => handlerFilterCategory(value)}
      role="option"
      aria-selected="false"
    >
      {value}
    </li>
  );
};
const ProjectsNavBar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="solicity" {...props} />
      <NavItem value="all" {...props} />
    </div>
  );
};

export default ProjectsNavBar;
