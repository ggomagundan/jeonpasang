import style from './style.css';
import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import PersonCard from './card'

const Grid = () => (
	<div class={style.home}>
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="4">
          <PersonCard />
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <PersonCard />
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <PersonCard />
        </LayoutGrid.Cell>
        <LayoutGrid.Cell cols="4">
          <PersonCard />
        </LayoutGrid.Cell>
      </LayoutGrid.Inner>
    </LayoutGrid>
	</div>
);

export default Grid;
