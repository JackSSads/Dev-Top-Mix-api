import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResultsDTO } from 'src/dto/Results.dto';
import { GestorDTO } from './dto/gestor.dto';

@Injectable()
export class GestorService {
    constructor(private prismaCliente: PrismaService) { }

    async create(data: GestorDTO) {

        const clienteExists = await this.prismaCliente.gestor.findFirst({

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

            await this.prismaCliente.gestor.create({
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

            return await this.prismaCliente.gestor.findMany();

        } catch (error) {
            
            return <ResultsDTO> {

                status: false,
                message: error

            };
        };
    };

    async findOne(id) {


        try {

            const result = await this.prismaCliente.gestor.findUnique({

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
                message: error

            };
        };
    };

    async update(id, data) {

        try {

            await this.prismaCliente.gestor.update({

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

        const clienteExists = await this.prismaCliente.gestor.findFirst({

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

            await this.prismaCliente.gestor.delete({

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
