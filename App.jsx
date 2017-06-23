import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.header}</h1>
                <h1>{this.props.content}</h1>
            </div>
        );
    }
}

  App.defaultProps={
        header:"header data", 
        content:"content data"
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