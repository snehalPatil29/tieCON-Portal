import React, { Component } from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { DBUtil } from '../../services';
import {AsyncStorage} from 'react'

const sessionTable = "Sessions";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sessionList: []
    }
  }
  
  componentWillMount(){
   let componentRef = this;
    DBUtil.addChangeListener(sessionTable, function (objectList) {
       let sessions = [];
      objectList.forEach(function(doc){
        sessions.push({id:doc.id , sessionInfo:doc.data()})
      })
       componentRef.setState({ sessionList: sessions })
       let sessionObject = JSON.stringify(sessions);
       localStorage.setItem('sessionList', sessionObject);
    })

    DBUtil.addChangeListener("Events", function (objectList) {
      let events = [];
      objectList.forEach(function(doc){
        events.push(doc.data())
     })
      let eventObject = JSON.stringify(events);
      localStorage.setItem('eventList', eventObject);
   })

  }

  render() {
    return (
      <div className="animated fadeIn">
      </div>
    )
  }
}
export default Dashboard;















