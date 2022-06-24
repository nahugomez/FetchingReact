import React from "react";
import ItemListContainer from './components/ItemListContainer';
import PostItems from './components/PostItems';
import "./style.css";

export default function App() {
  return (
    <>
      <ItemListContainer />
      <PostItems />
    </>
  );
}
