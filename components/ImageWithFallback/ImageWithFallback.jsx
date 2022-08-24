import React, { useState } from 'react';
import Image from 'next/image';

const ImageWithFallback = (props) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    const myLoader = ({ src }) => {
        return imgSrc;
    }
    return (
        <Image
            {...rest}
            loader={myLoader}
            width="200px"
            height="200px"
            src={imgSrc}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export default ImageWithFallback
