//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

//create component
class HomeScreen extends Component {
    renderButtons() {
        const buttons = [
            {
                name: 'Training',
                screen: 'TrainingMenuScreen'
            },
            {
                name: 'Quiz Mode',
                screen: 'QuizMenuScreen'
            },
            {
                name: 'Opening Explorer',
                screen: 'OpeningExplorerScreen'
            },
            {
                name: 'About This App',
                screen: 'AboutScreen'
            }
        ];
        const renderedButtons = buttons.map((button, i) =>
            <TouchableOpacity
                key={i}
                style={styles.button}
                onPress={() => this.props.navigation.navigate(button.screen)}
            >
                <Text key={i} style={styles.buttonText}>{button.name}</Text>
            </TouchableOpacity>
        );
        return renderedButtons;
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/woodBackground.png')} style={styles.backgroundImage} />
                <Text style={styles.titleHeader}>Essential Openings</Text>
                <Image source={require('../../images/mainLogo2.png')} style={styles.logo} />
                {this.renderButtons()}
            </View>
        );
    }
}

//define styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: 1
    },
    logo: {
        marginBottom: 25
    },
    titleHeader: {
        fontSize: 40,
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        marginBottom: 50
    },
    button: {
        width: '75%',
        marginBottom: 10,
        shadowColor: '#888888',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 3
    },
    buttonText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#EEE',
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: '#333'
    }
});

//export component
export default HomeScreen;
