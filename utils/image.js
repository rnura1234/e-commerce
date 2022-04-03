import client from './client';
import imageUrlBuilder from '@sanity/image-url';

const urlForThambnail = (source) => {
  return imageUrlBuilder(client).image(source).width(300).url();
  // return imageUrlBuilder(client).image(source).width(300).url()
};
export default urlForThambnail;
