export class EnvironmentImpl {
  production = false;
  userUrl = 'https://jsonplaceholder.typicode.com/users';
}

export const environment = new EnvironmentImpl();
