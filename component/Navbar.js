import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import account_icon from './account_icon.png'
import category_icon from './category_icon.png'
import favorite_icon from './favorite_icon.png'
import GiftGeniusLogo from './GiftGeniusLogo.png'

function Navbar(props) {
  return (
    <View style={styles.navbar}>
      <View style={styles.logo}>
        
      </View>
      <View style={styles.navbarCenter}>
        <View style={styles.position}>
       
        </View>
      </View>
      <View style={styles.left}>
        <View style={styles.navbarList}>
        <Image source={props.accountIcon} alt="Accueil" style={styles.icon} />
        <View style={{paddingRight: 30}}></View>
        <Image source={props.favoriteIcon} alt="Quiz" style={styles.icon} />
        <View style={{paddingRight: 30}}></View>
        <Image source={props.categoryIcon} alt="Résultat" style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  logo: {
    paddingLeft: '10%',
  },
  logoImage: {
    width: 130,
  },
  navbarCenter: {
    flex: 1,
  },
  position: {
    paddingLeft: '40%',
    position: 'relative',
  },
  left: {
    paddingRight: '10%',
  },
  navbarList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25
  },
});

Navbar.defaultProps = {
  accountIcon: account_icon,
  favoriteIcon: favorite_icon,
  categoryIcon: category_icon,
};

export default Navbar;
