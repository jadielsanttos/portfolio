export type PortfolioItem = {
    id: number
    name: string
    description: string
    techs: string[]
    repository: string
    url: string | null 
    image?: string
}