import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResultsDTO } from 'src/dto/Results.dto';
import { ColaboradorDTO } from './dto/colaborador.dto';

@Injectable()
export class ColaboradorService {
    constructor(private prismaCliente: PrismaService) { }

    async create(data: ColaboradorDTO) {

        const clienteExists = await this.prismaCliente.colaborador.findFirst({

            where: {

                email: data.email

            },
        });


        if (clienteExists) {

            return <ResultsDTO>{

                status: false,
                message: "E-mail já cadastrado!"

            };
        };

        try {

            await this.prismaCliente.colaborador.create({
                data,
            });

            return <ResultsDTO>{

                status: true,
                message: "Usuário cadastrado com sucesso..."

            };
            
        } catch (error) {

            return <ResultsDTO>{

                status: false,
                message: error

            };
        };
    };

    async findAll() {

        try {

            return await this.prismaCliente.colaborador.findMany();

        } catch (error) {
            
            return <ResultsDTO> {

                status: false,
                message: error

            };
        };
    };

    async findOne(id) {


        try {

            return await this.prismaCliente.colaborador.findUnique({

                where: {
    
                    id: id
    
                },
            });

        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message: error

            };
        };
    };

    async update(id, data) {

        try {

            await this.prismaCliente.colaborador.update({

                where: {

                    id: id

                },
                data

            });

            return <ResultsDTO>{

                status: true,
                message: "Usuário atualizado..."

            };

        } catch (error) {

            return <ResultsDTO>{

                status: false,
                message: error

            };
        };
    };

    async delete(id) {

        const clienteExists = await this.prismaCliente.colaborador.findFirst({

            where: {

                id: id,

            },
        });

        if (!clienteExists) {

            return <ResultsDTO>{

                status: false,
                message: 'Usuário inesistente!'

            };
        };

        try {

            await this.prismaCliente.colaborador.delete({

                where: {

                    id: id

                },
            });

            return <ResultsDTO>{

                status: true,
                message: 'Usuário deleteado...'

            };
        } catch (error) {

            return <ResultsDTO>{

                status: false,
                message: error

            };
        };
    };
};
