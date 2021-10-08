import Popup from '../../src/Controls/Popup'
import Update from '../Components/Update'
import Controls from '../Controls/Controls';
import React from 'react';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import Delete from '../Components/Delete'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles ({
    updeleteContainer: {
        display: 'flex',
        justifyContent:' center',
        alignContent: 'center',
        alignItems: 'center',
    }
})


export default function Updelete(props) {

    const [openPopup, setOpenPopup] = React.useState(false);
    const classes = useStyles()

    const {clientId} = props;
    return(
        <div className={classes.updeleteContainer}>
        <Controls.Button
            text={<EditOutlinedIcon />}
            onClick = {() => setOpenPopup(true)}
            variant="text"
        >
        
        </Controls.Button>
        <Delete />
        <Popup
            openPopup={openPopup}
            setOpenPopup = {setOpenPopup}
            
        >
            
            <Update 
                clientId={clientId}
                ></Update>
        </Popup>
        </div>
    )
}