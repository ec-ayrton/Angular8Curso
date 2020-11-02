import {Component, OnInit} from'@angular/core'
import { Course } from './course'

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.components.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'angular: forms',
                imageURL: '',
                price: 99.99,
                code:'xps-8765',
                duration:120,
                rating:5.4 ,
                releaseDate: 'december, 2, 2019'
            },
            {
                id: 2,
                name: 'angular: http',
                imageURL: '',
                price: 45.99,
                code:'xps-1045',
                duration:88,
                rating:4 ,
                releaseDate: 'november, 4,2019'
            }
        ]
    }
}