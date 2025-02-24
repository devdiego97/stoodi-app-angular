import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConcursosComponent } from './pages/concursos/concursos.component';
import { ConcursoIdComponent } from './pages/concurso-id/concurso-id.component';
import { ContaComponent } from './pages/conta/conta.component';
import { ConcursosPainelComponent } from './pages/painel/concursos-painel/concursos-painel.component';
import { NovoconcursoComponent } from './pages/painel/novoconcurso/novoconcurso.component';
import { CursospainelComponent } from './pages/painel/cursospainel/cursospainel.component';
import { ContapainelComponent } from './pages/painel/contapainel/contapainel.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },{
    path:'login',
    component:LoginComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'conta',
    component:ContaComponent
  },
  {
    path:'concursos',
    component:ConcursosComponent,
    children:[

        {
          path:':id',
          component:ConcursoIdComponent
        }

    ]
  },
  {
    path:'painel/concursos',
    component:ConcursosPainelComponent
  },
  {
    path:'painel/novo-concurso',
    component:NovoconcursoComponent
  },
  {
    path:'painel/cursos',
    component:CursospainelComponent
  },
  {
    path:'painel/conta',
    component:ContapainelComponent
  }

];
