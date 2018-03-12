import { iconsMap } from '../icons/app-icons';

function setDrawerOff(that) {
  that.props.navigator.setDrawerEnabled({
    side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
    enabled: false // should the drawer be enabled or disabled (locked closed)
  });
  that.props.navigator.setButtons({
    leftButtons: [
      {
      }
    ],
  });
}

function setDrawerOn(that) {
  that.props.navigator.setDrawerEnabled({
    side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
    enabled: true // should the drawer be enabled or disabled (locked closed)
  });
  that.props.navigator.setButtons({
    leftButtons: [
      {
        title: 'menu',
        id: 'menu',
        icon: iconsMap['md-menu']
      }
    ],
  });
  // if you want to listen on navigator events, set that up
  that.props.navigator.setOnNavigatorEvent(onNavigatorEvent.bind(that));
}

function onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
  if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
    if (event.id == 'menu') { // this is the same id field from the static navigatorButtons definition
      this.props.navigator.toggleDrawer({
        side: 'left', // the side of the drawer since you can have two, 'left' / 'right'
        animated: true, // does the toggle have transition animation or does it happen immediately (optional)
        to: 'open' // optional, 'open' = open the drawer, 'closed' = close it, missing = the opposite of current state
      });
    }
  } else {
    Alert.alert('event.id: ' + event.id);
    switch (event.id) {
      case 'willAppear':
        break;
      case 'didAppear':
        break;
      case 'willDisappear':
        break;
      case 'didDisappear':
        break;
      case 'willCommitPreview':
        break;
    }
  }
}


export {
  setDrawerOn,
  setDrawerOff,
};