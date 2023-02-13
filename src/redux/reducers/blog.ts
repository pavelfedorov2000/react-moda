import { ActionType } from "../actionsList";
import { BlogAction, BlogState } from "../types/blog";

const initialState = {
    items: [],
    loading: false,
    error: undefined,
}

const blogReducer = (state = initialState, action: BlogAction): BlogState => {
    switch (action.type) {
        case ActionType.FetchBlog: {
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        }
        case ActionType.FetchBlogSuccess: {
            return {
                loading: false,
                error: undefined,
                items: action.payload
            };
        }
        case ActionType.FetchBlogError: {
            return {
                loading: false,
                error: action.payload,
                items: []
            };
        }
        default: {
            return state;
        }
    }
};

export default blogReducer;