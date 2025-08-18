import styled from '@emotion/styled';
import data from 'data.json';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, PointTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  const addressPart = mapInfo.address2.split('📞');

  return (
    <LocationWrapper>
      <PointTitle>{mapInfo.address1}</PointTitle>
      <Caption textAlign={'center'}>{addressPart[0]}📞 <a href="tel:02-3673-5000">{addressPart[1]}</a></Caption>
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
