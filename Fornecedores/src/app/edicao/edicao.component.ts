import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../service/funcionario.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  public formCadastro: FormGroup = new FormGroup({
    razao_social: new FormControl('', Validators.minLength(5)),
    ativo: new FormControl(false),
    data_cadastro: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    valor_ultima_compra: new FormControl('', Validators.required),
  });

  public funcionario: Funcionario;

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.funcionario = this.funcionarioService.buscarPorId(parseInt(id));

    this.formCadastro.get('razao_social').setValue(this.funcionario.razaoSocial);
    this.formCadastro.get('ativo').setValue(this.funcionario.ativo);
    this.formCadastro.get('data_cadastro').setValue(this.funcionario.dataCadastro);
    this.formCadastro.get('valor_ultima_compra').setValue(this.funcionario.valorUltimaCompra);

    console.log(this.funcionario);
  }

  atualizar(): void {
    if (this.formCadastro.valid) {
      const novoFuncionario: Funcionario = new Funcionario(
        this.formCadastro.get('razao_social').value,
        this.formCadastro.get('ativo').value,
        this.formCadastro.get('data_cadastro').value,
        this.formCadastro.get('valor_ultima_compra').value,
        this.funcionario.id
      );

      this.funcionarioService.atualizar(novoFuncionario);
      console.log('Funcionário alterado com sucesso!');
      this.router.navigate(['/listar']);
    }
  }
}
