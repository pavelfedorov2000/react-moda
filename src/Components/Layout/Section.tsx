import classNames from "classnames";
import { WithChildren, WithClassName } from "../../types/types";
import { Title } from "../../ui";
import { TitleLevel } from "../../enums/TitleLevel";
import AllLink from "../AllLink";
import Container from "./Container";

const mainClass = 'section';

interface Props {
    title?: string;
    isSlider?: boolean;
    link?: string;
}

const Section = ({ className, isSlider, title, link, children }: Props & WithClassName & WithChildren) => {
    return (
        <section className={classNames(mainClass, className)}>
            <Container>
                {!isSlider &&
                    <div className={`${mainClass}__top`}>
                        {title && <Title tag={TitleLevel.H2}>{title}</Title>}
                        {link && <AllLink url={link} />}
                    </div>
                }
                {children}
            </Container>
        </section>
    );
};

export default Section;