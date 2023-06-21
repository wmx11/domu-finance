import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const Heading: FC<PropsWithChildren & HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
}) => {
  return (
    <h1 className={twMerge('text-5xl md:text-6xl font-bold mb-8', className)}>{children}</h1>
  );
};

export default Heading;
