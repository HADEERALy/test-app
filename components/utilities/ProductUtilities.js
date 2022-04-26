import {ENDPOINTS} from '../../api/EndPoints';
import {Network} from '../../api/Network';

export default class Products {
  static getPosts() {
    return Network.fetch(
      ENDPOINTS.posts.url,
      {
        method: ENDPOINTS.posts.method,
      },
      true,
    );
  }
  static PostByID(id) {
    return Network.fetch(
      ENDPOINTS.PostByID.url(id),
      {
        method: ENDPOINTS.PostByID.method,
      },
      true,
    );
  }
}
