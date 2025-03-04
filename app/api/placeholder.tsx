import axios from "axios";

export const ApiPlaceholder = async (postID: string) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postID}`);
    return response.data;
}