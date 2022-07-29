import React, { Component} from 'react';
import { FlatList } from 'react-native';

import data from '../assets/data/servicesData';
import colors from '../config/colors';
import Item from './AddArtistServiceItem';

class ServicesPicker extends Component {
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
        this.props.getServices(data);
    }

    render() {
        const {data} = this.state;
    
        const renderItem = ({ item, index }) => {
            const backgroundColor = item.isSelected ? colors.secondary : colors.primary;

            return (
                <Item
                    item={item}
                    onPress={() => this.selectionHandler(index)}
                    backgroundColor={{ backgroundColor }}
                />
            );
        }; 
        return (   
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                scrollEnable
                scrollEventThrottle = {16}
            />     
        );
    };
}

export default ServicesPicker;
