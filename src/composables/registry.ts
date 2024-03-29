import { LighthouseAPIResult } from '@/types'
import { RegistryOutput } from '@/utils/valibot'
import { Registry } from '@prisma/client'

export const useCreateRegistry = (projectId: string) => {
	const config = useRuntimeConfig()
	const API_URL = config.public.API_URL
	const PAGESPEED_API_URL = config.public.PAGESPEED_API_URL
	const PAGESPEED_API_KEY = config.public.PAGESPEED_API_KEY
	const router = useRouter()
	const isLoading = ref(false)

	async function create({ siteUrl }: { siteUrl?: string }) {
		try {
			isLoading.value = true
			const pageSpeedInsightRes = await fetch(
				`${PAGESPEED_API_URL}?url=${siteUrl}&key=${PAGESPEED_API_KEY}&strategy=mobile`
			)
			const pageSpeedData: LighthouseAPIResult = await pageSpeedInsightRes.json()

			const { audits } = pageSpeedData.lighthouseResult
			const parsedLighthouseScore: RegistryOutput = {
				ttiScore: audits.interactive.displayValue,
				blockingTimeScore: audits['total-blocking-time'].displayValue,
				clsScore: audits['cumulative-layout-shift'].displayValue,
				fcpScore: audits['first-contentful-paint'].displayValue,
				lcpScore: audits['largest-contentful-paint'].displayValue,
				siScore: audits['speed-index'].displayValue,
			}
			const apiRes = await fetch(`${API_URL}/project/${projectId}/registry`, {
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(parsedLighthouseScore),
				method: 'POST',
			})
			const data = (await apiRes.json()) as { projectRegistry: Registry }
			if (data) {
				isLoading.value = false
				router.push(
					`/home/project/${projectId}/registry/${data.projectRegistry.id}`
				)
			}
		} catch (e) {
			isLoading.value = false
			if (e instanceof Error) {
				console.error(e.message)
			}
		}
	}
	return { create, isLoading }
}

export const useGetRegistriesByProjectId = async (projectId: string) => {
	const config = useRuntimeConfig()
	return await useAsyncData('registries', async () => {
		const API_URL = config.public.API_URL
		const data = await fetch(`${API_URL}/project/${projectId}/registry`, {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})
		const resp = (await data.json()) as { existingRegistries: Registry[] }
		return resp.existingRegistries
	})
}

export const useGetRegistryById = async (registryId: string) => {
	const route = useRoute('home-project-id')
	const id = route.params.id
	const config = useRuntimeConfig()
	return await useAsyncData(`registry-by-id-${registryId}`, async () => {
		const API_URL = config.public.API_URL
		const data = await fetch(`${API_URL}/project/${id}/registry/${registryId}`, {
			method: 'GET',
			headers: { 'content-type': 'application/json' },
		})

		const resp = (await data.json()) as { existingRegistry: Registry }
		return resp.existingRegistry
	})
}
