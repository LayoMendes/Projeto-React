import Trash from '../../assets/trash.svg'
import './style.css'

function Home() {
const users = [{

  id: '1234dasdf',
  name: 'Layo Mendes',
  age: '19',
  email: 'layomendes@unipam.edu.br',


},

{

  id: '4234gsdfr',
  name: 'Ana Clara',
  age: '19',
  email: 'anaclara@unipam.edu.br',


},

]
  return (
    
      <div className='container'>
        <form>
          <h1>Cadastro de Usuários</h1>
          <input name="nome" type='text' />
          <input name="idade" type='number' />
         <input name="email" type='email' />
          <button type='button'>Cadastrar</button>
 
        </form>



      { users.map(user)}



        <div>
          <div>
            <p>Nome: </p>
            <p>Idade: </p>
            <p>Email: </p>
          </div>
          <button>
            <img src="{Trash}"/>
          </button>
        </div>

       </div>
  )
}

export default Home
