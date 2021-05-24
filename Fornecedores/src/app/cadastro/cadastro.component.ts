import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Funcionario } from '../funcionario.model';
import { FuncionarioService } from '../service/funcionario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public formCadastro: FormGroup = new FormGroup({
    razao_social: new FormControl('', Validators.minLength(5)),
    ativo: new FormControl(false),
    data_cadastro: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    valor_ultima_compra: new FormControl('', Validators.required),
  });

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    if (!this.formCadastro.invalid) {
      let dadosForm: any = this.formCadastro.getRawValue();

      dadosForm.valor_ultima_compra = parseFloat(dadosForm.valor_ultima_compra);

      let novoFuncionario: Funcionario = new Funcionario(
        dadosForm.razao_social,
        dadosForm.ativo,
        dadosForm.data_cadastro,
        dadosForm.valor_ultima_compra,
      );

      this.funcionarioService.cadastrar(novoFuncionario);
    }
    else {
      console.log('Form inválido!');
    }
  }

}
