/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    PixelRatio
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import { Icon } from "react-native-elements";
  import { Box,FlatList,Flex,NativeBaseProvider,Button} from "native-base";
  
  
  
  
  
  
  
  export default function Home({ navigation }) {
  
    const [dataList, setDataList] = useState([]);
  
    const [resizableBlock, setResizableBlock] = useState(40);
    const [displayForResizing, setDisplayForResizing] = useState('none');
  
    const [checkSelectedCarReg, setCheckSelectedCarReg] = useState(null);
  
    const [searchTxt, setSearchTxt] = useState(null);
  
    const loadData = async () => {
      dataList.splice(0, dataList.length);
      let res = await fetch('http://localhost:4000/Vehicle', {method: 'GET'})
        .then(async res => {
          let arr = await res.json();
          console.log(arr);
          setDataList(arr);
        })
        .catch(async res => {});
    };
  
    useEffect(() => {
      loadData();
    }, []);
  
  
  
  
    return (
      <View style={styles.container}>
        <Box style={styles.textbox}>
         <TouchableOpacity
         onPress={async () => {
                console.log(searchTxt);
                searchTxt == ''
                  ? loadData()
                  : await fetch(
                      'http://localhost:4000/Vehicle/search?Location=' +
                        searchTxt +
                        '&Date=' +
                        searchTxt,
                      {
                        method: 'GET',
                      },
                    )
                      .then(async res => {
                        let arr = await res.json();
                        console.log(arr);
                        setDataList(arr);
                      })
                      .catch(async res => {});
              }}
         >
         <Icon name="search" 
          color="#00aced" 
          style={styles.icons}
          />

          </TouchableOpacity>
          <TextInput
            onChangeText={async e => {
              setSearchTxt(e);
              if (e == '') {
                loadData();
              }
            }}
            value={searchTxt}
            style={styles.input2}
            styles={{ borderColor: "white" }}
            placeholder="Enter Date/Loaction"
          />
  
        </Box>
  
  
  
  
        <NativeBaseProvider>
          <FlatList
            style={{
              position: 'absolute',
              top: 30,
              right:-150
            }}
            data={dataList}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  backgroundColor: '#fff',
                  position: 'relative',
                  borderWidth: 1,
                  borderColor: '#FFCB42',
                  marginBottom: '1%',
                  padding: 5,
                  height:
                    item.regNo === checkSelectedCarReg
                      ? PixelRatio.getPixelSizeForLayoutSize(resizableBlock)
                      : PixelRatio.getPixelSizeForLayoutSize(40),
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onLongPress={() => {
                  setResizableBlock(40);
                  setDisplayForResizing('none');
                }}
                onPress={() => {
                  setResizableBlock(60);
                  setDisplayForResizing('flex');
                  setCheckSelectedCarReg(item.regNo);
                }}>
                <Flex
                  flexDirection={'row'}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: PixelRatio.getPixelSizeForLayoutSize(36),
                  }}>
                  <Flex
                    flexDirection={'row'}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                    }}>
                    <Flex
                      style={{
                        position: 'relative',
                        width: '50%',
                        height: '100%',
                      }}>
                      <Image
                        resizeMode="stretch"
                        source={{uri: item.image}}
                        style={{width: '100%', height: '100%'}}></Image>
                    </Flex>
                    <Flex
                      flexDirection={'column'}
                      style={{
                        width:300,
                        height: '100%',
                      
                      }}>
                      <Flex
                        style={{
                          width: '100%',
                          height: '35%',
                        }}>
                        <Text
                          color={'white'}
                          fontSize={'sm'}
                          style={{marginBottom: 5, marginLeft: '10%'}}>
                          Brand : {item.brand}
                        </Text>
                      </Flex>
                      <Flex
                        style={{
                          width: '100%',
                          height: '35%',
                        }}>
                        <Text
                          color={'white'}
                          fontSize={'sm'}
                          style={{marginBottom: 5, marginLeft: '10%'}}>
                          Reg No : {item.regNo}
                        </Text>
                      </Flex>
                      <Flex
                        style={{
                          width: '100%',
                          height: '35%',
                          justifyContent: 'center',
                        }}>
                        <Text
                          color={'white'}
                          fontSize={'sm'}
                          style={{marginBottom: 5, marginLeft: '10%'}}>
                          Price : {item.price}
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex
                  flexDirection={'row'}
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: PixelRatio.getPixelSizeForLayoutSize(20),
                    display:
                      item.regNo === checkSelectedCarReg
                        ? displayForResizing
                        : 'none',
                  }}>
                  <Flex
                    flexDirection={'row'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                    }}>
                   
                  </Flex>
                </Flex>
              </TouchableOpacity>
            )}
          />
          
        </NativeBaseProvider>
  
  
  
  
  
        <TouchableOpacity style={styles.btn}>
          <Text
            onPress={() => {
              navigation.navigate("AddVehicals");
            }}
            style={styles.Text}
          >
            Add New Car
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    textbox: {
      marginTop: "10%",
      borderWidth: 1,
      padding: 10,
      width: "80%",
      height: "9%",
      borderRadius: 10,
    },
    input2: {
      marginTop: "-10%",
      height: "620%",
      width: "80%",
      color:"#ffffff",
      border:"none",
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      height: 1070,
      backgroundColor: "#181718",
      // width:'100vw',
      flex: 1,
    },
    btn: {
      backgroundColor: "green",
      height: 50,
      width: 300,
      alignItems: "center",
      justifyContent: "center",
      marginTop: "140%",
      position: "absolute",
      borderRadius: 12,
    },
    Text: {
      color: "#ffffff",
      fontSize: 20,
    },
    header: {
      backgroundColor: '#FFCB42',
      height: 90,
      width: '100%',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
    },
    addNewCarBtn: {
      top: 690,
      padding: 10,
    },
    icons:{
      marginLeft:'70%',
      
  
    },
    addCarBtn: {
      padding: 15,
      backgroundColor: '#FFCB42',
      borderRadius: 30,
    },
    textInput: {
      padding: 10,
      fontSize: 16,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#AEBDCA',
      width: 230,
      left: 145,
      backgroundColor: '#FFF8BC',
    },
    formInput: {
      marginTop: 1,
      padding: 10,
      bottom: 20,
    },
  });
  