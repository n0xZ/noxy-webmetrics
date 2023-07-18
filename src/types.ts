// Generated by https://quicktype.io

export interface LighthouseResult {
	captchaResult: string
	kind: string
	id: string
	loadingExperience: LoadingExperience
	lighthouseResult: LighthouseResultClass
	analysisUTCTimestamp: Date
}

export interface LighthouseResultClass {
	requestedUrl: string
	finalUrl: string
	mainDocumentUrl: string
	finalDisplayedUrl: string
	lighthouseVersion: string
	userAgent: string
	fetchTime: Date
	environment: Environment
	runWarnings: any[]
	configSettings: ConfigSettings
	audits: Audits
	categories: Categories
	categoryGroups: CategoryGroups
	timing: Timing
	i18n: I18N
	entities: Entity[]
	fullPageScreenshot: FullPageScreenshot
}

export interface Audits {
	'cumulative-layout-shift': CumulativeLayoutShift
	'mainthread-work-breakdown': BootupTime
	'third-party-summary': DOMSize
	'bootup-time': BootupTime
	'uses-rel-preconnect': FinalScreenshot
	'final-screenshot': FinalScreenshot
	'total-byte-weight': DuplicatedJavascript
	'network-server-latency': BootupTime
	'max-potential-fid': CumulativeLayoutShift
	'script-treemap-data': Diagnostics
	'first-meaningful-paint': BootupTime
	'screenshot-thumbnails': FontDisplay
	'dom-size': DOMSize
	'uses-responsive-images': CumulativeLayoutShift
	'duplicated-javascript': DuplicatedJavascript
	'legacy-javascript': DuplicatedJavascript
	'user-timings': FinalScreenshot
	'modern-image-formats': DuplicatedJavascript
	'font-display': FontDisplay
	'lcp-lazy-loaded': Diagnostics
	'total-blocking-time': DuplicatedJavascript
	'network-requests': Diagnostics
	'uses-optimized-images': BootupTime
	interactive: CriticalRequestChains
	'largest-contentful-paint-element': CriticalRequestChains
	'uses-passive-event-listeners': FinalScreenshot
	'non-composited-animations': FontDisplay
	'timing-budget': FinalScreenshot
	'resource-summary': CumulativeLayoutShift
	'network-rtt': CriticalRequestChains
	'unused-css-rules': BootupTime
	'prioritize-lcp-image': FontDisplay
	redirects: CumulativeLayoutShift
	'server-response-time': CriticalRequestChains
	'efficient-animated-content': DuplicatedJavascript
	'unminified-css': BootupTime
	'no-document-write': FontDisplay
	'uses-long-cache-ttl': BootupTime
	'third-party-facades': FinalScreenshot
	'uses-text-compression': CumulativeLayoutShift
	'render-blocking-resources': CumulativeLayoutShift
	metrics: CumulativeLayoutShift
	'unused-javascript': BootupTime
	'main-thread-tasks': Diagnostics
	diagnostics: Diagnostics
	'offscreen-images': DuplicatedJavascript
	'performance-budget': FontDisplay
	viewport: FinalScreenshot
	'speed-index': DOMSize
	'largest-contentful-paint': CriticalRequestChains
	'first-contentful-paint': BootupTime
	'layout-shift-elements': FontDisplay
	'critical-request-chains': CriticalRequestChains
	'long-tasks': Diagnostics
	'uses-rel-preload': FinalScreenshot
	'unsized-images': FinalScreenshot
	'unminified-javascript': BootupTime
}

export interface BootupTime {
	id: string
	title: string
	description: string
	score: number | null
	scoreDisplayMode: ScoreDisplayMode
	displayValue?: string
	details?: BootupTimeDetails
	numericValue: number
	numericUnit: NumericUnit
	warnings?: any[]
}

export interface BootupTimeDetails {
	items: PurpleItem[]
	type: string
	summary?: PurpleSummary
	headings: Heading[]
	sortedBy?: string[]
	overallSavingsMs?: number
	overallSavingsBytes?: number
}

export interface Heading {
	key: string
	valueType: string
	label: string
	granularity?: number
	displayUnit?: string
	subItemsHeading?: SubItemsHeading
}

export interface SubItemsHeading {
	key: string
	valueType?: string
}

