
const baseURL = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=383cacd3fef5e7067617b4db4cc07df0&format=json";

console.log(baseURL);

const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      method,
      url,
      true
    );

    xhr.responseType = 'json';

    xhr.onload = () => {
      resolve(xhr.response);
    };

    xhr.send();

    // xhr.onreadystatechange = function () {
    //   if (xhr.readyState !== 4) {
    //     return
    //   }

    //   if (xhr.status === 200) {
    //     let res = xhr.response;
    //     // dataAPI(res)


    //     // console.log(xhr)
    //     console.log(res)
    //     // console.log(res.tracks.track.map(t => console.log(t.artist.name)));
    //   } else {
    //     console.log('err', xhr.responseText)
    //   }
    // }
  });
  return promise;
};

export const getDataOfTopTracks = {
  dataAPI() {
    return sendHttpRequest("GET", 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=383cacd3fef5e7067617b4db4cc07df0&format=json')
      .then(responseData => responseData)
  }
};

export const getDataOfArtist = {
  dataAPI(userName) {
    return sendHttpRequest("GET", `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${userName}&api_key=383cacd3fef5e7067617b4db4cc07df0&format=json`)
      .then(responseData => responseData)
  }
};

export const getTrackSearch = {
  dataAPI(trackName) {
    return sendHttpRequest("GET", `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${trackName}&api_key=383cacd3fef5e7067617b4db4cc07df0&format=json`)
      .then(responseData => responseData)
  }
};
