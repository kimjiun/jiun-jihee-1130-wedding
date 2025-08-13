import data from 'data.json';

const portaraitWidth = 683;
const portaraitHeight = 1024;
const landScapeWidth = 1023;
const landScapeHeight = 683;

const images = [
  /* 이미지 경로를 리스트로 저장 */
  {
    alt: 'image02',
    source: `${data.bucketUrl}02.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image03',
    source: `${data.bucketUrl}03.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image04',
    source: `${data.bucketUrl}04.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image05',
    source: `${data.bucketUrl}05.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image06',
    source: `${data.bucketUrl}06.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image07',
    source: `${data.bucketUrl}07.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image08',
    source: `${data.bucketUrl}08.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image09',
    source: `${data.bucketUrl}09.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image10',
    source: `${data.bucketUrl}10.jpg`,
    width: landScapeWidth,
    height: landScapeHeight,
  },
  {
    alt: 'image11',
    source: `${data.bucketUrl}11.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image12',
    source: `${data.bucketUrl}12.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image13',
    source: `${data.bucketUrl}13.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image14',
    source: `${data.bucketUrl}14.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
  {
    alt: 'image15',
    source: `${data.bucketUrl}15.jpg`,
    width: portaraitWidth,
    height: portaraitHeight,
  },
];

export default images;
