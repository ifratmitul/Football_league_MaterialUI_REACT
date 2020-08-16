import React, { Component } from 'react'
export class ModalData extends Component {
    
    
    render() {
        let data = {
            team : this.props.team_name,
            played : this.props.played,
            wins : this.props.wins,
            los: this.props.losses,
            draw: this.props.draws
        }
       // console.log(data)
       

        
        return (
            <div className = "Dtable">

            <h1>{data.team}</h1>
            <table style = {{textAlign: "center", marginRight: "auto", marginLeft:"auto"}}>
                    <tr >
                        <th>Played</th>
                        <th></th>
                        <th>Win</th>
                        <th></th>
                        <th>Loss</th>
                        <th></th>
                        <th>Draw</th>
                    </tr>
                    <tr>
                        <td>{data.played}</td>
                        <td></td>
                        <td>{data.wins}</td>
                        <td></td>
                        <td>{data.los}</td>
                        <td></td>
                        <td>{data.draw}</td>
                    </tr>
                    
            </table>
            </div>
        )
    }
}

export default ModalData
