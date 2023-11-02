const mainClass = 'discount-add';

const DiscountAdd = ({ percent }: { percent: number; }) => {
    return (
        <div className={mainClass}>
            <div className={`${mainClass}__title`}>
                Сегодня мы добавили к вашей скидке:
            </div>
            <div className={`${mainClass}__value`}>
                <span className="label discount-add__label label--discount">{percent}%</span>
                <span>На новые коллекции</span>
            </div>
        </div>
    );
};

export default DiscountAdd;