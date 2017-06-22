import React from 'react';

class App extends React.Component {

    constructor(){
        super();

        this.state = {
            data:[
                {
                    "id":1,
                    "name":"vishal"
                },
                {
                    "id":2,
                    "name":"krinal"
                },
                {
                    "id":3,
                    "name":"nivaan"
                }
            ]
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Table data={this.state.data} border={1}/>
            </div>
        );
    }
}

class Table extends React.Component{
    render(){
        return(
            <table>
                <tbody>
                    {this.props.data.map((person,i)=> <TableRow key={i} data = {person} />)}
                </tbody>
            </table>
        );
    }
}

class TableRow extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
            </tr>
        );
    }
}
class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>Header Content</h1>
            </div>
        );
    }
}


// class Content extends React.Component {
//     render() {
//         return(
//             <div>Content data</div>
//         );
//     }
// }

export default App;