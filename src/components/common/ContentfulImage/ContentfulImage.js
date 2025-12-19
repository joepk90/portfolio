import '@src/components/common/ContentfulImage/ContentfulImage.scss';

import Image from 'next/image';

// TODO setup <picture><source> setup
export const ContentfulImageAlias = ({ image, width, height }) => (
  <div className="contentful-image">
    <Image
      src={'https:' + image.fields.file.url}
      height={height}
      width={width}
      alt={image.fields.title}
    />
  </div>
);
