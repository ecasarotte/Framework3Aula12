import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../service/funcionario.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarios = this.listarTodos();
  }

  listarTodos(): Funcionario[] {
    return this.funcionarioService.ListarTodos();
  }

  remover($event: any, funcionario: Funcionario): void {
    $event.preventDefault();
    if (confirm('Deseja remover o Funcionário "' + funcionario.razaoSocial + '"? ')) {
      this.funcionarioService.remover(funcionario.id);
      this.funcionarios = this.funcionarioService.ListarTodos();
    }
  }

  // alterarStatus(atividade: Atividade): void{
  //   if(confirm(`Deseja alterar o status da atividade ${atividade.nome}?`)) {
  //     this.atividadeService.alterarStatus(atividade.id);
  //     this.atividades = this.listarTodos();
  //   }
  // }

}
