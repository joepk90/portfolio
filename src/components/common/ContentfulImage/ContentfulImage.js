import Image from 'next/image';

// TODO setup <picture><source> setup

export const ContentfulImageAlias = ({ image, width, height }) => (
    <picture>
        <Image 
            src={"https:" +image.fields.file.url}
            height={height}
            width={width}
            alt={image.fields.title}
        />
    </picture>
)