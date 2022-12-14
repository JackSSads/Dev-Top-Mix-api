import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResultsDTO } from 'src/dto/Results.dto';
import { OsDTO } from './dto/os.dto';

@Injectable()
export class OsService {
    constructor(private prismaCliente: PrismaService) { }

    async create(data: OsDTO) {

        try {

            const result = await this.prismaCliente.oS.create({
                data,
            })
 
            return <ResultsDTO>{

                status: true,
                message: "OS cadastrado com sucesso...",
                id: result.id,
                client: result.client,
                description: result.description,
                collaborator_req: result.collaborator_req,

            };
            
        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados "
                    
            };
        };
    };

    async findAll() {

        try {

            return await this.prismaCliente.oS.findMany();

        } catch (error) {
            
            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "

            };
        };
    };

    async findOne(id) {


        try {

            const result = await this.prismaCliente.oS.findUnique({

                where: {
    
                    id: id
    
                },
            });

            if (result) {

                return result;

            } else {

                return <ResultsDTO> {

                    status: false,
                    message: "Esta OS não existe!"
    
                };
            }

        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "
                    + error
            };
        };
    };

    async update(id, data) {

        try {

            const result = await this.prismaCliente.oS.update({

                where: {

                    id: id

                },
                data

            });

            return <ResultsDTO>{

                status: true,
                message: "OS atualizado...",
                id: result.id,
                client: result.client,
                description: result.description,
                collaborator_req: result.collaborator_req,

            };

        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "
                    + error
            };
        };
    };

    async delete(id) {

        const osExists = await this.prismaCliente.oS.findFirst({

            where: {

                id: id,

            },
        });

        if (!osExists) {

            return <ResultsDTO>{

                status: false,
                message: 'OS inesistente!'

            };
        };

        try {

            const result = await this.prismaCliente.oS.delete({

                where: {

                    id: id

                },
            });

            return <ResultsDTO>{

                status: true,
                message: 'OS deleteado...',
                id: result.id,
                client: result.client,
                description: result.description,
                collaborator_req: result.collaborator_req,

            };
        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "
                    + error
            };
        };
    };
};
