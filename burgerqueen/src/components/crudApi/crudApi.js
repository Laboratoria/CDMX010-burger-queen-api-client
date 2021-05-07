import React, {useState, useEffect} from "react";
import {helpHttp} from "../../helpers/helpHttp"
import Order from "../Order/Order";

const CrudApp = () => {
const [db, setDb] = useState([]);
const [dataToEdit, setDataToEdit] = useState(null);

let api = helpHttp();
let url = "http://localhost:5000/products";

useEffect(() => {
    api.get(url).then((res) => {
        console.log(res);
        if(!res.err){
            setDb(res);
        } else {
           setDb(null); 
        }
    })
}, [url]);

const createData = (data) => {
    data.id = Date.now();
    //console.log(data);
};

let options = {
    body: data,
    headers: { "content-type": "application/json" },
  };

  api.post(url, options).then((res) => {
    //console.log(res);
    if (!res.err) {
      setDb([...db, res]);
    } else {
      setError(res);
    }
  });
};

const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    //console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      //console.log(res);
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
};

const deleteData = (id) => {
    let isDelete = window.confirm(
    `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
    let newData = db.filter((el) => el.id !== id);
    setDb(newData);
    } else {
    return;
    }
};

return (
    <div>
    <h2>CRUD App</h2>
    <article className="grid-1-2">
        <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        />
        <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
        />
    </article>
    </div>
);
};

export default CrudApp;