import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResultsDTO } from 'src/dto/Results.dto';
import { ClienteDTO } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
    constructor(private prismaCliente: PrismaService) { }

    async create(data: ClienteDTO) {

        const clienteExists = await this.prismaCliente.cliente.findFirst({
            where: {
                email: data.email
            },
        });

        if (clienteExists) {
            return <ResultsDTO>{
                status: false,
                message: "E-mail já cadastrado!"
            }
        }

        const cliente = await this.prismaCliente.cliente.create({
            data,
        })
        return cliente;
    }

    async findAll() {
        return await this.prismaCliente.cliente.findMany()
    }

    async findOne(id) {

        return await this.prismaCliente.cliente.findUnique({
            where: {
                id: id
            }
        })
    }

    async update(id, data) {
        return await this.prismaCliente.cliente.update({
            where: {
                id: id
            },
            data
        })
    }
}
