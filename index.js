const Aluno = require('./models/Aluno');
const Turma = require('./models/Turma');
const TurmaPresencial = require('./models/TurmaPresencial');

const aluno1 = new Aluno('Pedro Carvalho', 'pedro.carvalho', 'RA2475340');

const turma1 = new Turma('Arquitetura de Software', 8);
const turma2 = new TurmaPresencial('POO', 6, 80); 
const turma3 = new TurmaPresencial('FullStack', 9, 60);  

aluno1.matricular(turma1);
aluno1.matricular(turma2);
aluno1.matricular(turma3);

aluno1.listarTurmas();

aluno1.turmas.forEach((turma, index) => {
    const status = turma.aprovado() ? 'Aprovado' : 'Reprovado';
    console.log(`Resultado na turma ${turma.codigo}: ${status}`);
});
