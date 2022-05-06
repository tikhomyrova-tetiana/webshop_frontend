import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner/Banner";

function CategoryPage() {
  // const {id} = useParams()

  return (
    <div>
      <Banner />
      <h1>Category</h1>
    </div>
  );
}

export default CategoryPage;
