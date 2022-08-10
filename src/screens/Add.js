import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Dimensions } from "react-native";
import Modal from "react-native-modal";
import Carousel from 'react-native-snap-carousel';

const Window = Dimensions.get('window');

const ProductItem = (item) => {
  return (
    <Image source={require('../assets/logo/sunglasse.png')} style={{ width: "100%", marginTop: "20%" }} />
  )
};

const AddComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  let flatListRef = null;

  const selectedProducts = [
    { name: 'glass', img: 'sunglasse.png' },
    { name: 'glass', img: 'sunglasse.png' },
    { name: 'glass', img: 'sunglasse.png' },
    { name: 'glass', img: 'sunglasse.png' },
    { name: 'glass', img: 'sunglasse.png' },
  ]

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/logo/background.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.itemContainer}>
          <Image source={require('../assets/logo/profile.png')} style={styles.itemImage} />
          <View style={styles.itemText}>
            <Text style={styles.itemText}>$140</Text>
            <Text style={styles.itemText}>#Eau de Parfum</Text>
            <Text style={styles.itemText}>Top Notes: Bergamot…</Text>
          </View>
          <TouchableOpacity style={styles.cartBtn} onPress={() => setModalVisible(true)}>
            <Text style={styles.cartBtnTxt}>Add To</Text>
            <Text style={styles.cartBtnTxt}>Cart</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <Modal
        propagateSwipe={true}
        hideModalContentWhileAnimating={true}
        hasBackdrop={true}
        backdropColor='rgba(0,0,0,0.3)'
        swipeDirection='down'
        onSwipeThreshold={100}
        animationIn='slideInUp'
        animationInTiming={0}
        animationOut='slideOutDown'
        animationOutTiming={0}
        onSwipeComplete={() => setModalVisible(false)}
        isVisible={modalVisible}
        style={styles.modal}>
        <View style={styles.modalWrapper}>
          <View style={styles.modalContentWrapper}>
            <View style={styles.modalContentImageSection}>
              <TouchableOpacity
                style={styles.modalBackButton}
                onPress={() => setModalVisible(false)}>
                <Image source={require('../assets/logo/close.png')} style={{ resizeMode: 'contain', width: 15, height: 15 }} />
              </TouchableOpacity>

              <Carousel
                ref={(c) => flatListRef = c}
                data={selectedProducts}
                renderItem={(productItem, index) => (
                  <ProductItem
                    index={index}
                    item={productItem}
                  />
                )}
                sliderWidth={Window.width}
                itemWidth={Window.width - 60}
                containerCustomStyle={styles.cardList}
                inactiveSlideShift={0}
                // onSnapToItem={(index) => setScrollItem(index)}
                // scrollInterpolator={scrollInterpolator}
                // slideInterpolatedStyle={animatedStyles}
                useScrollView={false}
              />

            </View>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
              <Text>
                Top Notes: Bergamot, Grape Fruit, Apple
              </Text>
              <Text>
              EXCLUSIVE
              </Text>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    width: Window.width - 60,
    padding: 20,
    backgroundColor: '#ffffff77',
    borderRadius: 15,
    position: 'absolute',
    bottom: 50
  },
  itemImage: {
    borderRadius: 5,
    width: 50,
    height: 50,
    marginRight: 10
  },
  itemText: {
    color: "white"
  },
  cartBtn: {
    backgroundColor: '#c00000',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center'
  },
  cartBtnTxt: {
    color: 'white',
    textAlign: 'center'
  },
  modal: {
    flex: 1,
    margin: 0,
    // padding: 10,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContentWrapper: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: Window.width,
    height: 600,
    // padding: 16,
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalContentImageSection: {
    marginBottom: 10,
    flexDirection: 'row',
    flex: 3.5,
    alignSelf: 'center',
    position: 'relative'
  },
  modalBackButton: {
    top: 20,
    left: 20,
    position: 'absolute',
    zIndex: 2
  },
  modalContentImage: {
    resizeMode: 'cover',
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#d3d3d3',
  },
  cardList: {

  }
});

export default AddComponent;