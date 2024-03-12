export function RenderList(){
    const studentList = [
        {name: 'Tom', age: 23, id: '1-1'},
        {name: 'Tom2', age: 23, id: '1-2'},
        {name: 'Tom3', age: 23, id: '1-3'},
        {name: 'Tom4', age: 23, id: '1-4'},
        {name: 'Tom5', age: 23, id: '1-5'},
        {name: 'Tom6', age: 23, id: '1-6'},
    ];

    return <>
    {
        studentList.map(x=>(
            <div key={x.id}>
                <span>Name: {x.name}</span>&nbsp;&nbsp;
                <span>age: {x.age}</span>
            </div>
        ))
    }
    </>
}