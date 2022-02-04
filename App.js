import React,{ useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoList from './TodoList';

const App =()=>{

    const [inputList,setInputList]= useState('');
    const [items,setItems]= useState([]);

    const handleChange =(e)=>{
           setInputList(e.target.value);
    };

    const handleClick=()=>{
        setItems((oldItems)=>{
            return[...oldItems,inputList];
        })
        setInputList("");
    };

    const handleDelete=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                 return index !== id;
            })
        })
    };
   
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>My Todo App </h1>
                    <br />
                    <input type='text' placeholder='Add your items' onChange={handleChange}
                        value={inputList}
                    />
                    <button onClick={handleClick}>Add</button>

                    <ol>
                        {/*Map method used with array*/}
                        {items.map((itemVal,index)=>{
                           return <TodoList key={index}
                                            id={index} 
                                            text={itemVal}
                                            onSelect={handleDelete}    
                                            />
                        })}
                        
                    </ol>
                </div>
            </div>
        </>
    )
};
export default App;