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

            const result = await this.prismaCliente.colaborador.create({
                data,
            });

            return <ResultsDTO>{

                status: true,
                message: "Usuário cadastrado com sucesso...",
                id: result.id,
                name: result.name,
                email: result.email

            };
            
        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message: "Erro de Comunicação com o banco de dados! "
                    
            };
        };
    };

    async findAll() {

        try {

            return await this.prismaCliente.colaborador.findMany();

        } catch (error) {
            
            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "
                  
            };
        };
    };

    async findOne(email) {


        try {

            const result = await this.prismaCliente.colaborador.findUnique({

                where: {
    
                    email: email
    
                },
            });

            if (result) {

                return result;

            } else {

                return <ResultsDTO> {

                    status: false,
                    message: "Usuário não existe!"
    
                };
            }

        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "
                    
            };
        };
    };

    async update(email, data) {

        try {

            const result = await this.prismaCliente.colaborador.update({

                where: {

                    email: email

                },
                data

            });

            return <ResultsDTO>{

                status: true,
                message: "Usuário atualizado...",
                id: result.id,
                name: result.name,
                email: result.email

            };

        } catch (error) {

            return <ResultsDTO> {

                status: false,
                message:
                    "Erro de Comunicação com o banco de dados: "

            };
        };
    };

    async delete(email) {

        const clienteExists = await this.prismaCliente.colaborador.findFirst({

            where: {

                email: email,

            },
        });

        if (!clienteExists) {

            return <ResultsDTO>{

                status: false,
                message: 'Usuário inesistente!'

            };
        };

        try {

            const result = await this.prismaCliente.colaborador.delete({

                where: {

                    email: email

                },
            });

            return <ResultsDTO>{

                status: true,
                message: 'Usuário deleteado...',
                id: result.id,
                name: result.name,
                email: result.email

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
