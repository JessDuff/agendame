import React, { Component} from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useFormikContext } from 'formik';

import data from '../assets/data/days';
import colors from '../config/colors';
import Text from './admincomps/AdminText';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.day, backgroundColor]}>
        <Text style={[textColor]}>{item.id}</Text>
    </TouchableOpacity>
);

class DaysPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: data,
        }
    }
    componentDidMount() {
        let arr = this.state.data.map((item, index)=>{
            item.isSelected = false
            return{...item};
        });
        this.setState({data: arr});
    }  
    selectionHandler= (ind)=> {
        const {data} = this.state;
        let arr = data.map((item, index)=>{
            if (ind === index) {
                item.isSelected = !item.isSelected;
            }
            return {...item}
        });
        this.setState({data: arr});
        this.props.getDays(data);
    }

    render() {
        const {data} = this.state;
    
        const renderItem = ({ item, index }) => {
            const backgroundColor = item.isSelected ? colors.black : colors.white;
            const color = item.isSelected ? colors.white : colors.black;
        
            return (
                <Item
                    item={item}
                    onPress={() => this.selectionHandler(index)}
                    backgroundColor={{ backgroundColor }}
                    textColor={{ color }}
                />
            );
        }; 
        return (   
            <FlatList
                contentContainerStyle={styles.daysContainer}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />      
        );
    };
}

const styles = StyleSheet.create({
    day: {
        alignItems: 'center',
        borderColor: colors.black,
        borderWidth: 1,
        width: 50,
    },
    daysContainer: {
        borderColor: colors.black,
        borderWidth: 1,
        flexDirection: 'row',
        marginTop: 25,
    },
});

export default DaysPicker;
