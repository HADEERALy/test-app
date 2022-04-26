export class Network {
  constructor() {
    this.jwt = '';
  }

  static async fetch(url, init, addAuth) {
    // const jwt2=null;
    // this.jwt = await AsyncStorage.getItem("token");
    // console.log(url, init, this.jwt);

    const response = await fetch(url, {
      mode: 'cors',
      ...init,
      headers: Network.getHeaders(init.headers, addAuth),
    });
    let promise;

    if (response.status !== 200 && response.status !== 201) {
      promise = Network.handleErrorsBasedOnStatus(response);
    } else {
      promise = response.json();
    }
    return promise;
  }

  static getHeaders(originalHeaders, addAuth) {
    let headers = {
      'content-type': 'application/json',
      accept: 'application/json',
    };

    // if (addAuth) {
    //   headers.Authorization = `token ${this.jwt}`;
    // }

    headers = {
      ...headers,
      ...originalHeaders,
    };
    return headers;
  }

  static handleErrorsBasedOnStatus(response) {
    let promise;

    switch (response.status) {
      case 400:
        promise = response.json().then((res) => {
          return Promise.reject(res);
        });

        break;
      case 422:
        promise = response.json().then((res) => {
          return Promise.reject(res);
        });
        break;
      case 429:
        promise = Promise.reject(reason);
        break;
      case 401:
      case 403:
        promise = response.json().then((res) => {
          return Promise.reject(res);
        });

        break;
      default:
        promise = response.json().then((res) => {
          return Promise.reject(res);
        });
    }

    return promise.catch((error) => {
      return Promise.reject(error);
    });
  }
}
