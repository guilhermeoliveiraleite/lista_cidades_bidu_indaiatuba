import { useState } from 'react'
import "./App.css";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from './components/Search';
import Filter from './components/Filter';








function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "Aguas de Lindoia",
      category: "Cidade OK",
      isCompleted: false,
    },
    {
      id:2,
      text: "Aguas de São Pedro",
      category: "Cidade OK",
      isCompleted: false,
    },
    {
      id:3,
      text: "Estudar React",
      category: "Cidade OK ",
      isCompleted: false},
      {

      id:4,
      text: "Alambari",
      category: "Cidade OK",
      isCompleted: false},

      {id:5,
      text: "Aluminio",
      category: "Cidade OK",
      isCompleted: false},

      {id:6,
      text: "Americana",
      category: "Cidade OK",
      isCompleted: false},


      {id:7,
      text: "Amparo",
      category: "Cidade OK",
      isCompleted: false},


      {id:8,
      text: "Angatuba",
      category: "Cidade OK",
      isCompleted: false},


      {id:9,
      text: "Anhambi",
      category: "Cidade OK",
      isCompleted: false},

      {id:10,
      text: "Araçariguama",
      category: "Cidade OK",
      isCompleted: false},

      {id:11,
      text: "Araçoiaba da Serra",
      category: "Cidade OK",
      isCompleted: false},

      {id:12,
      text: "Araras",
      category: "Cidade OK",
      isCompleted: false},

      {id:13,
        text: "Atibaia",
        category: "Cidade OK",
        isCompleted: false},

      {id:14,
          text: "Barueri",
          category: "Cidade OK",
          isCompleted: false},

      {id:15,
            text: "Bofete",
            category: "Cidade OK",
            isCompleted: false},

      {id:16,
              text: "Boituva",
              category: "Cidade OK",
              isCompleted: false},

      {id:17,
      text: "Atibaia",
      category: "Cidade OK",
      isCompleted: false},


      {id:18,
        text: "Artur Nogueira",
        category: "Cidade OK",
        isCompleted: false},
      

      {id:19,
        text: "Botucatu",
        category: "Cidade OK",
        isCompleted: false},


          {id:20,
        text: "Bragança Paulista",
        category: "Cidade OK",
        isCompleted: false},
        
        {id:21,
          text: "Cabreúva",
          category: "Cidade OK",
          isCompleted: false},

          {id:22,
            text: "Caieiras",
            category: "Cidade OK",
            isCompleted: false},


              {id:23,
        text: "Cajamar",
        category: "Cidade OK",
        isCompleted: false},

        {id:24,
          text: "Campinas",
          category: "Cidade OK",
          isCompleted: false},


              {id:25,
        text: "Campo Limpo Paulista",
        category: "Cidade OK",
        isCompleted: false},

              {id:26,
        text: "Capela do Alto",
        category: "Cidade OK",
        isCompleted: false},


        {id:27,
          text: "Capivari",
          category: "Cidade OK",
          isCompleted: false},

            {id:28,
        text: "Carapicuiba",
        category: "Cidade OK",
        isCompleted: false},

        {id:29,
          text: "Cerquilho",
          category: "Cidade OK",
          isCompleted: false},

          {id:30,
            text: "Cesário Lange",
            category: "Cidade OK",
            isCompleted: false},

              {id:31,
        text: "Charqueada",
        category: "Cidade OK",
        isCompleted: false},

        {id:32,
          text: "Conchal",
          category: "Cidade OK",
          isCompleted: false},

        {id:33,
          text: "Conchas",
          category: "Cidade OK",
          isCompleted: false},

          {id:34,
            text: "Cordeirópolis",
            category: "Cidade OK",
            isCompleted: false},

      {id:35,
          text: "Cosmópolis",
          category: "Cidade OK",
          isCompleted: false},

{id:36,
          text: "Cotia",
          category: "Cidade OK",
          isCompleted: false},

    {id:37,
          text: "Diadema",
          category: "Cidade OK",
          isCompleted: false},

  {id:38,
          text: "Elias Fausto",
          category: "Cidade OK",
          isCompleted: false},

    {id:39,
          text: "Embu",
          category: "Cidade OK",
          isCompleted: false},

  {id:40,
          text: "Embu das Artes",
          category: "Cidade OK",
          isCompleted: false},

  {id:41,
          text: "Embu-Guaçu",
          category: "Cidade OK",
          isCompleted: false},

    {id:42,
          text: "Engenheiro Coelho",
          category: "Cidade OK",
          isCompleted: false},

    {id:43,
          text: "Estiva Gerbi",
          category: "Cidade OK",
          isCompleted: false},

    {id:44,
          text: "Francisco Morato",
          category: "Cidade OK",
          isCompleted: false},

