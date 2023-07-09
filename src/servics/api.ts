const baseUrl = "http://localhost:3000";

export const get = async (uri: string) => {
  return fetch(`${baseUrl}${uri}`, { next: { revalidate: 10 } });
};

export const post = async (uri: string, data: any) => {
  return fetch(`${baseUrl}${uri}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
