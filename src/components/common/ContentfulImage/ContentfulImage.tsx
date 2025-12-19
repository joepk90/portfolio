import '@components/common/ContentfulImage/ContentfulImage.scss';

import Image from 'next/image';

export type ContentfulImageProps = {
  fields: {
    title: string;
    file: {
      url: string;
    };
  };
};

export type ContentfulImageAliasProps = {
  image: ContentfulImageProps;
  width: number;
  height: number;
};

// TODO setup <picture><source> setup
export const ContentfulImageAlias = ({ image, width, height }: ContentfulImageAliasProps) => {
  return (
    <div className="contentful-image">
      <Image
        src={'https:' + image.fields.file.url}
        height={height}
        width={width}
        alt={image.fields.title}
      />
    </div>
  );
};
