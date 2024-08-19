import React, { Component } from 'react'
import '../css/firstpage.css'



export default class firstpage extends Component {
  render() {
    function yaratDiv(){
      var div = document.createElement('div')
      var div_2 = document.getElementById('div2')
      var h3 = document.createElement('h3');
      var inp1 = document.getElementById('inp1')

      h3.innerText = inp1.value;

        h3.style.color = "white"
        div.style.width = "80%"
        div.style.height = "10vh"
        div.style.backgroundColor = "rgb(30, 25, 45)"
        div.style.borderRadius ="10px"

        div.appendChild(h3);
        div_2.appendChild(div)
    }
    return (
      <div className='div1'>
              
          <div className='div11'>
               <h1 id='h1'>Task List 2021</h1>
             <div className='divinp'>
                <input id='inp1' type="text" />
                <button onClick={yaratDiv} id='btn1'>Add Task</button>
             </div>
              <div id='div2' className='div2'>

              </div>



           
            </div> 




      </div>
    )
  }
}
