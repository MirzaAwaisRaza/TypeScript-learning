import axios from "axios";
import type { AxiosResponse } from "axios";

// (async function callApi() {
//   try {
//     const fetchData = await axios.get("https://www.example.com/data");
//     const res = await fetchData.data;
//     console.log(res);
//   } catch (error: unknown) {
//     console.log(error);
//   }
// })();

// axios
//   .get("https://www.example.com/data")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

interface Todo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const data: Todo = {
  userId: 1,
  id: 1,
  title: "The dragon house",
  body: "this is the api call",
};

const callAPI = async (data: Todo) => {
  try {
    const res:AxiosResponse<Todo>=await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    console.log(res.data)
  } catch (error:any) {
    if(axios.isAxiosError(error)){
        console.log(error.message)
        if(error.response){
            console.log(`ResponseError ${error.response.status}`)
        }
    }
  }


//   try {
//     const res: AxiosResponse<Todo> = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts/1",
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         data: { username: "example" },
//       },
//     );

//     console.log(res.data);

//     const result=await res.data;
//     console.log(result)

//   } catch (error) {}


};
