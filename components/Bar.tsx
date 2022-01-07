/* eslint-disable react/function-component-definition */
import React, { FunctionComponent } from 'react';
import { IService, ISkill } from '../type';

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, level, name },
}) => {
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-cyan-light to-purple-light dark:from-cyan-dark dark:to-purple-dark"
        style={{ width: level }}
      >
        <Icon className="mr-3" />
        {name}
      </div>
    </div>
  );
};

export default Bar;
