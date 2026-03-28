import './style.css'

function AdicionarAluno() {
    const [nome, setNome] = useState("")
    const [Email, setEmail] = useState("")
    const [Usuarios, setUsuarios] = useState([])

    //Função para adicionar um aluno na lista.
    const handleAdicionarAluno = (event) => {
        event.proventDefault()


        // Se os campos estiverem preenchidos...
        if (nome && Email) {
            setAlunos([...alunos, {nome, email}])
            setNome("") //Apaga o nome informado deixando o campo vazio.
            setEmail("") //Apaga o email informado deixando o campo vazio.
    
        }
    }
    
}