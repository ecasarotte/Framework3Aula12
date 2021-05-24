import { Injectable } from '@angular/core';
import { Funcionario } from '../funcionario.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  ListarTodos(): Funcionario[] {
    const funcionarios = localStorage['funcionarios'];

    return funcionarios ? JSON.parse(funcionarios) : [];
  }

  cadastrar(funcionario: Funcionario): void {
    funcionario.id = new Date().getTime();// timestamp - unico para o ID

    const funcionarios: Array<Funcionario> = this.ListarTodos();

    funcionarios.push(funcionario);//adiciono mais um item no array
    localStorage['funcionarios'] = JSON.stringify(funcionarios);

    alert(`Funcionário ${funcionario.razaoSocial} cadastrado!`);
  }

  buscarPorId(id: number): Funcionario {
    const funcionarios: Funcionario[] = this.ListarTodos();
    return funcionarios.find(funcionario => funcionario.id === id);
  }

  atualizar(funcionario: Funcionario): void {
    const funcionarios: Funcionario[] = this.ListarTodos();
    funcionarios.forEach((obj, index, objs) => {
      if (funcionario.id === obj.id) {
        objs[index] = funcionario;
      }
    });
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  remover(id: number): void {
    let funcionarios: Funcionario[] = this.ListarTodos();
    funcionarios = funcionarios.filter(funcionario => funcionario.id !== id);
    localStorage['funcionarios'] = JSON.stringify(funcionarios);
  }

  // alterarStatus(id: number): void{
  //   const atividades: Atividade[] = this.ListarTodas();
  //   atividades.forEach((obj, index, objs) =>{
  //     if (id === obj.id){
  //       objs[index].concluida = !obj.concluida;
  //     }
  //   })
  //   localStorage['atividades'] = JSON.stringify(atividades);
  // }
}
