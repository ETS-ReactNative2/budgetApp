import { create } from "react-native-platform-stylesheet";
import { navy03 } from "../../../src/styles/colors.js";

export default create({
    button: {
        padding: 15
    },
    buttonRaised: {
        borderRadius: 5,
        ios: {
            backgroundColor: navy03
        },
        android: {
            backgroundColor: navy03,
            elevation: 3
        }
    },
    buttonFlat: {},
    buttonLabel: {
        textAlign: "center",
        android: {
            fontWeight: "bold"
        }
    },
    buttonLabelRaised: {
        color: "#FFFFFF"
    },
    buttonLabelFlat: {
        ios: {
            color: navy03
        },
        android: {
            color: navy03
        }
    }
});