export interface PurpleItem {
	total?: number
	scriptParseCompile?: number
	scripting?: number
	url?: string
	duration?: number
	group?: string
	groupLabel?: string
	serverResponseTime?: number
	origin?: string
	wastedPercent?: number
	wastedBytes?: number
	totalBytes?: number
}

export interface PurpleSummary {
	wastedMs: number
}

export enum NumericUnit {
	Byte = 'byte',
	Millisecond = 'millisecond',
}

export enum ScoreDisplayMode {
	Informative = 'informative',
	Numeric = 'numeric',
}

export interface CriticalRequestChains {
	id: string
	title: string
	description: string
	score: number | null
	scoreDisplayMode: string
	displayValue: string
	details?: CriticalRequestChainsDetails
	numericValue?: number
	numericUnit?: NumericUnit
}

export interface CriticalRequestChainsDetails {
	longestChain?: LongestChain
	chains?: Chains
	type: string
	items?: FluffyItem[]
	sortedBy?: string[]
	headings?: Heading[]
	overallSavingsMs?: number
}

export interface Chains {
	'215FB64B5F85A55402B14B9E8CE2D73E': The215Fb64B5F85A55402B14B9E8Ce2D73E
}

export interface The215Fb64B5F85A55402B14B9E8Ce2D73E {
	children: The215FB64B5F85A55402B14B9E8CE2D73EChildren
	request: Request
}

export interface The215FB64B5F85A55402B14B9E8CE2D73EChildren {
	'41.3': The413
	'41.4': The414
	'41.2': The412
}

export interface The412 {
	children: The412_Children
	request: Request
}

export interface The412_Children {
	'41.14': The414
}

export interface The414 {
	request: Request
}

export interface Request {
	startTime: number
	endTime: number
	responseReceivedTime: number
	transferSize: number
	url: string
}

export interface The413 {
	children: { [key: string]: The414 }
	request: Request
}

export interface FluffyItem {
	items?: ItemItem[]
	headings?: Heading[]
	type?: string
	rtt?: number
	origin?: string
	responseTime?: number
	url?: string
}

export interface ItemItem {
	node?: ItemNode
	percent?: string
	timing?: number
	phase?: string
}

export interface ItemNode {
	boundingRect: NodeValue
	snippet: string
	type: string
	selector: string
	nodeLabel: string
	lhId: string
	path: string
}

export interface NodeValue {
	right: number
	bottom: number
	height: number
	width: number
	left: number
	top: number
}

export interface LongestChain {
	transferSize: number
	duration: number
	length: number
}

export interface CumulativeLayoutShift {
	id: string
	title: string
	description: string
	score: number | null
	scoreDisplayMode: ScoreDisplayMode
	displayValue?: string
	details?: CumulativeLayoutShiftDetails
	numericValue?: number
	numericUnit?: string
}

export interface CumulativeLayoutShiftDetails {
	type: string
	items: TentacledItem[]
	overallSavingsMs?: number
	headings?: Heading[]
	overallSavingsBytes?: number
	sortedBy?: string[]
}

export interface TentacledItem {
	cumulativeLayoutShiftMainFrame?: number
	totalBlockingTime?: number
	observedTraceEnd?: number
	observedFirstMeaningfulPaintTs?: number
	observedCumulativeLayoutShiftMainFrame?: number
	cumulativeLayoutShift?: number
	observedFirstContentfulPaintTs?: number
	observedFirstMeaningfulPaint?: number
	observedLastVisualChangeTs?: number
	observedTraceEndTs?: number
	observedNavigationStart?: number
	observedLoad?: number
	firstContentfulPaint?: number
	observedFirstPaint?: number
	observedFirstPaintTs?: number
	firstMeaningfulPaint?: number
	observedSpeedIndex?: number
	observedLargestContentfulPaint?: number
	observedFirstVisualChangeTs?: number
	observedFirstContentfulPaintAllFramesTs?: number
	observedLargestContentfulPaintAllFramesTs?: number
	observedSpeedIndexTs?: number
	observedLastVisualChange?: number
	observedTimeOriginTs?: number
	observedLargestContentfulPaintTs?: number
	maxPotentialFID?: number
	observedFirstContentfulPaintAllFrames?: number
	observedDomContentLoadedTs?: number
	largestContentfulPaint?: number
	observedTimeOrigin?: number
	observedLoadTs?: number
	interactive?: number
	observedLargestContentfulPaintAllFrames?: number
	observedFirstContentfulPaint?: number
	speedIndex?: number
	observedDomContentLoaded?: number
	observedCumulativeLayoutShift?: number
	observedFirstVisualChange?: number
	timeToFirstByte?: number
	observedNavigationStartTs?: number
	lcpInvalidated?: boolean
	wastedMs?: number
	url?: string
	totalBytes?: number
	resourceType?: string
	requestCount?: number
	label?: string
	transferSize?: number
}

