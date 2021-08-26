angular.module("sistemaEscolar").controller("sistemaEscolarCtrl", function($scope){
    $scope.title = "Alunos Matrículados"
    $scope.alunos = []  
    $scope.adicionarContato = function(contato) {
        $scope.alunos.push(angular.copy(contato))
        delete $scope.contato
        $scope.contatoForm.$setPristine()
    }
    $scope.turmas = [
        {nome: "101", codigo: 01, serie: "Pirmeiro Ano"},
        {nome: "102", codigo: 01, serie: "Pirmeiro Ano"},
        {nome: "103", codigo: 01, serie: "Pirmeiro Ano"},
        {nome: "201", codigo: 02, serie: "Segundo Ano"},
        {nome: "202", codigo: 02, serie: "Segundo Ano"},
        {nome: "203", codigo: 02, serie: "Segundo Ano"},
        {nome: "301", codigo: 03, serie: "Terceiro Ano"},
        {nome: "302", codigo: 03, serie: "Terceiro Ano"},
        {nome: "303", codigo: 03, serie: "Terceiro Ano"}
    ]
    $scope.apagarAlunos = function(alunos) {
        $scope.alunos = alunos.filter(function(aluno){
            if (!aluno.selecionado) return aluno
        })
        
    }
    $scope.isAlunoSelecionado = function (alunos) {
        return alunos.some(function(aluno){
            return aluno.selecionado
        })
    }

})