const fetchApiData=()=>{
    fetch ("https://jsonplaceholder.typicode.com/posts")
    .then((result)=> {
        let data=result.json();
        return data;
    }).then((res)=>{
        // console.log(res[1]["title"]);
        let data1='';
        res.map((val)=>{
            data1+=`<li class="api">
            <h2>${val.title}</h2>
            <p>${val.body}</p>
        </li>`
        });
        document.getElementById("fetchApi").innerHTML=data1;
    }).catch((err)=>{console.log(err)})
}
fetchApiData();