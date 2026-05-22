import styles from "./Button.module.css";

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost" | "destructive";
    size?: "large" | "small" | "medium";
    disabled?: boolean;
    onClick?: () => void;
};


function Button ({
    children, variant="primary", size="large", disabled=false, onClick
}: ButtonProps) {
    const className= `${styles.button} ${styles[variant]} ${styles[size]}`;

    return (
        <button className={className} disabled={disabled} onClick={onClick} type="button">
            {children}
        </button>
    );
}


export default Button;