interface Props {
    discount: number;
    list: string[];
}

const mainClass = 'personal-discout';

const PersonalDiscount = ({ discount, list }: Props) => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__title`}>
                {`Ваша персональная скидка - ${discount}%`}
            </div>
            <ul className={`${mainClass}__list`}>
                {list.map((item, index) => (
                    <li key={index}>{`- ${item}`}{index === list.length - 1 ? ';' : '.'}</li>
                ))}
            </ul>
        </div>
    );
};

export default PersonalDiscount;