{id:45,
          text: "Franco da Rocha",
          category: "Cidade OK",
          isCompleted: false},

      {id:46,
          text: "Guareí",
          category: "Cidade OK",
          isCompleted: false},

          {id:47,
            text: "Holambra",
            category: "Cidade OK",
            isCompleted: false},

            {id:48,
              text: "Hortolândia",
              category: "Cidade OK",
              isCompleted: false},


            {id:49,
          text: "Ibiuna",
          category: "Cidade OK",
          isCompleted: false},

          {id:50,
            text: "Indaiatuba",
            category: "Cidade OK",
            isCompleted: false},

        {id:51,
          text: "Iperó",
          category: "Cidade OK",
          isCompleted: false},
        
          {id:52,
            text: "Ipeúna",
            category: "Cidade OK",
            isCompleted: false},

        {id:53,
          text: "Iracemápolis",
          category: "Cidade OK",
          isCompleted: false},

        {id:54,
          text: "Itapecerica da Serra",
          category: "Cidade OK",
          isCompleted: false},

          {id:55,
            text: "Itapetininga",
            category: "Cidade OK",
            isCompleted: false},

        {id:56,
          text: "Itapevi",
          category: "Cidade OK",
          isCompleted: false},

      {id:57,
          text: "Itapira",
          category: "Cidade OK",
          isCompleted: false},
      {id:58,
          text: "Itatiba",
          category: "Cidade OK",
          isCompleted: false},

      {id:59,
          text: "Itatinga",
          category: "Cidade OK",
          isCompleted: false},


          {id:60,
          text: "Itu",
          category: "Cidade OK",
          isCompleted: false},

    {id:61,
          text: "Itupeva",
          category: "Cidade OK",
          isCompleted: false},

    {id:62,
          text: "Jaguariuna",
          category: "Cidade OK",
          isCompleted: false},

      {id:63,
          text: "Jandira",
          category: "Cidade OK",
          isCompleted: false},

        {id:64,
          text: "Jarinu",
          category: "Cidade OK",
          isCompleted: false},

          {id:65,
            text: "Jumirim",
            category: "Cidade OK",
            isCompleted: false},

        {id:66,
          text: "Jundiai",
          category: "Cidade OK",
          isCompleted: false},

          {id:67,
            text: "Laranjal Paulista",
            category: "Cidade OK",
            isCompleted: false},

        {id:68,
          text: "Limeira",
          category: "Cidade OK",
          isCompleted: false},

          {id:69,
          text: "Lindóia",
          category: "Cidade OK",
          isCompleted: false},

          {id:70,
          text: "Louveira",
          category: "Cidade OK",
          isCompleted: false},

          {id:71,
          text: "Mairinque",
          category: "Cidade OK",
          isCompleted: false},

          {id:72,
          text: "Mairiporã",
          category: "Cidade OK",
          isCompleted: false},

          {id:73,
          text: "Mauá",
          category: "Cidade OK",
          isCompleted: false},

          {id:74,
          text: "Mogi Guaçu",
          category: "Cidade OK",
          isCompleted: false},

          {id:75,
          text: "Mogi Mirim",
          category: "Cidade OK",
          isCompleted: false},

          {id:76,
          text: "Mombuca",
          category: "Cidade OK",
          isCompleted: false},

          {id:77,
          text: "Monte Alegre do Sul",
          category: "Cidade OK",
          isCompleted: false},

          {id:78,
          text: "Monte Mor",
          category: "Cidade OK",
          isCompleted: false},

          {id:79,
          text: "Morungaba",
          category: "Cidade OK",
          isCompleted: false},

          {id:80,
          text: "Nova Odessa",
          category: "Cidade OK",
          isCompleted: false},

          {id:81,
          text: "Osasco",
          category: "Cidade OK",
          isCompleted: false},

          {id:82,
          text: "Paradinha",
          category: "Cidade OK",
          isCompleted: false},

          {id:83,
          text: "Pardinho",
          category: "Cidade OK",
          isCompleted: false},

          {id:84,
          text: "Paulínia",
          category: "Cidade OK",
          isCompleted: false},

          {id:85,
          text: "Pedra Bela",
          category: "Cidade OK",
          isCompleted: false},

        {id:86,
          text: "Pedreira",
          category: "Cidade OK",
          isCompleted: false},

          {id:87,
          text: "Pereiras",
          category: "Cidade OK",
          isCompleted: false},

          {id:88,
          text: "Piedade",
          category: "Cidade OK",
          isCompleted: false},

          {id:89,
          text: "Pilar do Sul",
          category: "Cidade OK",
          isCompleted: false},

          {id:90,
          text: "Pinhalzinho",
          category: "Cidade OK",
          isCompleted: false},

          {id:91,
          text: "Piracicaba",
          category: "Cidade OK",
          isCompleted: false},

          {id:92,
          text: "Pirapora do Bom Jesus",
          category: "Cidade OK",
          isCompleted: false},

          {id:93,
          text: "Porangaba",
          category: "Cidade OK",
          isCompleted: false},

          {id:94,
          text: "Porto Feliz",
          category: "Cidade OK",
          isCompleted: false},

          {id:95,
          text: "Quadra",
          category: "Cidade OK",
          isCompleted: false},

          {id:96,
          text: "Rafaral",
          category: "Cidade OK",
          isCompleted: false},

          {id:97,
          text: "Rio Claro",
          category: "Cidade OK",
          isCompleted: false},

          {id:98,
          text: "Rio das Pedras",
          category: "Cidade OK",
          isCompleted: false},

          {id:99,
          text: "Saltinho",
          category: "Cidade OK",
          isCompleted: false},

          {id:100,
          text: "Salto",
          category: "Cidade OK",
          isCompleted: false},

          {id:101,
          text: "Salto de Pirapora",
          category: "Cidade OK",
          isCompleted: false},

          {id:102,
          text: "Santa Barbara d'Oeste",
          category: "Cidade OK",
          isCompleted: false},

          {id:103,
          text: "Santa Gertudes",
          category: "Cidade OK",
          isCompleted: false},

          {id:104,
          text: "Santa Maria da Serra",
          category: "Cidade OK",
          isCompleted: false},

          {id:105,
          text: "Santana da Parnaíba",
          category: "Cidade OK",
          isCompleted: false},

          {id:106,
          text: "Santo André",
          category: "Cidade OK",
          isCompleted: false},

          {id:107,
          text: "Santo Antonio de Posse",
          category: "Cidade OK",
          isCompleted: false},

          {id:108,
          text: "São Bernado do Campo",
          category: "Cidade OK",
          isCompleted: false},

          {id:109,
          text: "São Caetano do Sul",
          category: "Cidade OK",
          isCompleted: false},

          {id:110,
          text: "São Paulo",
          category: "Cidade OK",
          isCompleted: false},

          {id:111,
          text: "São Pedro",
          category: "Cidade OK",
          isCompleted: false},

          {id:112,
          text: "São Roque",
          category: "Cidade OK",
          isCompleted: false},

          {id:113,
          text: "Sarapuí",
          category: "Cidade OK",
          isCompleted: false},

          {id:114,
          text: "Serra Negra",
          category: "Cidade OK",
          isCompleted: false},

          {id:115,
          text: "Socorro",
          category: "Cidade OK",
          isCompleted: false},

          {id:116,
          text: "Sumaré",
          category: "Cidade OK",
          isCompleted: false},

          {id:117,
          text: "Taboão da Serra",
          category: "Cidade OK",
          isCompleted: false},

          {id:118,
          text: "Tatuí",
          category: "Cidade OK",
          isCompleted: false},

          {id:119,
          text: "Tietê",
          category: "Cidade OK",
          isCompleted: false},

          {id:120,
          text: "Torre de Pedra",
          category: "Cidade OK",
          isCompleted: false},

          {id:121,
          text: "Tuiuti",
          category: "Cidade OK",
          isCompleted: false},
          {id:122,
          text: "Valinhos",
          category: "Cidade OK",
          isCompleted: false},

          {id:123,
          text: "Vargem",
          category: "Cidade OK",
          isCompleted: false},

          {id:124,
          text: "Vargem Grande Paulista",
          category: "Cidade OK",
          isCompleted: false},

          {id:125,
          text: "Várzea Paulista",
          category: "Cidade OK",
          isCompleted: false},

          {id:126,
          text: "Vinhedo",
          category: "Cidade OK",
          isCompleted: false},

          {id:127,
          text: "Vinhedo",
          category: "Cidade OK",
          isCompleted: false},

          {id:128,
          text: "Votorantim",
          category: "Cidade OK",
          isCompleted: false},

    {id:129,
        text: "Bom Jesus dos Perdões",
        category: "Cidade OK",
        isCompleted: false,  




    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random()* 10000),
      text, 
      category,
      isCompleted: false,
    },
  ];
  setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id? todo :null);
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos);
  };

  return (
  
      <div className="app">
        <h1>Lista de Cidades</h1>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
        <div className="todo-list">
          {todos
          .filter((todo) => filter === "All" ? true : filter === "Completed" ? todo.isCompleted : !todo.isCompleted )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) =>(
            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>

            // <div className="todo">
            //   <div className="content">
            //     <p>{todo.text}</p>
            //     <p className="category">({todo.category}) </p>
            //   </div>
            //   <div>
            //   <button>Completar</button>
            //   <button>X</button>
            //   </div>
            //   </div>
            ))}
        </div>
        <TodoForm addTodo={addTodo} />
      </div>
    
  )
}

export default App
