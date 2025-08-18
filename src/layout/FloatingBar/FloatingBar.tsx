import styled from '@emotion/styled';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import Heart from '@/assets/icons/heart_plus.svg?react';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { Kakao } = window;
const mobileType = navigator.userAgent.toLowerCase();
const toastOptions: ToastOptions = {
  position: "bottom-center",
  autoClose: 500,
  hideProgressBar: true,
}

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  const handleCopy = () => {
    const url = window.location.href;

    if (navigator.share) {
      navigator
        .share({
          url: url,
        })
        .catch((error) => {
          console.error('Web Share API error:', error);
        });
    }
    else if (Kakao.isInitialized()) { // 설치 여부 검사 필요
      Kakao.Share.sendDefault({
        objectType: 'text',
        text: '간단한 JavaScript SDK 샘플과 함께 카카오 플랫폼 서비스 개발을 시작해 보세요.',
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
        serverCallbackArgs: {
          key: 'value', // 사용자 정의 파라미터 설정
        },
      });
    }
    else {
      navigator.clipboard.writeText(url).then(
        () => {
          if(mobileType.indexOf('android') < 0) {
            toast("주소가 복사되었습니다.", toastOptions);
          }
        },
        () => {
          console.error("주소 복사에 실패했습니다.");
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
