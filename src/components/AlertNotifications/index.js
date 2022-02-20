// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="bg-container">
    <h1>Alert Notifications</h1>
    <div className="notifications-container">
      <Notification>
        <AiFillCheckCircle className="icon green" />
        <div className="about-container">
          <h1 className="name green">Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </Notification>
      <Notification>
        <RiErrorWarningFill className="icon red" />
        <div className="about-container">
          <h1 className="name red">Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </Notification>
      <Notification>
        <MdWarning className="icon yellow" />
        <div className="about-container">
          <h1 className="name yellow">Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </Notification>
      <Notification>
        <MdInfo className="icon blue" />
        <div className="about-container">
          <h1 className="name blue">Info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
