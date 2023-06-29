import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();

  const data = route
  // ?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#eee] relative pt-10">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-[#eee] shadow-lg">
          <Image
            source={{
              uri: 
              // data?.photo?.images?.large?.url
              //   ? data?.photo?.images?.large?.url
              //   : 
                "https://cdn.pixabay.com/photo/2020/04/09/01/27/brazil-5019279_1280.jpg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-[#eee]"
            >
              <FontAwesome5 name="chevron-left" size={24} color="#3a88FF" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#be3939]">
              <FontAwesome5 name="heart" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
          

          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[32px] font-bold text-gray-100">
                R$100
                {/* {data?.price_level} */}
              </Text>
              <Text className="text-[20px] font-bold text-gray-100">
                Rio de Janeiro
                {/* {data?.price} */}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#3a88ff] text-[24px] font-bold">
            {/* {data?.name} */}
            Copacabana
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              {/* {data?.location_string} */}
              Rio de Janeiro
            </Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data
          // ?.rating 
          && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-[#f4f3ee] items-center justify-center shadow-md">
                <FontAwesome name="star" size={24} color="#e7d90a" />
              </View>
              <View>
                <Text className="text-[#515151]">
                  {/* {data?.rating} */}
                  3/5
                  </Text>
                <Text className="text-[#515151]">Avaliação</Text>
              </View>
            </View>
          )}

          {data
          // ?.price_level 
          && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-[#f4f3ee] items-center justify-center shadow-md">
                <MaterialIcons name="attach-money" size={24} color="green" />
              </View>
              <View>
                <Text className="text-[#515151]">
                  {/* {data?.price_level} */}
                  R$100
                  </Text>
                <Text className="text-[#515151]">Preço</Text>
              </View>
            </View>
          )}

          {data
          // ?.bearing 
          && (
            <View className=" flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-[#f4f3ee] items-center justify-center shadow-md">
                <FontAwesome5 name="map-signs" size={24} color="black" />
              </View>
              <View>
                <Text className="text-[#515151] capitalize">
                  {/* {data?.bearing} */}
                  Sudeste
                </Text>
                <Text className="text-[#515151]">Brasil</Text>
              </View>
            </View>
          )}
        </View>

        {data
        // ?.description 
        && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            {/* {data?.description} */}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
        )}

        {data
        // ?.cuisine 
        && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            <TouchableOpacity
                // key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>
                  {/* {n.name} */}
                  viagens brasileiras
                  </Text>
              </TouchableOpacity>
            {/* {data
            ?.cuisine.map
            ((n) => ( */}
              <TouchableOpacity
                // key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-100"
              >
                <Text>
                  {/* {n.name} */}
                  rio de janeiro
                  </Text>
              </TouchableOpacity>
            {/* )) */}
            {/* } */}
          </View>
        )}
        <View className="pt-38">
        </View>

        <View className=" space-y-2 mt-4 bg-[#faf3ee] rounded-2xl px-4 py-4 ">
          {data
          // ?.phone 
          && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={24} color="#3a88ff" />
              <Text className="text-lg">
                {/* {data?.phone} */}
                (99) 99999-9999
                </Text>
            </View>
          )}
          {data
          // ?.email 
          && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="envelope" size={24} color="#3a88ff" />
              <Text className="text-lg">
                {/* {data?.email} */}
                email@gmail.com
                </Text>
            </View>
          )}
          {data
          // ?.address 
          && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={24} color="#3a88ff" />
              <Text className="text-lg">
                {/* {data?.address} */}
                endereço
                </Text>
            </View>
          )}

          <View className="mt-4 px-4 py-4 rounded-lg bg-[#3a88ff] items-center justify-center mb-12">
            <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100">
              Acessar
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
