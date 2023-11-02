import FormAgree from "./FormAgree";
import FormRow from "./FormRow";

const SubscribeForm = ({ withoutAgree }: { withoutAgree?: boolean; }) => {
    return (
        <form className="subscirbe-form">
            <FormRow actionText="Подписаться на рассылку" placeholder="Введите ваш Email" />
            {!withoutAgree && <FormAgree />}
        </form>
    );
};

export default SubscribeForm;