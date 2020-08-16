import React, {useState} from 'react'
import MaterialTable from 'material-table'
import PLdata from'./Tdata'
import Modal from 'react-modal'
import { ModalBody, ModalFooter } from 'react-bootstrap'
import MData from './ModalData'
Modal.setAppElement('#root')


const Table =()=>{
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [team_name, setTeamName] = useState(0)
    const [wins, setTeamWins] = useState(0)
    const [draws, setTeamDraws] = useState(0)
    const [losses, setTeamLosses] = useState(0)
    const [played, setTeamPlayed] = useState(0)

    var titleName = PLdata.map( item => item.name )
   
    
    // console.log('ok',PLdata[0]['rounds'])     
    
    function abc(e){
        setTeamName(e.target.id)
        setTeamWins(stats[e.target.id]['win'])
        setTeamDraws(stats[e.target.id]['draw'])
        setTeamLosses(stats[e.target.id]['lost'])
        setTeamPlayed(stats[e.target.id]['played'])
        setModalIsOpen(true);
    }

    var data = []
    var stats = {}
    for (var i = 0; i < PLdata[0]['rounds'].length; i += 1){
        // console.log('here', PLdata[0]['rounds'][i]['matches'])
        for(var j = 0; j < PLdata[0]['rounds'][i]['matches'].length; j += 1){
            var date_match = PLdata[0]['rounds'][i]['matches'][j]['date']
            var team1 = PLdata[0]['rounds'][i]['matches'][j]['team1']
            var team2 = PLdata[0]['rounds'][i]['matches'][j]['team2']//setTeam2(team1);setModalIsOpen(true);
            var teams = <p><a href = "#" id={team1} onClick ={(e) =>  abc(e) }>{team1}</a> VS <a href = "#"id={team2} onClick ={(e) =>  abc(e) }>{team2}</a></p>//PLdata[0]['rounds'][i]['matches'][j]['team1'] + ' vs ' + PLdata[0]['rounds'][i]['matches'][j]['team2']
            var sc1 = PLdata[0]['rounds'][i]['matches'][j]['score']['ft'][0]
            var sc2 = PLdata[0]['rounds'][i]['matches'][j]['score']['ft'][1]
            var score = <p style = {{color:"red"}}>{sc1 + '-' + sc2}</p>
            
            if (stats.hasOwnProperty(team1) === false){
                stats[team1] = {}
                stats[team1]['win']=0
                stats[team1]['lost']=0
                stats[team1]['draw']=0
                stats[team1]['played']=0
            }
            if (stats.hasOwnProperty(team2) === false){
                stats[team2] = {}
                stats[team2]['win']=0
                stats[team2]['lost']=0
                stats[team2]['draw']=0
                stats[team2]['played']=0
            } 
            if (sc1 > sc2){
                stats[team1]['win'] += 1
                stats[team2]['lost'] += 1 
            }
            else if (sc2 > sc1){
                stats[team2]['win'] += 1
                stats[team1]['lost'] += 1
            }
            else{
                stats[team1]['draw'] += 1
                stats[team2]['draw'] += 1
            }
            
            stats[team1]['played']+=1
            stats[team2]['played']+=1

            var obj = {
                date: date_match,
                team: teams,
                scores: score
            }
            data.push(obj)
        }
    }

    // console.log(stats)
       

    // console.log(data);
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
    

    return (
        <div>
            <h1>{titleName}</h1>

            <MaterialTable 
            
            data = {data}
            columns = {columns}
            options ={{search:false, showTitle: false, pageSize : 10} }
            
            />
            
            { <Modal isOpen = {modalIsOpen}
            onRequestClose = {() => setModalIsOpen(false)}
            style={{
                overlay: {
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                  position: 'center',
                  top: '40px',
                  left: '40px',
                  right: '40px',
                  bottom: '40px',
                  border: '1px solid #ccc',
                  background: '#fff',
                  overflow: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  borderRadius: '4px',
                  outline: 'none',
                  padding: '20px'
                }
              }}>
                                

                <ModalBody> 
                     <MData team_name = {team_name} played = {played} wins = {wins} losses ={losses} draws = {draws}/> 
                </ModalBody>
                
                <ModalFooter ><button onClick ={() => setModalIsOpen(false)}>Close</button></ModalFooter>
            </Modal>
            
    }
        </div>

    )


}

export default Table



