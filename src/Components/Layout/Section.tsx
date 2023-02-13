import classNames from "classnames";
import { ReactNode } from "react";

interface Props {
    className?: string;
    title: string;
    content: ReactNode;
}

const Section = ({ className, title, content }: Props) => {
    return (
        <section className={classNames('section', className)}>
            <div className="section__top">
                <h2 className="title">{title}</h2>
            </div>
            {content}
        </section>
    );
};

export default Section;