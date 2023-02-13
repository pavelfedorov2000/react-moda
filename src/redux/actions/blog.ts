import axios from "axios";
import { Dispatch } from "redux";
import { Pages } from "../../enums/Page";
import { ActionType } from "../actionsList";
import { BlogAction } from "../types/blog";

export const fetchBlog = () => {
    return async (dispatch: Dispatch<BlogAction>) => {
        try {
            dispatch({ type: ActionType.FetchBlog });
            const response = await axios.get(Pages.Blog.path);
            dispatch({
                type: ActionType.FetchBlogSuccess,
                payload: response.data,
            });
        } catch {
            dispatch({
                type: ActionType.FetchBlogError,
                payload: 'Something went wrong',
            });
        }
    };
};