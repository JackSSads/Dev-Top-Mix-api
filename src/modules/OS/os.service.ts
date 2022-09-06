import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResultsDTO } from 'src/dto/Results.dto';
import { OsDTO } from './dto/os.dto';

@Injectable()
export class OsService {
    constructor(private prismaCliente: PrismaService) { }

    async create(data: OsDTO) {

        try {

            await this.prismaCliente.oS.create({
                data,
            })

            return <ResultsDTO>{

                status: true,
                message: "OS cadastrado com sucesso..."

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

    async findAll() {

        try {

            return await this.prismaCliente.oS.findMany();

        } catch (error) {
            
            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "
                    + error
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

            await this.prismaCliente.oS.update({

                where: {

                    id: id

                },
                data

            });

            return <ResultsDTO>{

                status: true,
                message: "OS atualizado..."

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

            await this.prismaCliente.oS.delete({

                where: {

                    id: id

                },
            });

            return <ResultsDTO>{

                status: true,
                message: 'OS deleteado...'

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
