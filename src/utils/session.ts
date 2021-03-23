export default {
  save: (key: string, data: object) => {
    sessionStorage.setItem(
      key,
      JSON.stringify({
        ...JSON.parse(sessionStorage.getItem(key) || 'null'),
        ...data,
      }),
    );
  },
  read: (key: string) => {
    return JSON.parse(sessionStorage.getItem(key) || 'null');
  },
  remove: (key: string) => {
    sessionStorage.removeItem(key);
  },};
