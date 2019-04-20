import React from 'react';
import UserBanner from './UserBanner.js'
import { Grid } from '@material-ui/core';


class BannerBoard extends React.Component {

  constructor() {
    super();
    this.state = { someKey: 'someValue',
                   banners: 'None'};
  }

  populate = () => {
    let banners = [<UserBanner/>];
    fetch('/api/user/banner', {method: 'GET'})
      .then(res => res.json())
      .then(data => {
        data.forEach(user => 
          banners.push(<UserBanner 
            icon={user.avatar}
            name={user.name}/>));
        this.setState({banners: banners})
        }
      )

  }

  render() {
    return (
      <Grid container
            direction="row"
            justify="space-evenly"
            spacing={24}
            alignItems="center">
        {this.state.banners}
      </Grid>
    )
  }

  componentDidMount () {
    this.populate();
  }

}

export default BannerBoard;
