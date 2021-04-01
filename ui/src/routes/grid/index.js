import style from './style.css';
import {h, Component} from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import PersonCard from './card';

import axios from 'axios';

const Grid = (data) => (
	<div class={style.home}>
    <LayoutGrid>
      <LayoutGrid.Inner>
        <LayoutGrid.Cell cols="4">
          <PersonCard data={data}/>
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

const fetchData = async () => {

  const ret = await axios.get('/api/animals/kdjf')
  return ret

}

export default class Clock extends Component {
  state = {
      data: ''
    };
  fetchUser = () => {
    axios.get(`/api/animals/efwef`)
      .then(response =>{
       const data = response.data;
       this.setState({artists: data.artists})
      });
  }
  constructor() {
    super();

    this.state = {
      time: Date.now(),
      data: '',
      artists: []
    };

  }

  // Lifecycle: Called whenever our component is created
  componentDidMount() {
    this.fetchUser()
  }

  // Lifecycle: Called just before our component will be destroyed
  componentWillUnmount() {
  }

  render() {

  const artists = this.state.artists

	return <div class={style.home}>
    <LayoutGrid>
      <LayoutGrid.Inner>
          { artists.map(art => {
            return <LayoutGrid.Cell cols="4">
                <PersonCard data={art}/>
              </LayoutGrid.Cell>
          })
          }
      </LayoutGrid.Inner>
    </LayoutGrid>
	</div>
  }
}

