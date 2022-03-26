import React from 'react';

export const headingLevels = [1, 2, 3, 4, 5, 6] as const;
export type HeadingLevels = typeof headingLevels[number];

export type Props = {
    children: string
    level?: HeadingLevels
}

const Heading = ({ children, level = 1 }: Props) => {

    const Component: React.ElementType = `h${level}` || 'h1';

    return <Component>{children}</Component>
}


export default Heading;