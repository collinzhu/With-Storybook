import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";

import { Grid } from "@material-ui/core";
import MediaCard from "../Components/MediaCard";


interface IState{
  id:any;
  title:any;
  year:any;
  poster:any;
  genre:any;
  descriptions:any;
}


export const HomePage  = () => {

  const [ItemArray, setItemArray] = useState<IState[]>([{title: "",year: "",poster:"",id:"", genre:"",descriptions:""}])
  const updateMovie = async () =>{
      console.log("updatemovie called")
      await fetch('https://mymoviesapi.azurewebsites.net/api/Movies')
      .then(response => response.json())
      .then(res => {
          setItemArray(res);
      })
      .catch(() => console.log("it didn't work")
      );

  }
  useEffect(() => {
      updateMovie();
  },[]);
  var Cards: JSX.Element[] = [];

  
  ItemArray?.forEach((el: IState, i: Number) => {
      if (!el || !el.title || !el.poster||!el.year) {
          return;
      }
      Cards.push(
          <Grid key={"card_"+i} item xs ={10} sm={6} md={2} className="MediaGridCard">
              <MediaCard updateMovie={() =>updateMovie()} Id={el.id} Title = {el.title} Year = {el.year} Poster = {el.poster} Genre ={el.genre} Description ={el.descriptions}/>
          </Grid>)
  })

  return (
    <>
      <SearchBar updateMovie={() =>updateMovie()}></SearchBar>
      <Grid container spacing={3} className="MediaGridContainer">
        {Cards}
      </Grid>

    </>

  );
};
