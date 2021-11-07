import Link from 'next/link';
import btnCls from './button.module.css'

export const Button = ({link, children, onClick}) => link ? ( <Link href={link}>
    <a className={btnCls.btn}>{children}</a>
</Link>) : (
    <button className={btnCls.btn} onClick={onClick}>{children}</button>
)