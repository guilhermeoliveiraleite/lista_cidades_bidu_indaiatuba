import { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category) return;

        addTodo(value,category);

        setValue("");
        setCategory("");

        console.log(value, category);
    };

  return (
    <div className="todo-form">
        <h2>ADD Cidade:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder='SOMENTE PRA ADM' value={value} onChange={(e) => setValue(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Trabalho">Cidade OK</option>
                <option value="Pessoal">Treta</option>
                
            </select>
            <button type='submit'>Salvar</button>
        </form>
    </div>
  )
}

export default TodoForm;