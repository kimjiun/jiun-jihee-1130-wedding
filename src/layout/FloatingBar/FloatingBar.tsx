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

const copyLink = (url: string) => {
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
    else if (Kakao.isInitialized()) {
      copyLink(url);
      Kakao.Share.sendCustom({
        templateId: 123487,
        templateArgs: {
          TITLE: document.title,
          PATH: window.location.pathname,
        }
      });
    }
    else {
      copyLink(url);
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
