import axious from "axios";

const url = "http://localhost:5000/posts"; 

export const fetchPosts = () => axious.get(url);
export const createPost = (newPost) => axious.post(url, newPost);