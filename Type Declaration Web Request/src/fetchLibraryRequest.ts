// {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

interface Blueprint {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const callAPI = async () => {
  try {
    const fetchData = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    if (!fetchData.ok) {
      console.log(`ResponseError: ${fetchData.status}`);
    }
    const resData:Blueprint=await fetchData.json()
    console.log(resData)
  } catch (error) {}
};
