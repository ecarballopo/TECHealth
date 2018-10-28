import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  {
    title: 'Módulo Administrativo',
    icon: 'nb-keypad',
    link: '/pages/administrativo',
    children: [
      {
        title: 'Centro de Atención',
        link: '/pages/administrativo/centro-atencion',
      },
      {
        title: 'Funcionario',
        link: '/pages/administrativo/funcionario',
      },
      {
        title: 'Diagnósticos/Enfermedades',
        link: '/pages/administrativo/diagnosticos-enfermedades',
      },
      {
        title: 'Tratamientos',
        link: '/pages/administrativo/tratamientos',
      },
    ],
  },{
    title: 'Módulo Expediente',
    icon: 'nb-keypad',
    link: '/pages/expediente',
    children: [
      {
        title: 'Pacientes',
        link: '/pages/expediente/pacientes',
      },
      {
        title: 'Citas',
        link: '/pages/expediente/citas',
      },
    ],
  },
];
