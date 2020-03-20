import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Screens/Home/Home'
import Main from '../Screens/Main/Main'
import PopMotion from '../Screens/PopMotion/PopMotion'
import MediumClapComponent from '../Screens/MediumClap/MediumClap'
import AnimationsComponent from '../Screens/Animations/Animations'
import CryptoComponent from '../Screens/CryptoJS/CryptoJS'
import BurstAnimationComponent from '../Screens/BurstAnimations/BurstAnimation'
import VeganAnimationComponent from '../Screens/VeganRecipeAnimation/RecipeAnimation'
import SwipeableList from "../Screens/Swipeable/Swipeable";
import CallBallComponent from '../Screens/PanResponder/CallBall'

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
    <NavigationContainer>
        <HomeStack.Navigator headerMode='screen' initialRouteName="BallComponent">
            <HomeStack.Screen name={"HOME"} component={Home} />
            <HomeStack.Screen name={"Main"} component={Main} />
            <HomeStack.Screen name={"MediumClapComponent"} component={MediumClapComponent} />
            <HomeStack.Screen name={"AnimationsComponent"} component={AnimationsComponent} />
            <HomeStack.Screen name={"PopMotion"} component={PopMotion}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen name={"CryptoComponent"} component={CryptoComponent} />
            <HomeStack.Screen name={"BurstAnimationComponent"} component={BurstAnimationComponent} />
            <HomeStack.Screen name={"VeganAnimationComponent"} component={VeganAnimationComponent} />
            <HomeStack.Screen name={"SwipeAbleComponent"} component={SwipeableList} />
            <HomeStack.Screen name={"BallComponent"} component={CallBallComponent} />
        </HomeStack.Navigator>
    </NavigationContainer>
);


export default HomeNavigator;