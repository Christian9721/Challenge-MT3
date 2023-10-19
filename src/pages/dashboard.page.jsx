
import { useCallback, useMemo, useState } from "react";
import CardComponent from "../components/card.component";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../components/modal.component';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { setPendings, changeStatusPending } from '../store/modules/pendings';
import { STATUS } from "../constants/status.constants";
import useCount from "../hooks/useCount";
import Typography from '@mui/material/Typography';
import useDraggable from "../hooks/useDraggable";

const Index = () => {
	const [open, setOpen] = useState(false);
	const dispatch = useDispatch();
  	const { data: pendings } = useSelector((state) => state.pendings);
	const { activeCount, doneCount } = useCount({ source: pendings})
	const {handleDragStart, handleDragEnter } = useDraggable({source: pendings, setPendings });
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleStatus = useCallback((id, status) => {
	dispatch(changeStatusPending({id, status }));
  }, []);

  const pendingElements = useMemo(() => {
	return pendings.map((i, idx) => {
			if (i.status !== STATUS.ACTIVE) return null;
			return (<Grid key={`${i.text}-${idx}`} item lg={3}>
				<CardComponent {...i} handleStatus={handleStatus} onDragStart={(e) => handleDragStart(e, idx)} onDragOver={e => e.preventDefault()} onDragEnter={(e) => handleDragEnter(e, idx)}/>
			</Grid>)
			})
  }, [pendings])
	
	return(
		<>
			<div style={{ border: 'solid', padding: '6rem'}}>
				<Modal open={open} handleClose={handleClose} handleOpen={handleOpen}/>
					<Grid container gap={10} columns={16}>
						<Grid item display="flex" lg={3}>
							<Button sx={{width: '100%', minHeight: '216.516px'}} variant="outlined" startIcon={<AddIcon />} onClick={handleOpen}>
							</Button>
						</Grid>
						{
							pendingElements
						}
					</Grid>
			</div>
			<Grid container spacing={0} marginTop={8}>
				<Grid item xs={2}>
					<Typography variant="h5" component="div">
						Active: {activeCount}
					</Typography>
				</Grid>
				<Grid item xs={4}>
					<Typography variant="h5" component="div">
						Done: {doneCount}
					</Typography>
				</Grid>
			</Grid>
		</>
	)
}

export default Index;