import { prisma } from '@/server/db/prisma'
import { RegistryOutput } from '@/utils/valibot'
export const registriesByProjectId = async ({
	projectId,
}: {
	projectId: string
}) => {
	try {
		const registries = await prisma.registry.findMany({
			where: { project: { id: projectId } },
			orderBy: { createdAt: 'desc' },
		})
		return registries
	} catch (e) {
		if (e instanceof Error) {
		}
	}
}
export const registryById = async ({ id }: { id: string }) => {
	try {
		const existingRegistry = await prisma.registry.findUnique({
			where: { id },
		})
		return existingRegistry
	} catch (e) {
		if (e instanceof Error) {
		}
	}
}
export const createRegistry = async (
	input: RegistryOutput & { projectId: string }
) => {
	try {
		const registry = await prisma.registry.create({
			data: {
				...input,
				project: { connect: { id: input.projectId } },
			},
		})
		return registry
	} catch (e) {
		if (e instanceof Error) console.error(e)
	}
}
export const deleteRegistry = async (id: string) => {
	try {
		const deletedRegistry = await prisma.registry.delete({ where: { id } })
		return deletedRegistry
	} catch (e) {
		if (e instanceof Error) console.error(e)
	}
}
