import {createReactNavigationContainerRef} from "@react-navigation/native"
export const navigationRef = createReactNavigationContainerRef();

export function navigation (name, params) {
if(navigationRef.isReady()){
navigationRef.navigate(name, params);
}
}


export function setTopLevelNavigator(ref){
    navigationRef.current=ref;
}