import React, { Component } from 'react';
import i18n from 'meteor/universe:i18n';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import List, {
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
} from 'material-ui/List';
import Switch from 'material-ui/Switch';
import PersonIcon from 'material-ui-icons/Person';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import PermContactCalendarIcon from 'material-ui-icons/PermContactCalendar';
import WifiIcon from 'material-ui-icons/Wifi';
import BluetoothIcon from 'material-ui-icons/Bluetooth';



const T = i18n.createComponent();

const styles = theme => ({
  root: {
    width: '100%',
    // maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
});




// Task component - represents a single todo item
class InitialPreferencesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: ['wifi'],
    };
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List subheader={<ListSubheader>Toestemmingen</ListSubheader>}>
        <ListItem>
            <ListItemIcon>
              <BluetoothIcon />
            </ListItemIcon>
            <ListItemText primary="Bluetooth" secondary="Panacea@Home zal eerst zoeken of uw toestellen wel in de buurt liggen alvorens een herinnering te sturen"/>
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('bluetooth')}
                checked={this.state.checked.indexOf('bluetooth') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WifiIcon />
            </ListItemIcon>
            <ListItemText primary="Wifi" secondary="Panacea@Home zal enkel een herinnering sturen wanneer u verbonden met uw thuisnetwerk." />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('wifi')}
                checked={this.state.checked.indexOf('wifi') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Locatie" secondary="Panacea@Home zal enkel herinneringen sturen op plaatsen waar u eerder Panacea@Home gebruikt hebt." />
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('location')}
                checked={this.state.checked.indexOf('location') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" secondary="Mogen we uw kalender gebruiken zodat we u geen herinneringen sturen wanneer u bezet bent?"/>
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('calendar')}
                checked={this.state.checked.indexOf('calendar') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Persoonlijke aanbevelingen" secondary="Panacea@Home zal de herinneringen aanpassen naar uw persoonlijk gebruik van Panacea@Home."/>
            <ListItemSecondaryAction>
              <Switch
                onChange={this.handleToggle('recommendations')}
                checked={this.state.checked.indexOf('recommendations') !== -1}
              />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    );
  }
}

InitialPreferencesCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InitialPreferencesCard);