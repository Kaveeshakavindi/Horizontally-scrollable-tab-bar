import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useTheme } from '../ThemeContext'
import { PEOPLE } from '../data/people'
import { TouchableOpacity } from 'react-native-gesture-handler'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchBar = () => {
    const [filteredPeople, setFilteredPeople] = useState([]);
    const [searchText, setSearchText] = useState('');
    const { theme } = useTheme()

    const handleSearch = (text) => {
        setSearchText(text);

        if (text === '') {
            setFilteredPeople([]);
        } else {
            const filteredPeopleList = PEOPLE.filter((person) =>
                person.occupation.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredPeople(filteredPeopleList);
        }
    };

    return (
        <View>
            <View style={[styles.container, { backgroundColor: theme.componentBg }]}>
                <Icon name={'search'} size={15} style={styles.icon} color={theme.primaryText} />
                <TextInput
                    style={[styles.title, { color: theme.secondaryText }]}
                    placeholder="Search craftman"
                    value={searchText}
                    onChangeText={handleSearch}
                    placeholderTextColor={theme.secondaryText}
                />
            </View>
            <View style={[styles.filteredList, { backgroundColor: theme.componentBg }]}>
                <ScrollView>
                    {filteredPeople.map(person => (
                        <View key={person.id}>
                            <TouchableOpacity key={person.id} >
                                <View style={styles.singleFilter}>
                                    <Text style={[styles.filteredName, {color: theme.primaryText}]}>{person.name}</Text>
                                    <Text style={[styles.filteredOccupation, {color: theme.primaryText}]}>{person.occupation}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: windowWidth * 0.9,
        alignSelf: 'center',
        marginTop: 30,
       padding: 10,
        borderRadius: 15
    },
    icon: {
        marginHorizontal: 20
    },
    filteredList: {
        position: 'absolute',
        top: 90,
        zIndex: 1000,
        width: windowWidth * 0.8,
        alignSelf: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        elevation: 5
    },
    singleFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    filteredName: {
        fontSize: 15,
        paddingHorizontal: 20,
        padding: 10,
        fontFamily: 'Product-Sans-Bold'
    },
    filteredOccupation: {
        fontSize: 12,
        fontFamily: 'Product-Sans-Regular'
    }
})
export default SearchBar
