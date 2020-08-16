import React from 'react'
import MaterialTable from 'material-table'
import PLdata from'./Tdata'


const Table =()=>{
    

    const titleName = PLdata.map( item => item.name )
    const matches = PLdata.map(item => item.rounds.map(i => i.matches.map(i=> (<p> <a href = "#">{i.team1}</a> vs <a href = "#">{i.team2}</a></p>))))
    const matchDate = PLdata.map(item =>item.rounds.map(i => i.matches.map(i => (<p>{i.date}</p>))))
    const scores = PLdata.map(item => item.rounds.map(i => i.matches.map(i =>(<p id = "s">{i.score.ft[0]} - {i.score.ft[1]}</p>))))
    
        
    
    //console.log(scores)
       const data = [
                {   date: matchDate, 
                    team: matches, 
                    scores : scores
                }
                    ]

    const columns = [
        {
          title : 'Date', field : 'date'
        },
        {
            title: 'Team', field: 'team'
        },
        {
            title: 'Score', field: 'scores'
        }
    ]
    //Modal start
 
    
    //Modal ends



    return (
        <div>
            <h1>{titleName}</h1>
            <MaterialTable 
            
            data = {data}
            columns = {columns}
            options ={{search:false, showTitle: false} }
            
            />
   
        </div>
    )


}

export default Table



