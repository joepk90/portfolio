import '@components/ContactPage/components/ViewCV/ViewCV.scss';

import { Button, Heading, Link, Typography } from '@components';
import { FC } from 'react';

/**
 * ViewCV Component
 *
 * Dumb component built specifically for the Contact Page.
 * Could be worth trying to recreate this component using reusable style options from
 * other components (Button/Typography)
 *
 */

type ViewCVProps = {
  cvLink: string;
};

export const ViewCV: FC<ViewCVProps> = ({ cvLink }) => {
  return (
    <div className="view-cv">
      <div className="view-cv__button-wrapper">
        <Link target="_blank" href={cvLink} title="">
          <Button>
            <Typography variant="heading2">View CV</Typography>
          </Button>
        </Link>
      </div>

      <Heading className="view-cv__heading">{`See My CV.`}</Heading>
    </div>
  );
};
