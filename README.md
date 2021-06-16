# Challenge React Native

AniMe App is the challenge they gave me a week ago and it consists of customizing the public API of kitsu.io. [app release](https://github.com/LimitingSky/anime/tree/main/release)

## Enviroment

    React v17.0.1
    React Native v0.64.2
    Nodejs v12.2.0
    yarn v1.22.10
    npx v6.11.1
    xcode 12.5

## Installation

[install dependencies]
yarn install
[ios]
cd ios; pod install; cd .. or npx pod-install ios

## Run

[run android]
yarn android
[run ios]
open AniMe.xcworkspace with xcode and run project with ⌘ + r

## List of Packages

- [@react-native-community/async-storage(v1.12.1)](https://github.com/react-native-async-storage/async-storage#readme)
- [@react-native-community/masked-view(v0.1.11)](https://github.com/react-native-masked-view/masked-view#readme)
- [@react-navigation/native(v5.9.4)](https://reactnavigation.org)
- [@react-navigation/stack(v5.14.5)](https://reactnavigation.org/docs/stack-navigator/)
- [axios(v0.21.1)](https://github.com/axios/axios)
- [react(v17.0.1)](https://reactjs.org)
- [react-native(v0.64.2)](https://github.com/facebook/react-native#readme)
- [react-native-bootsplash(v3.2.3)](https://github.com/zoontek/react-native-bootsplash)
- [react-native-fast-image(v8.3.4)](https://github.com/DylanVann/react-native-fast-image#readme)
- [react-native-gesture-handler(v1.10.3)](https://github.com/software-mansion/react-native-gesture-handler#readme)
- [react-native-reanimated(v2.2.0)](https://github.com/software-mansion/react-native-reanimated#readme)
- [react-native-safe-area-context(v3.2.0)](https://github.com/th3rdwave/react-native-safe-area-context#readme)
- [react-native-screens(v3.3.0)](https://github.com/software-mansion/react-native-screens#readme)
- [react-redux(v7.2.4)](https://github.com/reduxjs/react-redux)
- [redux(v4.1.0)](https://redux.js.org)
- [redux-persist(v6.0.0)](https://github.com/rt2zz/redux-persist#readme)

### Dev dependency

- [babel-plugin-module-resolver(v4.1.0)](https://github.com/tleunen/babel-plugin-module-resolver#readme)

### Notes

I have some troubles to generate a .ipa file because the only team available to sign application is personal team but this kind of teams are not able to make distribution process in witch are export option that make the ipa file for that reason in the release folder only has a android ( .apk ) file
