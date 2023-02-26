import { Page } from "../../interfaces/Route";

const PageTop = ({ title }: Page) => {
    return (
        <div className="page-top">
            <h1 className="title">{title}</h1>
        </div>
    );
};

export default PageTop;