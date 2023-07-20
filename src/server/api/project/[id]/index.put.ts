import { z } from 'zod'
import { prisma } from '~/db/prisma'
import { createProjectSchema } from '~/utils/zod'

// It updates a project based on its ID. Every field should be optional.
export default defineEventHandler(async (ev) => {
	try {
		const params = ev.context.params
		if (!params)
			throw createError({ statusMessage: 'Missing ID', statusCode: 400 })
		const body = await readBody(ev)
		const {
			description,
			name,
			siteUrl,
		}: Partial<z.infer<typeof createProjectSchema>> =
			createProjectSchema.parse(body)
		const updatedProject = await prisma.project.update({
			data: { description, name, siteUrl },
			where: { id: params.id },
		})
		return { updatedProject }
	} catch (e) {
		if (e instanceof Error)
			throw createError({ statusCode: 500, message: e.message })
	}
})
