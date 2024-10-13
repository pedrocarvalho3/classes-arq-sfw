class Aluno {
  constructor(nome, login, RA) {
      this.nome = nome;
      this.login = login;
      this.RA = RA;
      this.turmas = [];
  }

  matricular(turma) {
      this.turmas.push(turma);
  }

  listarTurmas() {
      console.log(`${this.nome} está matriculado nas seguintes turmas:`);
      this.turmas.forEach((turma, index) => {
          console.log(`${index + 1}. Turma: ${turma.codigo}, Nota: ${turma.nota}`);
      });
  }
}

module.exports = Aluno;
