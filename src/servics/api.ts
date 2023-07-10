const baseUrl = "http://localhost:3000";

export const get = async (uri: string, init?: RequestInit) => {
  return fetch(`${baseUrl}${uri}`, init);
};

export const post = async (uri: string, data: any) => {
  return fetch(`${baseUrl}${uri}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
