import axios from "axios";

let baseURL =
  "https://us-central1-mbtcandidate.cloudfunctions.net/posts/skushner";

export default axios.create({
  baseURL: baseURL,
});
