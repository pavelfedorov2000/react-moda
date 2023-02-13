interface Props {
    percent: number;
}

const DiscountAdd = ({ percent }: Props) => {
    return (
        <div className="discount-add">
            <div className="discount-add__title">
                Сегодня мы добавили к вашей скидке:
            </div>
            <div className="discount-add__value">
                <span className="label discount-add__label label--discount">{percent}%</span>
                <span>На новые коллекции</span>
            </div>
        </div>
    );
};

export default DiscountAdd;