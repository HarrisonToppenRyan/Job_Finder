import { useState } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false, //start
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl = {icons.menu} dimention="60%" />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl = {images.profile} dimention="100%" /> //change image here 
                    ),
                    headerTitle: ""
                 
        }}
    />
    <ScrollView showsVerticalScrollIndicator={false}>
        <View 
          style={{
            flex: 1,
            padding: SIZES.medium
          }}  
        >
            <Welcome

            />

            <Popularjobs />
            <Nearbyjobs />
        </View>
    </ScrollView>

    </SafeAreaView>
    )
}

export default Home;