import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';
import { useEffect, useRef } from 'react';
import PhotoSwipe from 'photoswipe';

const PhotoGallery = () => {
  const smallItemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'contain',
    width: '90px',
    height: '135px',
  };
  const photoswipeRef = useRef<PhotoSwipe | null>(null);

  useEffect(() => {
    const onPopState = () => {
      if (photoswipeRef.current && photoswipeRef.current.isOpen) {
        photoswipeRef.current.close();
      }
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  const handleBeforeOpen = (pswp: PhotoSwipe) => {
    photoswipeRef.current = pswp;

    pswp.on('afterInit', () => {
      window.history.pushState({ photoswipe: true }, '');
    });

    pswp.on('close', () => {
      if (window.history.state?.photoswipe) {
        window.history.back();
      }
    });
  };

  return (
    <Gallery withCaption onBeforeOpen={handleBeforeOpen}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 0fr)',
          gridGap: 2,
        }}>
        {images.map((image, index) => {
          return (
            <Item
              key={index}
              cropped
              original={image.source}
              thumbnail={image.source}
              width={image.width}
              height={image.height}>
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  alt={image.alt}
                  src={image.source}
                  ref={ref as React.MutableRefObject<HTMLImageElement>}
                  onClick={open}
                />
              )}
            </Item>
          );
        })}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