export interface Diagnostics {
	id: string
	title: string
	description: string
	score: null
	scoreDisplayMode: string
	details?: DiagnosticsDetails
}

export interface DiagnosticsDetails {
	type: string
	items?: StickyItem[]
	headings?: Heading[]
	debugData?: DebugData
	nodes?: NodeElement[]
}

export interface DebugData {
	networkStartTimeTs: number
	type: string
}

export interface StickyItem {
	numTasksOver25ms?: number
	numTasksOver50ms?: number
	maxServerLatency?: number
	numTasks?: number
	throughput?: number
	totalByteWeight?: number
	numTasksOver500ms?: number
	numRequests?: number
	rtt?: number
	numTasksOver100ms?: number
	numStylesheets?: number
	numFonts?: number
	mainDocumentTransferSize?: number
	totalTaskTime?: number
	numTasksOver10ms?: number
	numScripts?: number
	maxRtt?: number
	duration?: number
	startTime?: number
	statusCode?: number
	networkEndTime?: number
	experimentalFromMainFrame?: boolean
	networkRequestTime?: number
	sessionTargetType?: SessionTargetType
	protocol?: Protocol
	finished?: boolean
	entity?: Name
	resourceType?: string
	priority?: Priority
	rendererStartTime?: number
	transferSize?: number
	url?: string
	resourceSize?: number
	mimeType?: string
}

export enum Name {
	AccountsDev = 'accounts.dev',
	GoogleFonts = 'Google Fonts',
	NetlifyApp = 'netlify.app',
}

export enum Priority {
	High = 'High',
	Low = 'Low',
	VeryHigh = 'VeryHigh',
}

export enum Protocol {
	Blob = 'blob',
	H2 = 'h2',
	HTTP11 = 'http/1.1',
}

export enum SessionTargetType {
	Page = 'page',
}

export interface NodeElement {
	resourceBytes: number
	name: string
	unusedBytes: number
}

export interface DOMSize {
	id: string
	title: string
	description: string
	score: number
	scoreDisplayMode: string
	displayValue: string
	details?: DOMSizeDetails
	numericValue?: number
	numericUnit?: string
}

export interface DOMSizeDetails {
	items: IndigoItem[]
	type: string
	headings: Heading[]
	summary?: FluffySummary
	isEntityGrouped?: boolean
}

export interface IndigoItem {
	statistic?: string
	value?: Value
	node?: ItemNode
	blockingTime?: number
	entity?: Name
	subItems?: SubItems
	mainThreadTime?: number
	transferSize?: number
}

export interface SubItems {
	items: SubItemsItem[]
	type: string
}

export interface SubItemsItem {
	mainThreadTime?: number
	url: string
	transferSize: number
	blockingTime: number
}

export interface Value {
	value: number
	granularity: number
	type: ScoreDisplayMode
}

export interface FluffySummary {
	wastedBytes: number
	wastedMs: number
}

export interface DuplicatedJavascript {
	id: string
	title: string
	description: string
	score: number
	scoreDisplayMode: ScoreDisplayMode
	details?: DuplicatedJavascriptDetails
	numericValue: number
	numericUnit: NumericUnit
	warnings?: any[]
	displayValue?: string
}

export interface DuplicatedJavascriptDetails {
	type: string
	sortedBy: string[]
	overallSavingsBytes?: number
	items: IndecentItem[]
	headings: Heading[]
	overallSavingsMs?: number
}

export interface IndecentItem {
	totalBytes: number
	url: string
}

export interface FinalScreenshot {
	id: string
	title: string
	description: string
	score: number | null
	scoreDisplayMode: string
	details?: FinalScreenshotDetails
	warnings?: any[]
}

export interface FinalScreenshotDetails {
	timestamp?: number
	timing?: number
	data?: string
	type: string
	headings?: any[]
	items?: any[]
	overallSavingsMs?: number
}

