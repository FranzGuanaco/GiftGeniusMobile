import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import account_icon from './account_icon.png'
import category_icon from './category_icon.png'
import favorite_icon from './favorite_icon.png'
import GiftGeniusLogo from './GiftGeniusLogo.png'
import searchIcon from './search_icon.png'



function Navbar(props) {
  return (
    <View style={styles.navbar}>
      <View style={styles.logoposition}>
      <Image source={props.GiftGeniusLogo} alt="Accueil" style={styles.logo} />
      </View>
      <View style={styles.navbarCenter}>
        <View style={styles.position}>
       
        </View>
      </View>
      <View style={styles.left}>
        <View style={styles.navbarList}>
        <Image source={props.searchIcon} alt="Accueil" style={styles.icon} />
        <View style={{paddingRight: 50}}></View>
        <Image source={props.accountIcon} alt="Quiz" style={styles.icon} />
        <View style={{paddingRight: 50}}></View>
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
  logoposition: {
    paddingLeft: '5%',
    paddingTop: '12%'
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
    paddingTop: '20%'
  },
  icon: {
    width: 25,
    height: 25
  },
  logo: {
    width: 80,
    height: 80
  },
});

Navbar.defaultProps = {
  accountIcon: account_icon,
  favoriteIcon: favorite_icon,
  categoryIcon: category_icon,
  GiftGeniusLogo: GiftGeniusLogo,
  searchIcon: searchIcon,

};

export default Navbar;
