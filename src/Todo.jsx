import react, { useState } from 'react';


const Todo=()=>{

const[inputdata,setinputdata]=useState('');
const[item,setitems]=useState([]);
const[togglesubmit,settogglesubmit]=useState(true);
const[isedititem,setisedititem]=useState(null);

const additem=()=>{

    if(!inputdata){

        alert("can't blank")

    }
    else if(inputdata && !togglesubmit){
        setitems(
            item.map((ele)=>{
                if(ele.id===isedititem){
                    return {...ele, name:inputdata}
                }
                return ele;
            })
        )

        settogglesubmit(true);
        setinputdata('');
        setisedititem(null);

    }
    else{

        const allinputdata={id: new Date().toString(), name:inputdata}

        console.log(allinputdata.id);


        setitems([...item,allinputdata]);
        setinputdata('');

    }

   




}

const deleteitem=(index)=>{


    const updateitem=item.filter((ele)=>{
       

        return index !==ele.id;
    })

    setitems(updateitem);


}

const edititem=(id)=>{

    let neweditiem=item.find((ele)=>{

return ele.id===id


    })
    console.log(neweditiem);
    settogglesubmit(false);
    setinputdata(neweditiem.name);
    setisedititem(id);
}




return(

    <div>
    <h1>hello todo</h1>
    <div className='additem'>

    <input type="text" name="txt" id="txt" placeholder='write something' value={inputdata} 
    
    onChange={(e)=> setinputdata(e.target.value)

    }  />


    {
        togglesubmit ? <i className='fa fa-plus add-btn' title='add items' onClick={additem}></i>
        :
        <button onClick={additem}>edit</button>
    }

    {/* <i className='fa fa-plus add-btn' title='add items' onClick={additem}></i> */}
   
    </div> 

    <div className='showitem'>

    {
        item.map((ele)=>{

            return(

            <div className='eachitem' key={ele.id}>

            <h3>{ele.name}</h3>
            {/* <i className='fa fa-plus add-btn' title='delete items' onClick={()=>deleteitem(ind)}>
            </i> */}

            <button onClick={()=>deleteitem(ele.id)}>-</button>
            <button onClick={()=>edititem(ele.id)}>edit</button>

            </div>

            )

        })
    }




       
      
 
 

        


    </div>

        </div>
)}

export default Todo;