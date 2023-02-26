interface Props {
    visible: boolean;
    onClick: () => void;
}

const TogglePassword = ({ visible, onClick }: Props) => {
    return (
        <button onClick={onClick} className="password-button" type="button">
            {visible ?
                <svg className="icon icon--size_m" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M22.4132 11.6867C20.1665 7.53335 16.2265 5.02002 11.8665 5.02002C7.50648 5.02002 3.55982 7.53335 1.33315 11.6867L1.14648 12L1.31982 12.32C3.56648 16.4734 7.50648 18.9867 11.8665 18.9867C16.2265 18.9867 20.1732 16.5067 22.4132 12.32L22.5865 12L22.4132 11.6867ZM11.8665 17.62C8.11315 17.62 4.66648 15.5267 2.66648 12C4.66648 8.47335 8.11315 6.38002 11.8665 6.38002C15.6198 6.38002 19.0265 8.48002 21.0598 12C19.0265 15.5267 15.6132 17.62 11.8665 17.62Z" />
                    <path clipRule="evenodd" fillRule="evenodd" d="M12.0605 7.44666C11.1565 7.45325 10.2749 7.72757 9.52675 8.23498C8.77864 8.74238 8.19768 9.4601 7.85724 10.2975C7.5168 11.1349 7.43216 12.0544 7.61399 12.9398C7.79583 13.8253 8.23599 14.637 8.87889 15.2725C9.52179 15.9079 10.3386 16.3386 11.2261 16.5101C12.1136 16.6816 13.0321 16.5863 13.8654 16.2361C14.6988 15.886 15.4097 15.2967 15.9084 14.5427C16.407 13.7888 16.6711 12.9039 16.6671 12C16.6645 11.3983 16.5432 10.803 16.3101 10.2483C16.077 9.69353 15.7367 9.19025 15.3088 8.76726C14.8808 8.34427 14.3736 8.00988 13.8162 7.78327C13.2588 7.55665 12.6622 7.44226 12.0605 7.44666ZM12.0605 15.26C11.422 15.2534 10.7997 15.0583 10.2717 14.6992C9.7437 14.3401 9.3336 13.833 9.09289 13.2416C8.85219 12.6501 8.7916 12.0008 8.91874 11.375C9.04588 10.7493 9.35509 10.1751 9.80752 9.72446C10.2599 9.27388 10.8354 8.96702 11.4617 8.84243C12.0879 8.71785 12.7371 8.78108 13.3275 9.0242C13.9179 9.26732 14.4234 9.67949 14.7803 10.2089C15.1373 10.7384 15.3298 11.3615 15.3338 12C15.3356 12.4297 15.252 12.8555 15.088 13.2527C14.924 13.6499 14.6827 14.0106 14.3782 14.3139C14.0737 14.6171 13.7121 14.8569 13.3142 15.0193C12.9163 15.1817 12.4902 15.2635 12.0605 15.26Z" />
                </svg>
                : <svg className="icon icon--size_m" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path clipRule="evenodd" fillRule="evenodd" d="M16.7934 13.6001C16.9849 13.0885 17.082 12.5464 17.0801 12.0001C17.0801 10.7872 16.5983 9.62392 15.7406 8.76626C14.8829 7.90859 13.7197 7.42676 12.5068 7.42676C11.9672 7.42739 11.4321 7.52447 10.9268 7.71342L12.0001 8.82009C12.1633 8.79399 12.3282 8.78061 12.4934 8.78009C13.351 8.7783 14.1745 9.11592 14.7841 9.71922C15.3936 10.3225 15.7397 11.1425 15.7468 12.0001C15.7462 12.1653 15.7328 12.3303 15.7068 12.4934L16.7934 13.6001Z" />
                    <path clipRule="evenodd" fillRule="evenodd" d="M22.8603 11.6867C20.6136 7.53335 16.6736 5.02002 12.3136 5.02002C11.1265 5.02281 9.94742 5.21408 8.82031 5.58669L9.89365 6.66669C10.6842 6.46237 11.4971 6.35712 12.3136 6.35335C16.067 6.35335 19.4803 8.44669 21.5136 11.9734C20.7678 13.2818 19.7789 14.4357 18.6003 15.3734L19.547 16.32C20.911 15.2196 22.0439 13.8601 22.8803 12.32L23.0536 12L22.8603 11.6867Z" />
                    <path clipRule="evenodd" fillRule="evenodd" d="M3.24691 3.85344L6.22025 6.82677C4.34086 8.03685 2.80485 9.71062 1.76025 11.6868L1.58691 12.0001L1.76025 12.3201C4.00691 16.4734 7.94691 18.9868 12.3069 18.9868C14.0087 18.9864 15.6884 18.6013 17.2202 17.8601L20.5536 21.1934L21.7202 20.1934L4.38691 2.86011L3.24691 3.85344ZM9.74691 10.3534L14.1802 14.7868C13.6793 15.0968 13.1027 15.2629 12.5136 15.2668C12.0855 15.2668 11.6617 15.1821 11.2665 15.0177C10.8713 14.8533 10.5125 14.6124 10.2107 14.3088C9.909 14.0052 9.67027 13.6449 9.50829 13.2487C9.34631 12.8525 9.26428 12.4281 9.26691 12.0001C9.27443 11.4178 9.44036 10.8486 9.74691 10.3534ZM8.78025 9.38677C8.15654 10.2664 7.8642 11.3383 7.95499 12.4128C8.04578 13.4872 8.51385 14.4949 9.27632 15.2574C10.0388 16.0198 11.0465 16.4879 12.1209 16.5787C13.1954 16.6695 14.2673 16.3772 15.1469 15.7534L16.2136 16.8201C14.9788 17.3479 13.6498 17.6201 12.3069 17.6201C8.55358 17.6201 5.14025 15.5268 3.10691 12.0001C4.08272 10.2723 5.48806 8.82557 7.18691 7.80011L8.78025 9.38677Z" />
                </svg>
            }
        </button>
    );
}

export default TogglePassword;