import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

const alert = ({children}:Props) => {
    return (
        <div className="alert alert-primary" role="alert">
            {children}
        </div>
    )
}

export default alert