interface Props {
    discount: number;
    list: string[];
}

const PersonalDiscount = ({ discount, list }: Props) => {
    return (
        <div className="personal-discout">
            <div className="personal-discout__title">{`Ваша персональная скидка - ${discount}%`}</div>
            <ul className="personal-discout__list">
                {list.map((item, i) => (
                    <li key={item.toString()}>{`- ${item}`}{i === list.length - 1 ? ';' : '.'}</li>
                ))}
            </ul>
        </div>
    );
};

export default PersonalDiscount;