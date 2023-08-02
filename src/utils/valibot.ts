import { object, string, minLength, url, Output, Issues } from 'valibot'

export const createProjectSchema = object({
	name: string([minLength(3, 'Name is required')]),
	description: string([minLength(3, 'Description is required')]),
	siteUrl: string([url('Invalid site URL')]),
})
export type ProjectOutput = Output<typeof createProjectSchema>

// It returns an boolean if the key exists in the issues

export const containsErrors = (key: keyof ProjectOutput, issues: Issues) =>
	issues && issues.some((i) => i.path?.[0].key === key)

//It returns an error message related to the key and issues specified
export const errorFromField = (key: keyof ProjectOutput, issues: Issues) => {
	const error = issues?.find((i) => i.path?.[0].key === key)
	return error?.message
}
