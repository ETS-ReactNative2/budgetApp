import React, { Component } from "react";
import {
    Text,
    View,
    Platform,
    TouchableHighlight,
    TouchableOpacity,
    TouchableNativeFeedback
} from "react-native";
import styles from "./styles";
import { navy05 } from "../../../src/styles/colors.js";

const ButtonWrapper = ({ customButtonStyles, raised, onPress, children }) => {
    // All Android Buttons should have the ripple effect
    if (Platform.OS === "android") {
        // Raised Android buttons need a white ripple
        if (raised) {
            return (
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple("#FFF")}
                >
                    <View
                        style={[
                            styles.button,
                            styles.buttonRaised,
                            customButtonStyles
                        ]}
                    >
                        {children}
                    </View>
                </TouchableNativeFeedback>
            );
        }

        // Normal Android buttons get a gray ripple
        return (
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple()}
            >
                <View
                    style={[
                        styles.button,
                        styles.buttonFlat,
                        customButtonStyles
                    ]}
                >
                    {children}
                </View>
            </TouchableNativeFeedback>
        );
    }

    // iOS raised buttons use TouchableHighlight
    if (raised) {
        return (
            <TouchableHighlight
                style={[styles.button, styles.buttonRaised, customButtonStyles]}
                underlayColor={navy05}
                onPress={onPress}
            >
                {children}
            </TouchableHighlight>
        );
    }

    // Normal iOS buttons use TouchableOpacity
    return (
        <TouchableOpacity
            style={[styles.button, styles.buttonFlat, customButtonStyles]}
            onPress={onPress}
            underlayColor={navy05}
        >
            {children}
        </TouchableOpacity>
    );
};

class Button extends Component {
    renderLabel() {
        const coreLabelStyles = [styles.buttonLabel];
        if (this.props.raised) {
            coreLabelStyles.push(styles.buttonLabelRaised);
        } else {
            coreLabelStyles.push(styles.buttonLabelFlat);
        }
        labelStyles = [...coreLabelStyles, this.props.customLabelStyles];

        let labelText = this.props.label || "";
        if (Platform.OS === "android") {
            labelText = labelText.toUpperCase();
        }

        return (
            <Text style={labelStyles}>
                {labelText}
            </Text>
        );
    }

    render() {
        return (
            <ButtonWrapper {...this.props}>
                {this.renderLabel()}
            </ButtonWrapper>
        );
    }
}

export default Button;