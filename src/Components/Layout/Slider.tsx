import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import classNames from "classnames";
import { SPLIDE_OPTIONS } from '../../constants/splide';
import { ReactNode, useCallback, useMemo } from 'react';
import { JsxElement } from 'typescript';
import { WithChildren, WithClassName } from '../../types/types';
import { ClassName } from '../../enums/ClassName';
import { Image, Title } from '../../ui';
import { TitleLevel } from '../../enums/TitleLevel';
import SliderArrows from '../SliderArrows';
import { fakeArray } from '../../utils/fakeArray';

interface Props {
    ariaLabel: string;
    sliderOptions?: {
        [key: string]: any;
    };
    replaceOptions?: {
        [key: string]: any;
    };
    slides?: any[];
    item?: any;
    slideWidth?: string;
    slidesCount?: number;
    isSliderSection?: boolean;
}

const Slider = ({ className, ariaLabel, sliderOptions, replaceOptions, slides, isSliderSection, slidesCount, item, slideWidth, children }: Props & WithClassName & WithChildren) => {
    const SlideComponent = item;

    const options = useMemo(() => {
        if (sliderOptions) return sliderOptions;
        
        if (replaceOptions) {
            return {
                ...SPLIDE_OPTIONS,
                ...replaceOptions
            }
        }

        return SPLIDE_OPTIONS;
    }, [sliderOptions, replaceOptions]);

    const getSlideContent = useCallback((slide: any) => {
        if (children) return children;

        if (item) return <SlideComponent {...slide} style={{ width: slideWidth }} />;

        return <a className="full-link" href="#">
            <Image src={slide.imageUrl} width={336} height={336} />
        </a>
    }, [children, item]);

    const splideSlides = useMemo(() => {
        if (slidesCount && ((slides && slides.length <= slidesCount) || slidesCount === 4)) {
            return fakeArray(4);
        }

        return slides;
        
    }, [slides, slidesCount]);

    return (
        <Splide className={className ?? ClassName.Section} hasTrack={false} aria-label={ariaLabel} options={options}>
            {isSliderSection &&
                <div className={`${className}__top`}>
                    {<Title tag={TitleLevel.H2}>{ariaLabel}</Title>}
                    <SliderArrows />
                </div>
            }
            <SplideTrack>
                {splideSlides?.map((slide, index) => (
                    <SplideSlide key={slide.id ?? index}>
                        {getSlideContent(slide)}
                    </SplideSlide>
                ))}
            </SplideTrack>
        </Splide>
    );
};

export default Slider;

//