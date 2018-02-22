//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

// create component
class TrainingMenuScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/woodBackground.png')} style={styles.backgroundImage} />
                <View style={styles.headerRow}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.backButtonContainer}
                    >
                    </TouchableOpacity>
                    <Text style={styles.header}>Training Menu</Text>
                </View>
            </View>
        );
    }
}

// define styles
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
    headerRow: {
        position: 'absolute',
        top: 40,
        left: 30,
        flexWrap: 'wrap', 
        alignItems: 'flex-start',
        flexDirection:'row',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
    backButtonContainer: {
        height: 20,
        width: 80,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        position: 'relative',
        left: -30
    },
    backButton: {
        height: 20,
        width: 20,
        borderStyle: 'solid',
        borderColor: 'black',
        borderTopWidth: 0,
        borderRightWidth: 3,
        borderBottomWidth: 3,
        borderLeftWidth: 0,
        padding: 3,
        transform: [
            { rotate: '135deg' },
        ],
        position: 'relative',
        left: 30
    },
    header: {
        fontSize: 28,
        position: 'relative',
        top: -5
    }
});

//export component
export default TrainingMenuScreen;
