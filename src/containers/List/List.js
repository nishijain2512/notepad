import React, { Component } from 'react';
import classes from './List.css';
//import ListItem from '../../components/ListItem/ListItem';

class List extends Component {
    state = {
        list: [{
            listName: 'List 1',
            listItems: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ]
        },
        {
            listName: 'List 2',
            listItems: [
                'Item A',
                'Item B',
                'Item C',
                'Item D'
            ]
        },
        {
            listName: 'List 3',
            listItems: [
                'Item AA',
                'Item BB',
                'Item CC',
                'Item DD'
            ]
        }
        ]
    }   

    showListData () {

    }

    render() {
        const listData = this.state.list.map(currentList => {
            const items = currentList.listItems.map(item => {
                return(
                    <tr>
                        <td>{item}</td>
                    </tr>
                )
            })
            return (
                <table>
                    <tr>
                        <th>{currentList.listName}</th>
                    </tr>
                    {items}
                </table>
            )

        })

        return (
            <div className={classes.List}>
                <input type="text" name="Enter listname"></input>
                <input type="submit" onClick={this.showListData()}></input>
                {listData}
            </div>
        );
    }


}

export default List;