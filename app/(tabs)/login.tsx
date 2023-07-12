import * as firebase from "firebase/app";
import "firebase/auth";
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseAuthApplicationVerifier
} from "expo-firebase-recaptcha";
import {useRef, useState} from "react";
import {Button, ScrollView, TextInput, View, StyleSheet} from "react-native";
import {Label} from "react-query/types/devtools/Explorer";


//
// const firebaseConfig = {
//   apiKey: "AIzaSyCxhC_xA5_qFqBeBF_54J-womfsLaT0HZg",
//   authDomain: "jogo-pegado.firebaseapp.com",
//   projectId: "jogo-pegado",
//   storageBucket: "jogo-pegado.appspot.com",
//   messagingSenderId: "987130126184",
//   appId: "1:987130126184:web:b451d83f149563205840dd",
//   measurementId: "G-DZP52W167G"
// };
//
// try {
//
//   firebase.initializeApp(firebaseConfig);
// } catch (e) {
//   console.log(e)
// }


export default function Login() {
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [verificationCode, setVerificationCode] = useState("");
  // const [verificationId, setVerificationId] = useState("");
  // const recaptchaVerifier = useRef(null);
  //
  // const onPressSendVerificationCode = async () => {
  //   const phoneProvider = new firebase.auth.PhoneAuthProvider();
  //
  //   console.log(recaptchaVerifier);
  //   const verificationId = await phoneProvider.verifyPhoneNumber(
  //       phoneNumber, // don't forget international id before phone number
  //       recaptchaVerifier.current
  //   );
  //
  //   console.log("verificationId", verificationId);
  //   setVerificationId(verificationId);
  // };

  return (
      <ScrollView
          style={{
            width: "100%",
            backgroundColor: "#F6F6F6"
          }}
      >
        {/*<View style={{ width: "100%", flex: 1, paddingHorizontal: 30 }}>*/}
        {/*  <Label>Login</Label>*/}
        {/*  <FirebaseRecaptchaVerifierModal*/}
        {/*      ref={recaptchaVerifier}*/}
        {/*      firebaseConfig={firebase.app().options}*/}
        {/*  />*/}


        {/*  <Text style={styles.text}>Enter the phone number</Text>*/}

        {/*  <TextInput*/}
        {/*      placeholder='+2547000000'*/}
        {/*      autoFocus*/}
        {/*      autoCompleteType='tel'*/}
        {/*      keyboardType='phone-pad'*/}
        {/*      textContentType='telephoneNumber'*/}
        {/*      onChangeText={setPhoneNumber}*/}
        {/*  />*/}

        {/*  <Button onPress={onPressSendVerificationCode} mode="contained">*/}
        {/*    Send code*/}
        {/*  </Button>*/}

        {/*  <Text style={styles.text}>Enter the verification code</Text>*/}

        {/*  <TextInput*/}
        {/*      editable={!!verificationId}*/}
        {/*      placeholder= "123456"*/}
        {/*      onChangeText={setVerificationCode}*/}
        {/*  />*/}

        {/*  <Button*/}
        {/*      onPress={() => {*/}
        {/*        console.log(phoneNumber);*/}
        {/*        console.log(verificationId);*/}
        {/*        console.log(verificationCode);*/}
        {/*      }}*/}
        {/*      mode="contained"*/}
        {/*  >*/}
        {/*    Validate*/}
        {/*  </Button>*/}
        {/*</View>*/}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  text:{
    color: "#aaa"
  },
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
