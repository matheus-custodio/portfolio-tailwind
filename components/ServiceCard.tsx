/* eslint-disable react/function-component-definition */
import React, { FunctionComponent } from 'react';
import { IService } from '../type';

const NavItem: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4">
      <Icon className="w-12 h-12 text-pink-default" />
      <div>
        <h4 className="font-bold">{title}</h4>
        <h4 dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default NavItem;
