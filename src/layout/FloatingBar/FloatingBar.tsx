import styled from '@emotion/styled';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import Heart from '@/assets/icons/heart_plus.svg?react';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  const handleCopy = () => {
    if (navigator.share) {
      navigator.share({
          title: '모바일 청첩장',
          text: '청첩장을 공유합니다.',
          url: window.location.href,
        }).catch(console.error);
    } else {      
      navigator.clipboard.writeText(window.location.href).then(
        () => {
          console.log('주소가 복사되었습니다.😉😉');
        },
        () => {
          console.log('주소 복사에 실패했습니다.🥲🥲');
        },
      );  
    }
  };

  const handleCount = () => {
    void jsConfetti.addConfetti({ emojis });
  };

  const jsConfetti = new JSConfetti();
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isVisible={isVisible}>
      <Button onClick={handleCount}>
        <Heart fill="#e88ca6" />
        {/*{count || ''}*/}
      </Button>
      <Button onClick={handleCopy}>
        <Share fill="#e88ca6" />
        링크 공유
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill="#e88ca6" />
        위로
      </Button>
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav<{ isVisible: boolean }>`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;
