export default function Tabs({ children, buttons, ButtonsContainer }) {
    // const ButtonsContainer = buttonsContainer; // 대문자 시작해야함
    return <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
        {children}
    </>
}