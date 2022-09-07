import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResultsDTO } from 'src/dto/Results.dto';
import { ClienteDTO } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(private prismaCliente: PrismaService) { }

    async create(data: ClienteDTO) {
        
        try {

            const user = await this.prismaCliente.cliente.create({
                data,
            });

            return <ResultsDTO>{

                status: true,
                message: "Usuário cadastrado com sucesso...",
                id: user.id,
                name: user.name

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

            return await this.prismaCliente.cliente.findMany();

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

            const result = await this.prismaCliente.cliente.findUnique({

                where: {
    
                    id: id
    
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
                    + error
            };
        };
    };

    async update(id, data) {

        try {

            const result = await this.prismaCliente.cliente.update({

                where: {

                    id: id

                },
                data

            });

            console.log(result)

            return <ResultsDTO>{

                status: true,
                message: "Usuário atualizado...",
                id: result.id,
                name: result.name

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

        const clienteExists = await this.prismaCliente.cliente.findFirst({

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

            const result = await this.prismaCliente.cliente.delete({

                where: {

                    id: id

                },
            });

            return <ResultsDTO>{

                status: true,
                message: "Usuário deleteado com sucesso...",
                id: result.id,
                name: result.name

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
