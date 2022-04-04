import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Res, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService){

    }     
    @Get()
    // devolve tudo, faz tratamento de status  
    findAll(@Res() response){
        return response.status(200).send('Listagem de cursos');
    }

    @Get(':id')
    findOne(@Param() params){
        return `Curso #${params.id}`;
    }

    @Post()
    //retorna status 204,  
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body() body){
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `Atualizando o curso # ${id}`;
    }

    @Delete(':id')
    remove(@Param('id')  id: string){
        return `Excluindo o Curso #${id}`;
    }
}
