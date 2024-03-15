export type IconProps = {
    color?: string;
    className?: string;
};
function ArrowIcon(props: IconProps) {
    return (
        <svg
            className={props.className}
            style={{
                color: props.color,
            }}
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.20711 1C1.76165 1 1.53857 1.53857 1.85355 1.85355L6.64645 6.64645C6.84171 6.84171 7.15829 6.84171 7.35355 6.64645L12.1464 1.85355"
                fill="currentColor"
            />
            <path
                d="M12.1464 1.85355L7.35355 6.64645C7.15829 6.84171 6.84171 6.84171 6.64645 6.64645L1.85355 1.85355C1.53857 1.53857 1.76165 1 2.20711 1H11.7929C12.2383 1 12.4614 1.53857 12.1464 1.85355Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default ArrowIcon;
