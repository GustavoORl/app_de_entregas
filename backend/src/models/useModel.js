import { prisma } from "../helpers/dbConnection.js";

export const createUser = async (user) => {
    return await prisma.user.create({
        data: user
    })
}

export const getUsers = async (id) => {
    return await prisma.user.findMany(id);
}

export const getUser = async (id) => {
    return await prisma.user.findMany({
        select: { id: true}
    });
}

export const updateUser = async (user, id) => {
    return await prisma.user.update({
        data: user,
        where: {id}
    })
}

export const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: {id}
    })
}

export const getProducts = async (id) => {
    return await prisma.product.findMany(id);
}

export const getProduct = async(id) => {
    return await prisma.product.findMany({
        select: { id: true}
    });
}

export const createProduct = async (product) => {
    return await prisma.product.create({
        data: product
    })
}

export const updateProduct = async (product, id) => {
    return await prisma.product.update({
        data: product,
        where: {id}
    })
}

export const deleteProduct = async (id) => {
    return await prisma.product.delete({
        where: {id}
    })
}