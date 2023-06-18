import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

const Section: FC<PropsWithChildren & HTMLAttributes<HTMLBaseElement>> = ({
  children,
  className,
  id,
}) => {
  return (
    <section className={twMerge('py-12', className)} id={id}>
      {children}
    </section>
  );
};

export default Section;
