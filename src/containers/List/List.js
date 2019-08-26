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

    showListData() {

    }

    render() {
        const listData = this.state.list.map(currentList => {
            return <ListTable list={currentList}></ListTable>
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

function ListItems(props) {
    let items = props.listItems;
    let rows = [];
    items.forEach(item => {
        let row = <tr>{item}</tr>
        rows.push(row);
    });
    return rows;
}

function ListTable(props) {
    let list = props.list;
    const items = <ListItems listItems={list.listItems}></ListItems>
    return (
        <table>
            <tr>
                <th>{list.listName}</th>
            </tr>
            {items}
        </table>
    )
}

export default List;