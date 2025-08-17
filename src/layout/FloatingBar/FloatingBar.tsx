import styled from '@emotion/styled';
import data from 'data.json';
import JSConfetti from 'js-confetti';
import Heart from '@/assets/icons/heart_plus.svg?react';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// For Android WebView Javascript Interface
declare global {
  interface Window {
    Android?: {
      share: (url: string) => void;
    };
  }
}

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

    // 1. Check for native Android interface (if in a WebView)
    if (window.Android?.share) {
      window.Android.share(url);
    }
    // 2. Check for standard Web Share API
    else if (navigator.share) {
      navigator
        .share({
          url: url,
        })
        .catch((error) => {
          console.error('Web Share API error:', error);
        });
    }
    // 3. Fallback to clipboard for desktop/unsupported browsers
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