export interface FontDisplay {
	id: string
	title: string
	description: string
	score: number | null
	scoreDisplayMode: string
	details?: FontDisplayDetails
	warnings?: any[]
	displayValue?: string
}

export interface FontDisplayDetails {
	items: HilariousItem[]
	type: string
	headings?: Heading[]
	scale?: number
}

export interface HilariousItem {
	score?: number
	node?: ItemNode
	timing?: number
	timestamp?: number
	data?: string
}

export interface Categories {
	performance: Performance
}

export interface Performance {
	id: string
	title: string
	score: number
	auditRefs: AuditRef[]
}

export interface AuditRef {
	id: string
	weight: number
	group?: Group
	acronym?: string
	relevantAudits?: string[]
}

export enum Group {
	Budgets = 'budgets',
	Hidden = 'hidden',
	Metrics = 'metrics',
}

export interface CategoryGroups {
	'seo-content': A11YAria
	budgets: A11YAria
	metrics: BestPracticesBrowserCompat
	'pwa-optimized': BestPracticesBrowserCompat
	diagnostics: A11YAria
	'a11y-names-labels': A11YAria
	'a11y-language': A11YAria
	'a11y-aria': A11YAria
	'seo-mobile': A11YAria
	'load-opportunities': A11YAria
	'best-practices-trust-safety': BestPracticesBrowserCompat
	'a11y-navigation': A11YAria
	'a11y-tables-lists': A11YAria
	'pwa-installable': BestPracticesBrowserCompat
	'best-practices-ux': BestPracticesBrowserCompat
	'seo-crawl': A11YAria
	'a11y-color-contrast': A11YAria
	'a11y-best-practices': A11YAria
	'best-practices-browser-compat': BestPracticesBrowserCompat
	'best-practices-general': BestPracticesBrowserCompat
	'a11y-audio-video': A11YAria
}

export interface A11YAria {
	title: string
	description: string
}

export interface BestPracticesBrowserCompat {
	title: string
}

export interface ConfigSettings {
	emulatedFormFactor: string
	formFactor: string
	locale: string
	onlyCategories: string[]
	channel: string
}

export interface Entity {
	name: Name
	isFirstParty?: boolean
	isUnrecognized?: boolean
	origins: string[]
	homepage?: string
	category?: string
}

export interface Environment {
	networkUserAgent: string
	hostUserAgent: string
	benchmarkIndex: number
}

export interface FullPageScreenshot {
	nodes: { [key: string]: NodeValue }
	screenshot: Screenshot
}

export interface Screenshot {
	data: string
	width: number
	height: number
}

export interface I18N {
	rendererFormattedStrings: RendererFormattedStrings
}

export interface RendererFormattedStrings {
	varianceDisclaimer: string
	opportunityResourceColumnLabel: string
	opportunitySavingsColumnLabel: string
	errorMissingAuditInfo: string
	errorLabel: string
	warningHeader: string
	passedAuditsGroupTitle: string
	notApplicableAuditsGroupTitle: string
	manualAuditsGroupTitle: string
	toplevelWarningsMessage: string
	crcLongestDurationLabel: string
	crcInitialNavigation: string
	lsPerformanceCategoryDescription: string
	labDataTitle: string
	warningAuditsGroupTitle: string
	snippetExpandButtonLabel: string
	snippetCollapseButtonLabel: string
	thirdPartyResourcesLabel: string
	runtimeDesktopEmulation: string
	runtimeMobileEmulation: string
	runtimeNoEmulation: string
	runtimeSettingsBenchmark: string
	runtimeSettingsCPUThrottling: string
	runtimeSettingsDevice: string
	runtimeSettingsNetworkThrottling: string
	runtimeSettingsUANetwork: string
	runtimeUnknown: string
	dropdownCopyJSON: string
	dropdownDarkTheme: string
	dropdownPrintExpanded: string
	dropdownPrintSummary: string
	dropdownSaveGist: string
	dropdownSaveHTML: string
	dropdownSaveJSON: string
	dropdownViewer: string
	footerIssue: string
	throttlingProvided: string
	calculatorLink: string
	runtimeSettingsAxeVersion: string
	viewTreemapLabel: string
	showRelevantAudits: string
}

export interface Timing {
	total: number
}

export interface LoadingExperience {
	initial_url: string
}