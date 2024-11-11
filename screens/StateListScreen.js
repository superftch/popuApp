import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';

const StateListScreen = ({ navigation }) => {
    const [states, setStates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStatesData();
    }, []);

    const fetchStatesData = async () => {
        try {
            const response = await fetch('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest');
            const json = await response.json();
            setStates(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('MapScreen', { stateName: item.State })}
        >
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.thumbnail}
            />
            <View>
                <Text style={styles.stateName}>{item.State}</Text>
                <Text style={styles.population}>Population: {item.Population.toLocaleString()}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#003f5c" />
            ) : (
                <FlatList
                    data={states}
                    keyExtractor={(item) => item['ID State']}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    stateName: {
        fontSize: 18,
        fontWeight: '600',
    },
    population: {
        fontSize: 14,
        color: 'gray',
    },
});

export default StateListScreen;
