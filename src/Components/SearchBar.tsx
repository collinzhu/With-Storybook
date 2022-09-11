import React, { useState } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

import axios from 'axios';



interface ISearchBar{
    updateMovie:()=>void;
}

function SearchBar(props:ISearchBar) {
//function SearchBar() {    
    const [input, setInput] = useState<string | undefined>("");
    const handleInputChange = (s:string|undefined) =>{
        setInput(s);
    }

    const handleSubmit = async () =>{
       console.log("submit called")
        let ok = {
            url:input
        }
      
        await axios.post('https://mymoviesapi.azurewebsites.net/api/Movies', ok)
        .then(() =>{
            console.log("added a movie")
            props.updateMovie();
        })
        // axios.delete('https://mymoviesapi.azurewebsites.net/api/Movies/36')
        // .then(() =>{
        //     props.updateMovie();
        //     console.log("delete a movie")
        // })
    }
    return <div className="SearchBarContainer">
    <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
            <TextField
                required
                placeholder = "Movie URL" 
                value = {input}
                onChange = {e => handleInputChange(e.target.value)}
 
   
            />
        </Grid>
        <Grid item xs={6} sm={3}>
            <Button type='button'  onClick = {handleSubmit}>
                Submit
            </Button>
        </Grid>
    </Grid>
</div>



}

export default SearchBar