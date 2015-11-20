import {bootstrap, Component} from 'angular2/angular2';



@Component({
	selector:'app',
	templateUrl:'app/app.html'
})
export class AppComponent {
	
}

bootstrap(AppComponent).then(function(){
	console.log('application bootstraped')
});