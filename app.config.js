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
            },
            "package": "com.vinilona182.jogo_pegado_rn",
            "versionCode": 1
        },
        "web": {
            "bundler": "metro",
                "favicon": "./assets/images/favicon.png"
        },
        "extra": {
            "eas": {
                "projectId": "45e35ba2-bc54-49f9-8aba-3942561f820e"
            }
        }
    }
}
