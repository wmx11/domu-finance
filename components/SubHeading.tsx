import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const SubHeading: FC<
  PropsWithChildren & HTMLAttributes<HTMLHeadingElement>
> = ({ children, className }) => {
  return <h2 className={twMerge('text-3xl', className)}>{children}</h2>;
};

export default SubHeading;
