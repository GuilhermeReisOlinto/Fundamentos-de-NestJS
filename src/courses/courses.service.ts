import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
{
    id: 1,
    name: 'fundamentos da framework NestJS',
    description:'Fundamentos de Framework Nestjs',
    tags:['nodejs', 'nestjs', 'javaScript'],

}];

findAll(){
    return this.courses;
}

findOne(id:string){
    return this.courses.find((course : Course) => course.id === Number(id));
}

    create(createCouseDto: any){
        this.courses.push(createCouseDto);
    }

    update(id: string, updateCourseDto: any){
        const indexCourse = this.courses.findIndex(
            (course : Course) => course.id === Number(id),
        );
    }

    remove(id: string){
        const indexCourse = this.courses.findIndex(
            (course : Course) => course.id === Number(id),
        );

        if(indexCourse >= 0){
            this.courses.splice(indexCourse,1);
        }
    }

}