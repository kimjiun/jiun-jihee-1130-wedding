import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import Button from '@/components/Button.tsx';
import { Caption, LocationPointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;

  return (
    <LocationWrapper>
      <LocationPointTitle>{mapInfo.address1}</LocationPointTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <PhoneButtonWrapper>
        <Button onClick={() => location.href = "tel:02-3673-5000"}>{mapInfo.phone}</Button>
      </PhoneButtonWrapper>
      <Map />
      <MapButtons />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const PhoneButtonWrapper = styled.div`
  margin: 0px 0px 16px 0px;
  display: flex;
  gap: 8px;
  justify-content: center;
`;