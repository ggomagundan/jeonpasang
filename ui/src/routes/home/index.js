import style from './style.css';
import {h, Component} from 'preact';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import Grids from '../grid'

const Home = () => (
	<div class={style.home}>
    <Grids />
	</div>
);

export default Home;
