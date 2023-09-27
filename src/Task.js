import React, { useEffect, useInsertionEffect, useState } from 'react'
import './task.css'

function Task() {
    const [currentTask, setCurrentTask] = useState([])
    const [completedTask, setCompletedTask] = useState([])
    let completedArray = [...completedTask];
    let arr = [...currentTask]

    function resetTas() {
        setCurrentTask([])
        setCompletedTask([])
        localStorage.removeItem("currenttask")
        localStorage.removeItem("confirmedtask")
    }

    const [task, setTask] = useState("")
    console.log(task)



    function addTask() {
        arr.push(task)
        setCurrentTask(arr)
        localStorage.setItem("currenttask", arr)
        console.log("localscew", localStorage.getItem("currenttask"))
        document.querySelector(".inputb").value = "";
    }

    function checkTask(index1) {
        console.log(index1);
        completedArray.push(arr[index1]);
        let spliced = arr.splice(index1, 1)
        console.log("Complete", completedArray);
        console.log("Active", arr);
        setCompletedTask(completedArray.reverse())
        setCurrentTask(arr)
        localStorage.setItem("currenttask", arr)
        console.log("localscew", localStorage.getItem("currenttask"))
        localStorage.setItem("confirmedtask", completedArray)
        console.log("local confired", localStorage.getItem("confirmedtask"))
    }

    function deleteTask(index) {
        let spliced = arr.splice(index, 1)
        console.log(spliced);
        setCurrentTask(arr)
        console.log(currentTask);
        localStorage.setItem("currenttask", arr)
        console.log("localscew", localStorage.getItem("currenttask"))
    }

    useEffect(()=>{
        let arr1 = ("localscew", localStorage.getItem("currenttask"))
        let arr2 = ("local confired", localStorage.getItem("confirmedtask"))
        console.log(arr1);
        if(arr1 !== null){
            setCurrentTask(arr1.split(","))
        }
        if(arr2!==null){
            setCompletedTask(arr2.split(","))
        }
    },[])



    return (
        <div>
            <input onChange={(e) => setTask(e.target.value)} className="inputb"></input>
            <button onClick={addTask} className='addbtn'>Add</button>
            <button onClick={resetTas} className='resetbtn'>Reset</button>
            <div className='mindiv'>
                <div className='subdiv1'>
                    <p className='title'>Current Tasks</p>
                    {
                        currentTask.filter(item1=>item1!=="" && item1!==null && item1!==undefined).map((item, index) => (
                            <div className='mapdiv'>
                                <p key={index} className="taskList">{item}<button onClick={() => checkTask(index)} className="currentBtn">&#10003;</button><button className="currentBtn" onClick={() => deleteTask(index)}>&#128465;</button></p>
                                
                            </div>
                        ))
                    }
                </div>
                <div className='subdiv'>

                    <p className='title'>Completed Tasks</p>
                    {
                        completedTask.map((item,index) => (
                            <div className='mapdiv'>
                                <p className="taskList">{index+1}. {item}</p>
                                {/* <hr style={{border:"1px solid darkcyan"}}/> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Task