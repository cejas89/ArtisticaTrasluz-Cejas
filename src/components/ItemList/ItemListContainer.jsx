import React from "react";
import { ItemList } from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import customFetch from "../../utils/customFetch";
import { CircularProgress } from "@mui/material";
import { collection, docs, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const ItemListContainer = () => {
  const { categoria } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(categoria);

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, "items");
      const response = await getDocs(query);
      console.log(response);
      const data = response.docs.map((doc) => {
        const newDocs = {
          ...doc.data(),
          id: doc.id,
        };
        return newDocs;
      });
      console.log("datos", data);
      if (!categoria) {
        setData(data);
        setLoading(false);
      } else {
        const nuevaData = data.filter(
          (producto) => producto.categoria === categoria
        );
        setData(nuevaData);
        setLoading(false);
      }
    };
    getData();
  }, [categoria]);

  /*  useEffect(() => {
      customFetch.then(data => {
        if(!categoria){
        setData(data)
        setLoading(false)
      } else {
        const nuevaData = data.filter(producto => producto.categoria === categoria )
        setData(nuevaData);
        setLoading(false)
      }
      })
    }, [categoria])*/

  console.log(data);

  return (
    <>
      {loading ? (
        <h1>
          <div class="text-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </h1>
      ) : (
        <ItemList data={data} />
      )}
    </>
  );
};
