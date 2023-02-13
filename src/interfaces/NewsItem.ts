import { BlogItem } from "./BlogItem";

export interface NewsDetailsListItem {
    title: string;
    text: string;
}

export interface NewsItem extends BlogItem {
    list: NewsDetailsListItem[]
}