import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Dimensions, ActivityIndicator, Touchable,LogBox } from "react-native";
import Modal from "react-native-modal";
import Carousel from 'react-native-snap-carousel';
import { getData } from "@actions";
import { connect } from "react-redux";
import * as reduxActions from "@actions";
import Video from 'react-native-video';

const Window = Dimensions.get('window');

const ProductItem = ({ item }) => {
  return (
    <Image source={{ uri: item.thumbnail }} style={{ width: "100%", height: 200, marginTop: "20%" }} />
  )
};

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
  ])

const AddComponent = (props) => {
  const [productdata, setProductData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const refreshData = async () => {
    setLoading(true)
    try {
      const tmpData = await getData(currentPage);
      setProductData([...(productdata || []), ...(tmpData.data || [])])
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }
  useEffect(() => {
    refreshData()
  }, [])
  useEffect(() => {
    refreshData()
  }, [currentPage])

  const [modalVisible, setModalVisible] = useState(false);
  let flatListRef = null;
  const loadMore = (index) => {
    setCurrentIndex(index)
    if (index + 1 >= productdata.length) {
      setCurrentPage(currentPage + 1)
    }
  }
  const addCart = () => {
    props.addCart(productdata[currentIndex])
  }

  const addVideoReview = () => {
    alert();
  }

  return (
    <View style={styles.container}>
      <Video source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}   // Can be a URL or a local file.
        style={styles.backgroundVideo}
        resizeMode={'cover'} />

      <View style={styles.image}>
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
      </View>

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
            <TouchableOpacity
              style={styles.modalBackButton}
              onPress={() => setModalVisible(false)}>
              <Image source={require('../assets/logo/close.png')} style={{ resizeMode: 'contain', width: 15, height: 15 }} />
            </TouchableOpacity>
            <View style={styles.modalContentImageSection}>
              <Carousel
                ref={(c) => flatListRef = c}
                data={productdata}
                renderItem={({ item, index }) => (
                  <ProductItem
                    index={index}
                    item={item}
                  />
                )}
                sliderWidth={Window.width}
                itemWidth={Window.width - 60}
                containerCustomStyle={styles.cardList}
                inactiveSlideShift={0}
                onSnapToItem={loadMore}
              // scrollInterpolator={scrollInterpolator}
              // slideInterpolatedStyle={animatedStyles}
              />
              {/* currentIndex */}
            </View>
            <View style={{ flex: 1, width: "100%", padding: 20 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.topnotes}>Top Notes: Bergamot, Grape Fruit, Apple</Text>
                <View style={{ backgroundColor: "#F71E78", paddingVertical: 2, paddingHorizontal: 5, borderRadius: 4 }}>
                  <Text style={{ color: "#fff", fontSize: 10 }}>EXCLUSIVE</Text>
                </View>
              </View>
              <View style={{ marginVertical: 10, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#bbb", paddingBottom: 5 }}>
                <Text style={{ fontSize: 20, color: "#000", fontWeight: '900' }}>{'Royalty Eau de Parfum - \n 100ml'}</Text>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: '900', marginHorizontal: 20 }}>$140</Text>
                <Text style={{ color: "#F71E78", fontSize: 20, fontWeight: '900' }}>$99</Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Image source={require('../assets/logo/profile.png')} style={{ width: 40, height: 40, borderRadius: 999 }} />
                <Text style={{ marginHorizontal: 15, flex: 1, fontSize: 18, fontWeight: "900", color: "#000" }}>{'By Maged el Masry\nActors Egypt'}</Text>
                <View style={{ flexDirection: "row" }}>
                  <View />
                  <Image source={require('../assets/logo/starSolid.png')} /><Text>{`4.9`}</Text>
                </View>
              </View>
                <View>
                  <Text style={{position: "absolute", right: 5, top: -25}}>33 Reviews</Text>
                </View>
              <View>
                <Text style={styles.decTxt}>
                  Description
                </Text>
              </View>
              <View>
                <Text style={styles.descSpace}>
                  {`A perfume that captures hearts..\nDetailed as a piece of arts..\nAlters your mood and reality..\nFeelings speak of its sensuality.. See More`}
                </Text>
              </View>
              <View style={styles.btngroup}>
                <TouchableOpacity onPress={addVideoReview}>
                  <View style={styles.addVideoBtn}>
                    <Text style={{ color: "white", textAlign: "center" }}>{`ADD VIDEO\nREVIEW`}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={addCart}>
                  <View style={styles.addCartBtn}>
                    <Text style={{ color: "white" }}>{`ADD TO CART`}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {loading &&
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'#fff'} />
          </View>
        }
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
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
    textAlign: 'center',
    paddingHorizontal: 27
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
    height: 260,
  },
  modalBackButton: {
    top: 20,
    right: 20,
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

  },
  loadingContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#00000044",
    zIndex: 9999,
    justifyContent: "center",
    alignItems: "center"
  },
  topnotes: {
    fontWeight: "bold",
    flex: 1,
  },
  addCartBtn: {
    backgroundColor: "#F71E78",
    paddingVertical: 15,
    paddingHorizontal: 30,
    color: 'white'
  },
  addVideoBtn: {
    backgroundColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 30,
    color: "#fffff",
  },
  btngroup: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  decTxt: {
    paddingTop: 5,
    fontSize: 16,
    color: "black",
    fontWeight: "900"
  },
  descSpace: {
    paddingBottom: 10
  }
});

const mapStateToProps = (state) => (state)
const mapDispatchToProps = { ...reduxActions }

export default connect(mapStateToProps, mapDispatchToProps)(AddComponent);