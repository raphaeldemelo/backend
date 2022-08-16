import prismaClient from '../../prisma'

interface CategoryRequest {
  name: string
}

class CreateCategoryService {
  async execute({ name }) {
    if (name === '') {
      throw new Error('nome inválido')
    }

    const category = await prismaClient.category.create({
      data: { name: name },
      select: { id: true, name: true },
    })

    return category
  }
}

export { CreateCategoryService }
