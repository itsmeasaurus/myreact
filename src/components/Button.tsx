interface Props {
    children: string,
    color?: 'primary' | 'secondary' | 'danger',
    onClick: () => void
}

const button = ({children, color = 'primary', onClick}:Props) => {
    return (
        <button
            type="button"
            className={'btn btn-'+color}
            onClick={onClick}
        >
            {children}</button>
    )
}

export default button;