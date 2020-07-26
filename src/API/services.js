const axios = require('axios');

class Services  {
    postTask = (task) =>{
        //console.log('task',task);
        axios.post('/api/taskModel', task)
          .then( (response) =>{
            console.log(response);
          })
          .catch( (error) => {
            console.log(error);
          });
    };

    getTasks = () =>{
        console.log('get task');
        return axios.get('/api/taskModel')
    };

    updateTask = (id, task) =>{
      console.log('update task', task, id);
      return axios.patch(`/api/taskModel/${id}`, task)
    };

    deleteTask = (id) =>{
      console.log('dalete task');
      return axios.delete(`/api/taskModel/${id}`, id)
    };
}  


export default new Services();