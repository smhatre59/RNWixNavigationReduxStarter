# RNWixNavigationReduxStarter
A starter template for all react native apps using wix native navigation and redux  
<pre>
Directory structure:-  
Entire JS specfic files are in src folder  
├── src  
│   ├── actions                            <- All screens level actions defined here  
│   │   └── homeActions.js   
│   ├── App.android.js                     <- Main app component containing Core Navigation Flow  
│   ├── constants                          <- All constants defined here   
│   │   ├── actionTypes.js                 <- Constants for actions defined here   
│   │   └── api.js                         <- Api base urls to be defined here    
│   ├── modules    
│   │   ├── appscreens                     <- Page level screens     
│   │   │   ├── FirstScreen.js    
│   │   │   ├── Home.js    
│   │   │   └── styles    
│   │   │       └── FirstScreenStyles.js   
│   │   └── global                         <-Global & Reusable Components    
│   │       ├── Drawer.js    
│   │       └── styles    
│   │           └── DrawerStyles.js    
│   ├── reducers                           <-Reducers for redux    
│   │   ├── appscreens    
│   │   │   └── homeReducer.js    
│   │   ├── initialState.js               <-Initial State data for redux     
│   │   └── rootReducer.js                <-Combine all screen level reducers here    
│   ├── screens.js                        <-All screens are defined here     
│   └── store                             <-Central Redux Store      
│       └── configureStore.js     
</pre>
