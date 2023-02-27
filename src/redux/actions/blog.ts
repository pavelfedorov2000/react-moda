import axios from "axios";
import { Dispatch } from "redux";
import { database } from "../../constants/db";
import { ActionType } from "../actionsList";
import { BlogAction } from "../types/blog";

export const fetchBlog = () => {
    return async (dispatch: Dispatch<BlogAction>) => {
        try {
            dispatch({ type: ActionType.FetchBlog });
            const response = await axios.get(database);
            dispatch({
                type: ActionType.FetchBlogSuccess,
                payload: response.data.blog,
            });
        } catch {
            dispatch({
                type: ActionType.FetchBlogError,
                payload: 'Something went wrong',
            });
        }
    };
};