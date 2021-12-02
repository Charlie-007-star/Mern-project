import React, {useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from "./Post/Post";
import useStyles from "./styles";


const Posts = () => {

    
    const posts = useSelector((state)=> state.post)

    const classes = useStyles();

    const [data, setData] = useState([])

    useEffect(() => {
        
        //console.log(data);
        setData([...posts])
        console.log('posts',posts);
    }, [posts])
    
  
  
    return ( 
        
      data.length===0 ? <CircularProgress /> : (
          <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
                {data.map((post)=>
(
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} />
                    </Grid>
)
                )}
          </Grid>
      )
    )
}

export default Posts;

