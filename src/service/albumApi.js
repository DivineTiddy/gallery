

const apiKey = "1CmOFAU0ddD2A3tBfbJx0y0hTmQe8Ku1FZG2WJQl8Z92mtseiBmHqGCQ";
const url = "https://api.pexels.com/v1";
export async function GetAlbumByName() {


  const res = fetch(`${url}/search?query=car`, {
    method: "GET",
    headers: {
      Authorization: apiKey, // Add the API key in the Authorization header
    },
  });
  const data = (await res).json();
  return data;
}


