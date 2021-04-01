import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
    <Link activeClassName={style.active} href="/"><h1>Jeonpasang</h1><h4>Navigate NFT Market</h4></Link>
	</header>
);

export default Header;
