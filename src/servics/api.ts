const baseUrl = "http://localhost:3000";

export const get = async (uri: string) => {
  return fetch(`${baseUrl}${uri}`, { next: { revalidate: 10 } });
};
