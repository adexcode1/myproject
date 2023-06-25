window.addEventListener*('load', ()=> {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#task");
 
      form.addEventListener('submit', (e) => {
          e.preventDefault();

          const task = input. Value;

          if(!task) {
              alert("please fill out the task");
              return;
          } 

          const task_el = document.createElement("div");
          task_el.classList.add("task");

          const task_content_el = document.createElement("div");
          task_content_el.classList.add("content");
          task_content_el.innnerText = task;

         task_el.appendChild(task_content_el);

         task_input_el.classList.add("text");
         task_input_el.type = ("text");
       task_input_el.Value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);
         list_el.appendChild(task_content_el);

         
      })
})