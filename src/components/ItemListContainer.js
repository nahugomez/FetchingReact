import React, {useEffect, useState} from 'react';


const ItemListContainer = () => {
  const [team, setTeam] = useState([]);
  useEffect( ()=>{
    getTeam();
  }, []);


  const getTeam = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const info = await data.json();
    setTeam(info);
  };
  

  return( 
    <>
      <h1>Nosotros</h1>
      {
        team.map(item => {
          return(
            <div className='user' key={team.id}>
              <p>{item.id} - {item.website} - {item.name}</p>
            </div>
          );
        })
      }
    </>
  );
}

export default ItemListContainer;