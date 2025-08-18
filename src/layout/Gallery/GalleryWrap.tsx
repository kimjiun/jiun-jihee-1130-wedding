import styled from '@emotion/styled';
import PhotoGallery from './PhotoGallery.tsx';

const GalleryWrap = () => {
  return (
    <ContentsWrap>
      <PhotoGallery />
    </ContentsWrap>
  );
};

export default GalleryWrap;

const ContentsWrap = styled.div`
  width: 80vw;
  margin: 10px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
