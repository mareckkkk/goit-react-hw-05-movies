import{r as t,j as s}from"./index-DaKhgjUA.js";import{g as o}from"./apiMoviedb-CeEDxve7.js";import{T as i}from"./TrendingList-DoZHZMIa.js";const a=()=>{const[e,r]=t.useState([]);return t.useEffect(()=>{o().then(n=>r(n))},[]),{trendingMovies:e}},c=()=>{const{trendingMovies:e}=a();return s.jsx("div",{children:s.jsx(i,{movies:e})})};export{c as default};