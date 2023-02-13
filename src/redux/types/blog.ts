import { BlogItem } from "../../interfaces/BlogItem";
import { ActionType } from "../actionsList";

export interface BlogState {
    items?: BlogItem[];
    loading: boolean;
    error?: string;
}

interface FetchBlogAction {
    type: ActionType.FetchBlog;
}

interface FetchBlogSuccessAction {
    type: ActionType.FetchBlogSuccess;
    payload: BlogItem[]
}

interface FetchBlogErrorAction {
    type: ActionType.FetchBlogError;
    payload: string;
}

export type BlogAction =
    | FetchBlogAction
    | FetchBlogSuccessAction
    | FetchBlogErrorAction;