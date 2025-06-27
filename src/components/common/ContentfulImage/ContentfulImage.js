import Image from 'next/image';
import '@src/components/common/ContentfulImage/ContentfulImage.scss';

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
