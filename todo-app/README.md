# TodoApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.0.

## Project Overview
This project was developed to practice and demonstrate my understanding of Angular applications.The application showcases various key Angular concepts and techniques:

- **ReactiveForms & Custom Validation:**
Implemented in the todo.component.(ts/html). Created my own custom validation methods to handle the user adding only space and number inputs and showcase the appropriate error message. 

- **Lazy Loading & Route Guards:**
Incorporated lazying loading for 2 of the nested routes for standalone components to improve performance by loading components only when needed. Added 2 route guards to prevent user from access routes for todos that do not exist and another to prevent the user from navigating away when updating a todo before submiting changes.

### Future Enchancements

In the future, I plan to add a mock backend server, Http Client request, styles and animations.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
