import {h, Component} from 'preact';
import { Link } from 'preact-router/match';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import LayoutGrid from 'preact-material-components/LayoutGrid';
import 'preact-material-components/LayoutGrid/style.css';
import style from './style.css'

import Rarible from './logos/rarible'
import OpenSea from './logos/openSea'
import SuperRare from './logos/superRare'
import Foundation from './logos/foundation'


export default class CardsPage extends Component {
 onClick = (e) => {
    e.preventDefault()
    console.log('onclick..')
  }
  render(){
    let list = []
    list.push({ url: "https://foundation.app", title: "Foundation", logo: <Foundation /> })
    list.push({ url: "https://opensea.io", title: "OpenSea", logo: <OpenSea /> })
    list.push({ url: "https://superrare.app", title: "SuperRare", logo: <SuperRare /> })

    const data = this.props.data



    return (
      <div class="mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-1-phone">
        <Card>
            <Card.Media
              class={style.card_media}
            />
          <div class={style.artist_card}>
            <img src="/assets/images/person-icon.png" class={style.avatarImage}/>
              {data.name}
              <span class={style.artist_twit}>
                <img src="https://www.shareicon.net/data/256x256/2017/06/28/888038_twitter_512x512.png" style="width: 30px;vertical-align:middle;"/>
              @twitter
              </span>
          </div>
                  <div class="clear"></div>
            {
              data.markets.map(d => {
                let logo = ''
                let links = ''
                if (d.market_type === 0) {
                    logo = <Foundation />
                } else if (d.market_type === 1) {
                    logo = <OpenSea />
                } else {
                  logo =<SuperRare />
                }


                if (d.url !== '') {
                  links = <a class={style.art_link} href="{d.url}" target="_blank">@{d.name}</a>
                } else {
                  links = <a class={style.art_link} href={void(0)} onClick={this.onClick}>None</a>
                }
                return (
                  <Card.Actions>
                    {logo}
                    {links}
                  </Card.Actions>
                )
              })
            }
        </Card>
      </div>
    );
  }
}
