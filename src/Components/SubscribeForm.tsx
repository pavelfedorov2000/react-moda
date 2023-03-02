import FormAgree from "./FormAgree";
import FormRow from "./FormRow";

const SubscribeForm = () => {
    return (
        <form className="subscirbe-form">
            <FormRow actionText="Подписаться на рассылку" placeholder="Введите ваш Email" />
            <FormAgree />
        </form>
    );
};

export default SubscribeForm;