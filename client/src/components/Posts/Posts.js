import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from "./Post/Post";
import useStyles from "./styles";


const Posts = ({setCurrentId}) => {

    
    const posts = useSelector((state)=> state.post)
    const classes = useStyles();

    const [data, setData] = useState([])

    useEffect(() => {

        setData([...posts])
    }, [posts])
    
  
  
    return ( 
        
      data.length===0 ? <CircularProgress /> : (
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {data.map((post)=>(
                    <Grid  key={post._id} item xs={12} sm={6}>
                        <Post post={post} setcurretId={setCurrentId} />
                    </Grid>
                    ))}
          </Grid>
      )
    )
}

export default Posts;

