export interface Game {
    background_image : string,
    name: string,
    released: string,
    metacritic_url: string,
    website: string,
    description:string,
    metacritic: string,
    genres: Array<Genre>,
    parent_platform: Array<ParentPlatform>,
    publisher : Array<Publisher>,
    ratings: Array<Rating>,
    screenshot: Array<Screeshot>,
    trailors: Array<Trailor>

}
export interface APIResponse<T> {
    results : Array<T>
}
interface Genre {
    name:string
}
interface ParentPlatform{
    platform:{
        name:string
    }
}
interface Publisher {
    name:string
}
interface Rating {
    id:number,
    count:number,
    title:string
}
interface Screeshot{
    image:string
}
interface Trailor {
    data: {
        max:string
    }
}