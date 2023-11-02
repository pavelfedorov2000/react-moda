import { TitleLevel } from "../../enums/TitleLevel";
import { Page } from "../../interfaces/Route";
import { Title } from "../../ui";

const PageTop = ({ title }: Page) => {
    return (
        <div className="page-top">
            <Title tag={TitleLevel.H1}>{title}</Title>
        </div>
    );
};

export default PageTop;