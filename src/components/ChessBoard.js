//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create component
class ChessBoard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ChessBoard</Text>
            </View>
        );
    }
}

// define styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//export component
export default ChessBoard;
