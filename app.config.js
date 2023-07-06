export default {
    expo: {
        "name": "jogo-pegado-rn",
            "slug": "jogo-pegado-rn",
            "version": "1.0.0",
            "orientation": "portrait",
            "icon": "./assets/images/icon.png",
            "scheme": "myapp",
            "userInterfaceStyle": "automatic",
            "splash": {
            "image": "./assets/images/splash.png",
                "resizeMode": "contain",
                "backgroundColor": "#ffffff"
        },
        "assetBundlePatterns": [
            "**/*"
        ],
            "ios": {
            "supportsTablet": true
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/images/adaptive-icon.png",
                    "backgroundColor": "#ffffff"
            }
        },
        "web": {
            "bundler": "metro",
                "favicon": "./assets/images/favicon.png"
        }
    },
    extra: {
        eas: {
            projectId: "45e35ba2-bc54-49f9-8aba-3942561f820e"
        },
        firebaseApiKey: "AIzaSyCxhC_xA5_qFqBeBF_54J-womfsLaT0HZg",
        firebaseAuthDomain: "jogo-pegado.firebaseapp.com",
        firebaseProjectId: "jogo-pegado",
        firebaseStorageBucket: "jogo-pegado.appspot.com",
        firebaseMessagingSenderId: "987130126184",
        firebaseAppId: "1:987130126184:web:b451d83f149563205840dd",
        firebaseMeasurementId: "G-DZP52W167G"
    }
}
