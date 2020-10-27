# News

## Instalation

This project requires yarn, node and cocoapods(for ios only) setup.

```bash
yarn install
cd ios && pod install && cd ..
```

## Running
Run this project with `yarn run ios` or  `yarn run android` 

## Architeture

This project is done in React Native using mainly [ReactNavigation](https://reactnavigation.org) to accomplish it's simple navigation pattern and [XState](https://xstate.js.org) as a State Manager tool. XStated is a library that uses the conecpt of a finite state machine to represent your application, having nominated states and predictable transactions to be made. 

## Structure

This project uses a folder called Screens to keep all screen that will be navigated, and keep it's UI components on a components folder. You can always keep related screen components inside it's folder, but once it becomes required in other parts of the code we must follow DRY and make it reusable.
