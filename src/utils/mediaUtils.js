export const loadMedia = (path) => {
  return import.meta.env.VITE_MEDIA_URL + path;
};
export const loadServer = (path) => {
  return import.meta.env.VITE_BACKEND_URL + path;
};
export const loadApiToken = () => {
  return import.meta.env.VITE_API_TOKEN;
};
