import {React, useState} from 'react';
import Axios from 'axios';
import { makeStyles } from '@material-ui/styles';

import Controls from '../Controls/Controls'
import Popup from '../../src/Controls/Popup'



const Update = (props) => {

  const useStyles = makeStyles ({
    updateDeletecontainer: {
      display: 'flex',
    },
    updateIcon: {
      width: "20",
      height: "20"
    },
    updateButton: {
      padding: "0",
      width: "5vw",
      fontFamily: `'Montserrat', sans-serif`,
    },
    updateInput: {
      width: "10vw",
    }
  })
  
const [openPopup, setOpenPopup] = useState(false);

  const classes = useStyles()

  const [newName, setNewName] = useState ('');

    const updateName = (id) => {
      
        Axios.put ('http://localhost:3001/update', {
          id: props.clientId,
          newName: newName,
        })
      };
  
  return (
      <div className={classes.updateDeletecontainer}>
        

        <Controls.Input
          className={classes.updateInput}
          type="text"
          onChange={event => {setNewName(event.target.value)}}
        >
        
        </Controls.Input>

        <Controls.Button
          className={classes.updateButton}
          size="small"
          variant="text"
          onClick={() => updateName(props.clientId)}
          text='submit'
         />
        <Popup 
          openPopup = {openPopup}
          setOpenPopup = {setOpenPopup}
        >
        </Popup>
      </div>
  );
};

export default Update;
