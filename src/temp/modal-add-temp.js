// const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

//API
// const baseUrl = "https://todo.api.devcode.gethired.id/todo-items/";
// const [item, setItem] = useState([]);
// const [loading, setLoading] = useState([false]);

//get data axios
// useEffect(() => {
//     const getData = async () => {
//         try {
//             const response = await axios.get(baseUrl);
//             setItem(response.data.data);
//             setLoading(true);
//         } catch (error) {
//             console.error(error.message);
//         }
//     };

//     getData();
// }, []);

// const [inputData, setInputData] = useState({
//     title: "",
//     priority: "",
// });
// function handleChange(e) {
//     let newFormState = { ...inputData };
//     newFormState[e.target.title] = e.target.value;
//     setInputData(newFormState);
// }

// function handleSubmit(e) {
//     e.preventDefault();
//     let data = [...activities];

//     if (inputData.title === "") {
//         return false;
//     }
//     if (inputData.priority === "") {
//         return false;
//     }

//     if (isUpdate.status) {
//         data.forEach((activities) => {
//             if (activities.id === isUpdate.id) {
//                 activities.title = inputData.title;
//                 activities.priority = inputData.priority;
//             }
//         });
//         api.put("/activities/" + isUpdate.id, {
//             id: isUpdate.id,
//             title: inputData.title,
//             priority: inputData.priority,
//         }).then(() => {
//             alert("Data berhasil di update");
//         });
//         // update berdasarkan id
//     } else {
//         let toSave = {
//             id: uid(),
//             title: inputData.title,
//             priority: inputData.priority,
//         };
//         data.push(toSave);

//         // menambahkan data
//         api.post("/activities", toSave).then(() => {
//             alert("Data berhasil ditambah");
//         });
//     }
//     setActivities(data);
//     setIsUpdate(false);
//     setInputData({ title: "", priority: "" });
// }

/* <form onSubmit={handleSubmit} className="px-3 py-4">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        className="form-control"
                        defaultValue={inputData.title}
                        name="title"
                    />
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="">No. priority</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        defaultValue={inputData.priority}
                        className="form-control"
                        name="priority"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mt-3"
                    >
                        Save
                    </button>
                </div>
            </form> */

// const [title, setTitle] = useState("");
// const [priority, setPriority] = useState("");

// const sendApi = () => {
//     axios.post(api, { title, priority });
// };

// useEffect(() => {
//     setTitle(localStorage.getItem("title"));
//     setPriority(localStorage.getItem("priority"));
// }, []);

//axios Add data
// const [data, setData] = useState({
//     title: "",
//     priority: "",
// });

// const handleChange = (e) => {
//     const value = e.target.value;
//     setData({
//         ...data,
//         [e.target.name]: value,
//     });
// };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const userData = {
//         title: data.title,
//         priority: data.priority,
//     };
//     api.post("/activities", userData).then((response) => {
//         console.log(response.status);
//         console.log(response.data.token);
//     });
// };
