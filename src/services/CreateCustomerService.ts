import PrismaClient from '../prisma';

class CreateCustomerService{
    async execute(){
        console.log("ROTA FOI CHAMADA");
        return { ok: true }
    }
};

export { CreateCustomerService };

