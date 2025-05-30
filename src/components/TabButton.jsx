// export default function TabButton({children, onSelect, isSelected}) {
export default function TabButton({children, isSelected, ...props}) {
    // document.querySelector('button').addEventListener( 'click', () => {})
    return (
        <li>
            {/* <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button> */}
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    );
}