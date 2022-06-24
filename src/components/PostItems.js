import React, { useEffect } from 'react';

const PostItems = () => {
  useEffect(() => {
    sendItem();
  }, []);

  const item = JSON.stringify({
    userId: 101,
    id: 101,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  });

  const sendItem = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: item,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const info = await data.json();
    console.log(data);
    console.log(info);
  };

  return (
    <>
      <h1>Hola</h1>
    </>
  );
};

export default PostItems;
