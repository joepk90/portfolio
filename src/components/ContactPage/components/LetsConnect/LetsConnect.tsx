import '@components/ContactPage/components/LetsConnect/LetsConnect.scss';

import { Heading, List, Panel, Typography } from '@components/common';
import { FC, ReactNode } from 'react';

/**
 * LetsConnect Component
 *
 * Dumb component built specifically for the Contact Page.
 * Could be worth trying to recreate this component using reusable style options from
 * other components (Heading/Typography)
 *
 */

type LetsConnectProps = {
  contactListItems: ReactNode[];
};

export const LetsConnect: FC<LetsConnectProps> = ({ contactListItems }) => {
  return (
    <div className="lets-connect">
      <div className="lets-connect__header">
        <Heading className="lets-connect__heading">{`Let's connect!`}</Heading>
        <Typography variant="heading4" className="lets-connect__sub-heading">
          Have a project in mind? Or just want to say hello?
        </Typography>
      </div>

      <Panel>
        <List listItems={contactListItems} />
      </Panel>
    </div>
  );
};
