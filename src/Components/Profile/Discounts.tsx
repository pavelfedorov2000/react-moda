import { useState, useEffect } from 'react';
import { SubPages } from '../../enums/Page';
import axios from 'axios';
import DiscountsProgress from '../Discounts/DiscountsProgress';
import { Discount } from '../../interfaces/Discount';
import PersonalDiscount from '../Discounts/PersonalDiscount';
import DiscountAdd from '../Discounts/DiscountAdd';

const Discounts = () => {
    const [discounts, setDiscounts] = useState<Discount>({
        list: [],
        info: {
            items: []
        },
        personalDiscount: 0,
        addPercent: 0
    });
    useEffect(() => {
        axios.get<Discount>(SubPages.Discounts.path).then(({ data }) => {
            setDiscounts(data);
        });
    }, []);

    const { info, personalDiscount, addPercent } = discounts;

    return (
        <>
            <DiscountsProgress discounts={discounts.list} discount={personalDiscount} />

            <PersonalDiscount list={info.items} discount={personalDiscount} />

            <DiscountAdd percent={addPercent} />
        </>
    );
}

export default Discounts;