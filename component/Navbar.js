import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import account_icon from './account_icon.png'
import category_icon from './category_icon.png'
import favorite_icon from './favorite_icon.png'
import GiftGeniusLogo from './GiftGeniusLogo.png'
import searchIcon from './search_icon.png'
import { useNavigation } from '@react-navigation/native';
import NewsBox from './NewsBox';



function Navbar(props) {


  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigation = useNavigation();

  const openNav = () => {
    setIsNavOpen(true);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const goToHomepage = () => {
    navigation.navigate('Home');
    console.log('test');
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.logoposition}>
      <TouchableOpacity onPress={goToHomepage}>
      <Image source={props.GiftGeniusLogo} alt="Accueil" style={styles.logo} />
      </TouchableOpacity>
      </View>
      <View style={styles.navbarCenter}>
        <View style={styles.position}>
        </View>
      </View>
      <View style={styles.left}>
        <View style={styles.navbarList}>
        <Image source={props.searchIcon} alt="search" style={styles.icon} />

        <View style={{paddingRight: 50}}></View>
        <Image source={props.accountIcon} alt="favorite" style={styles.icon} />

        <View style={{paddingRight: 50}}></View>
        <TouchableOpacity onPress={openNav}>
        <Image source={props.categoryIcon} alt="category" style={styles.icon} />
        </TouchableOpacity>
        </View>
  
        {/* Sidebar */}
      <View style={[styles.sidebar, isNavOpen ? styles.sidebarOpen : null]}>
        <TouchableOpacity onPress={closeNav} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>&times;</Text>
        </TouchableOpacity>
        {/* Ajoutez des liens ou du contenu supplémentaire ici */}
      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: 'black',
    zIndex: 100,
  },
  logoposition: {
    paddingLeft: '5%',
    paddingTop: '10%'
  },
  logoImage: {
    width: 110,
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
    paddingTop: '10%'
  },
  icon: {
    width: 25,
    height: 25
  },
  logo: {
    width: 70,
    height: 70
  },
  sidebar: {
    position: 'absolute',
    right: -10,
    top: 0, // Déplacez la barre latérale en dessous de la barre de navigation
    bottom: 0,
    width: 0,
    height: 800,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#adabab',
    paddingTop: 100,
    overflow: 'hidden',
  },
  sidebarOpen: {
    width: 300, // Augmentez la largeur selon vos besoins
    flex: 1
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 250,
  },
  closeButtonText: {
    fontSize: 30,
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
